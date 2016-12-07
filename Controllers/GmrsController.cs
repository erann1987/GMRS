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
        public IEnumerable<Data> getCategories()
        {
            IEnumerable<Data> res;
            using (var db = new GMRSEntities())
            {
                res = db.Data.ToList();
            }
            return res;
        }
    }
}
