using GMRS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GMRS.Controllers
{
    public class GmrsController : ApiController
    {
        [Route("api/gmrs/data")]
        public IHttpActionResult getData()
        {            
            using (var db = new GMRSDBEntities1())
            {
                try
                {
                    db.Configuration.ProxyCreationEnabled = false;
                    var data = (from DataCategory in db.DataCategory
                                select new
                                {
                                    DataCategory.Data.Value,
                                    DataCategory.Data.Year,
                                    DataCategory.Data.Month,
                                    DataCategory.Data.ValueType.ValueTypeName,
                                    DataCategory.CategoryDesc
                                }).ToList(); 
                    return Ok(data);                        
                }
                catch (Exception ex)
                {
                    return null;
                }
            }
        }
        [Route("api/gmrs/categories")]
        public IHttpActionResult getCategories()
        {
            IEnumerable<Category> res;

            using (var db = new GMRSDBEntities1())
            {
                try
                {
                    db.Configuration.ProxyCreationEnabled = false;
                    res = db.Category.ToList();
                    return Ok(res);
                }
                catch (Exception ex)
                {
                    return null;
                }
            }
        }

        [Route("api/gmrs/valuetype")]
        public IHttpActionResult getValueType()
        {
            IEnumerable<GMRS.Models.ValueType> res;

            using (var db = new GMRSDBEntities1())
            {
                try
                {
                    db.Configuration.ProxyCreationEnabled = false;
                    res = db.ValueType.ToList();
                    return Ok(res);
                }
                catch (Exception ex)
                {
                    return null;
                }
            }
        }


        [Route("api/gmrs/relevantdata/{type}/{category}/{year}")]
        public IHttpActionResult getRelevantData([FromUri] int year, [FromUri] string category, [FromUri] string type)
        {
            using (var db = new GMRSDBEntities1())
            {
                try
                {
                    db.Configuration.ProxyCreationEnabled = false;
                    var data = (from DataCategory in db.DataCategory
                                where
                                  DataCategory.Data.Year == year &&
                                  DataCategory.Category.CategoryName == category &&
                                  DataCategory.Data.ValueType.ValueTypeName == type
                                group new { DataCategory, DataCategory.Data } by new
                                {
                                    DataCategory.CategoryDesc,
                                    DataCategory.Data.Year
                                } into g
                                select new
                                {
                                    y = (double?)g.Sum(p => p.DataCategory.Data.Value),
                                    name = g.Key.CategoryDesc
                                }).ToList();
                    return Ok(data);
                }
                catch (Exception ex)
                {
                    return null;
                }
            }
        }

    
    }
}
