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
    public class LegalRequirementsController : Controller
    {
        DataAccessLayer objuser = new DataAccessLayer();
        
        [HttpGet]
        [Route("api/GetCountries")]
        public IEnumerable<Country> GetCountries()
        {
            return objuser.GetCountries();
        }

        [HttpGet]
        [Route("api/GetCities")]
        public IEnumerable<City> GetCities()
        {
            return objuser.GetCities();
            
        }

        [HttpGet]
        [Route("api/GetCityByCountryId/{countryId}")]
        public IActionResult GetCityByCountryId(int countryId)
        {
            return objuser.GetCityByCountryId(countryId);

        }
        [HttpPost]
        [Route("api/AddLegalRequirements")]
        public int AddLegalRequirements([FromBody] LegalRequirements legal)
        {
            return objuser.AddLegalRequirements(legal);
        }

    }
}