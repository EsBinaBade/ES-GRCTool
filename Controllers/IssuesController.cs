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
    public class IssuesController : Controller
    {
        DataAccessLayer objuser = new DataAccessLayer();

        [HttpGet]
        [Route("api/GetIssues")]
        public IEnumerable<Issues> GetIssues()
        {
            return objuser.GetIssues();
        }

        [HttpGet]
        [Route("api/GetIssuesByType")]
        public IEnumerable<Issues> GetIssuesByType()
        {
            return objuser.GetIssuesByType();
        }

        [HttpGet]
        [Route("api/GetIssuesByExternalType")]
        public IEnumerable<Issues> GetIssuesByExternalType()
        {
            return objuser.GetIssuesByExternalType();
        }
        [HttpGet]
        [Route("api/GetIssuesById/{issueId}")]
        public Issues GetIssuesById(int issueId)
        {
            return objuser.GetIssuesById(issueId);
        }

        [HttpPost]
        [Route("api/addIssues")]
        public int AddIssues([FromBody] Issues issues)
        {
            return objuser.AddIssues(issues);
        }

        [HttpPut]
        [Route("api/updateIssues")]
        public int Edit([FromBody] Issues issues)
        {
            return objuser.EditIssues(issues);
        }

        [HttpDelete]
        [Route("api/deleteIssues/{issueId}")]
        public int Delete(int issueId)
        {
            return objuser.DeleteIssues(issueId);
        }
    }
}
