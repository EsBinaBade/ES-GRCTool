using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreWithAngular5.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoreWithAngular5.Controllers
{
    [Produces("application/json")]
    public class CompetencyNeedController : Controller
    {
        DataAccessLayer objuser = new DataAccessLayer();
        [Route("api/GetCompetencyNeed")]
        [HttpGet]
        public IEnumerable<CompetencyNeed> GetCompetencyNeed()
        {
            return objuser.GetCompetencyNeeds();
        }
    }
}