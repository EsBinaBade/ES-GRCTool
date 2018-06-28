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
    public class TaskListController : Controller
    {
        DataAccessLayer objuser = new DataAccessLayer();
        [HttpGet]
        [Route("api/GetTaskList")]
        public IEnumerable<TaskList> GetTaskLists()
        {
            return objuser.GetTaskLists();
        }

        [HttpGet]
        [Route("api/GetTaskListById/{taskId}")]
        public TaskList GetTaskListById(int taskId)
        {
            return objuser.GetTaskListById(taskId);
        }

        [HttpGet]
        [Route("api/GetRoles")]
        public IEnumerable<Roles> GetRoles()
        {
            return objuser.GetRoles();
        }
    }
}