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
    public class SwotAnalysisController : Controller
    {
        DataAccessLayer objuser = new DataAccessLayer();

        [HttpGet]
        [Route("api/GetSwotAnalysis")]
        public IEnumerable<SwotAnalysis> GetSwotAnalysis()
        {
            return objuser.GetSwotAnalysis();
        }

        [HttpGet]
        [Route("api/GetSwotInternal")]
        public IEnumerable<SwotAnalysis> GetSwotInternal()
        {
           return objuser.GetSwotInternal();
        }

        [HttpGet]
        [Route("api/GetSwotExternal")]
        public IEnumerable<SwotAnalysis> GetSwotExternal()
        {
            return objuser.GetSwotExternal();
        }
        [HttpGet]
        [Route("api/GetSwotAnalysisById/{swotAnalysisId}")]
        public SwotAnalysis GetSwotAnalysisById(int swotAnalysisId)
        {
            return objuser.GetSwotAnalysisById(swotAnalysisId);
        }

        [HttpPost]
        [Route("api/AddSwotAnalysis")]
        public int AddSwotAnalysis([FromBody] SwotAnalysis swotAnalysis)
        {
            return objuser.AddSwotAnalysis(swotAnalysis);
        }

        [HttpPut]
        [Route("api/EditSwotAnalysis")]
        public int EditSwotAnalysis ([FromBody] SwotAnalysis swotAnalysis)
        {
            return objuser.EditSwotAnalysis(swotAnalysis);
        }

    }
}