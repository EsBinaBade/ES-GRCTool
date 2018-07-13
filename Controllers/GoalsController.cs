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
    public class GoalsController : Controller
    {
        DataAccessLayer objuser = new DataAccessLayer();
        
        [HttpPost]
        [Route("api/addGoals")]
        public int AddGoals([FromBody] Goals goals)
        {
            return objuser.addGoals(goals);
        }

        [HttpGet]
        [Route("api/getGoals")]
        public IEnumerable<Goals> GetGoals()
        {
            return objuser.GetGoals();
        }

        [HttpGet]
        [Route("api/getGoalsById/{goalId}")]
        public Goals GetGoalsById(int goalId)
        {
            return objuser.GetGoalsById(goalId);
        }

        [HttpPut]
        [Route("api/editGoals")]
        public int EditGoals([FromBody] Goals goals)
        {
            return objuser.EditGoals(goals);
        }

        [HttpDelete]
        [Route("api/deleteGoals/{goalId}")]
        public int Delete (int goalId)
        {
            return objuser.DeleteGoals(goalId);
        }
    }
}