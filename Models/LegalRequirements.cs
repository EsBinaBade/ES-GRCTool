using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWithAngular5.Models
{
    public class LegalRequirements
    {
        [Key]
        public int LegalRequirementsId { get; set; }
        public int CountryId { get; set; }
        public string CityName { get; set; }
    }
}
