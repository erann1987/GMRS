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
        public IHttpActionResult getCategories()
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
    }
}
