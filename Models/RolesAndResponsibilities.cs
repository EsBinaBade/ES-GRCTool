using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWithAngular5.Models
{
    public class RolesAndResponsibilities
    {
        [Key]
        public int RoleID { get; set; }
        public string RoleName { get; set; }
        public string AssignedTo { get; set; }
        public string RoleDescription { get; set; }
        public string Authorities { get; set; }
        public string Competency { get; set; }

    }
}
