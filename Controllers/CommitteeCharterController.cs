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
    public class CommitteeCharterController : Controller
    {

        DataAccessLayer objuser = new DataAccessLayer();

        [HttpGet]
        [Route("api/GetCommittee")]
        public IEnumerable<CommitteeCharter> GetCommittee()
        {
           return objuser.GetCommitteeCharters();
        }

        [HttpGet]
        [Route("api/GetCommitteeById/{committeeId}")]
        public CommitteeCharter GetCommitteeById(int committeeId)
        {
            return objuser.GetCommitteeCharterByID(committeeId);
        }

        [HttpPost]
        [Route("api/addCommittee")]
        public int AddCommittee([FromBody] CommitteeCharter committeeCharter)
        {
            return objuser.AddCommittee(committeeCharter);
        }

        [HttpPut]
        [Route("api/editCommittee")]
        public int Edit([FromBody] CommitteeCharter committeeCharter)
        {
            return objuser.EditCommittee(committeeCharter);
        }

        [HttpDelete]
        [Route("api/deleteCommittee/{committeeId}")]
        public int Delete(int committeeId)
        {
            return objuser.DeleteCommittee(committeeId);
        }
    }
}