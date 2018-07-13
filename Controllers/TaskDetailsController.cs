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
    public class TaskDetailsController : Controller
    {
        DataAccessLayer objuser = new DataAccessLayer();

        [HttpGet]
        [Route("api/GetTaskDetails")]
        public IEnumerable<TaskDetails> GetTaskDetails()
        {
            return objuser.GetTaskDetails();
        }

        [HttpGet]
        [Route("api/GetTaskDetailsById/{taskDetailsId}")]
        public TaskDetails GetTaskDetailsById(int taskDetailsId)
        {
            return objuser.GetTaskDetailsById(taskDetailsId);
        }

        [HttpPost]
        [Route("api/AddTaskDetails")]
        public int AddTaskDetails([FromBody] TaskDetails taskDetails)
        {
            return objuser.AddTaskDetails(taskDetails);
        }

        [HttpPut]
        [Route("api/EditTaskDetails")]
        public int EditTaskDetails([FromBody] TaskDetails taskDetails)
        {
            return objuser.EditTaskDetails(taskDetails);
        }
    }
}