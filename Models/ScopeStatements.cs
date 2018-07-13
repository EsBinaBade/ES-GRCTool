using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWithAngular5.Models
{
    public class ScopeStatements
    {
        [Key]
        public int ScopeId { get; set; }
        public string Departments { get; set; }
        public string SOA { get; set; }
        public string SOADate { get; set; }


    }
}
