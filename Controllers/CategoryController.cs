using GMRS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GMRS.Controllers
{
    public class CategoryController : ApiController
    {
        public IEnumerable<Category> getCategories()
        {
            IEnumerable<Category> res;
            using (var db = new GMRSDBEntities())
            {
                res = db.Category.ToList();
            }
            return res;
        }
    }
}
