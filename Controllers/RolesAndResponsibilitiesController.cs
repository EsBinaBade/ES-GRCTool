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
    public class RolesAndResponsibilitiesController : Controller
    {
        DataAccessLayer objuser = new DataAccessLayer();
        [Route("api/GetRolesAndResponsibilities")]
        [HttpGet]
        public IEnumerable<RolesAndResponsibilities> GetRolesAndResponsibilities()
        {
            return objuser.GetRolesAndResponsibilities();
        }

        [HttpGet]
        [Route("api/GetRolesAndResponsibilitiesById/{roleID}")]
        public RolesAndResponsibilities GetRolesAndResponsibilitiesById(int roleID)
        {
            return objuser.GetRolesAndResponsibilitiesById(roleID);
        }

        [HttpPost]
        [Route("api/addRolesAndResponsibilities")]
        public int AddRolesAndResponsibilities([FromBody] RolesAndResponsibilities roles)
        {
            return objuser.AddRolesAndResponsibilities(roles);
        }

        [HttpPut]
        [Route("api/editRolesAndResponsibilities")]
        public int Edit([FromBody] RolesAndResponsibilities roles)
        {
            return objuser.EditRolesAndResponsibilities(roles);
        }

        [HttpDelete]
        [Route("api/deleteRolesAndResponsibilities/{roleID}")]
        public int Delete(int roleID)
        {
            return objuser.DeleteRolesAndResponsibilities(roleID);
        }




    }
}