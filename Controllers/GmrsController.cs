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
            IEnumerable<Data> res;
            
            using (var db = new GMRSDBEntities1())
            {
                try
                {
                    db.Configuration.ProxyCreationEnabled = false;
                    res=db.Data.ToList();
                    return Ok(res);                        
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

        [Route("api/gmrs/datacategory")]
        public IHttpActionResult getDataCategory()
        {
            IEnumerable<GMRS.Models.DataCategory> res;

            using (var db = new GMRSDBEntities1())
            {
                try
                {
                    db.Configuration.ProxyCreationEnabled = false;
                    res = db.DataCategory.ToList();
                    return Ok(res);
                }
                catch (Exception ex)
                {
                    return null;
                }
            }
        }
    }
}
