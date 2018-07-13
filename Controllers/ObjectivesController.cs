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
    public class ObjectivesController : Controller
    {
        DataAccessLayer objuser = new DataAccessLayer();

        [HttpGet]
        [Route("api/getObjectives")]
        public IEnumerable<Objectives> getObjectives()
        {
            return objuser.getObjectives();
        }

        [HttpGet]
        [Route("api/getObjectiveById/{objectiveId}")]
        public Objectives getObjectivesById(int objectiveId)
        {
         return objuser.getObjectiveById(objectiveId);
        }

        [HttpPost]
        [Route("api/addObjectives")]
        public int addObjectives([FromBody] Objectives objectives)
        {
            return objuser.addObjectives(objectives);
        }

        [HttpPut]
        [Route("api/editObjectives")]
        public int editObjectives([FromBody] Objectives objectives)
        {
            return objuser.editObjectives(objectives);
        }

        [HttpDelete]
        [Route("api/deleteObjectives/{objectiveId}")]
        public int deleteObjectives(int objectiveId)
        {
            return objuser.deleteObjectives(objectiveId);
        }

    }
}