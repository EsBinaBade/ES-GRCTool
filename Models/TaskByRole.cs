using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWithAngular5.Models
{
    public class TaskByRole
    {
        [Key]
        public int TaskByRoleId { get; set; }
        public int TaskId { get; set; }
        public int RoleId { get; set; }
    }
}
