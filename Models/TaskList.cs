using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWithAngular5.Models
{
    public class TaskList
    {
        [Key]
        public int TaskId { get; set; }
        public string TaskName { get; set; }
    }
}
