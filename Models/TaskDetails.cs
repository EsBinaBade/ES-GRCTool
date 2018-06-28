using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWithAngular5.Models
{
    public class TaskDetails
    {
        [Key]
        public int TaskDetailsId { get; set; }
        public string Deadline { get; set; }
        public string Frequency { get; set; }
        public int ClassificationLevelId { get; set; }
        public string Reviewer { get; set; }
        public string Approver { get; set; }

    }
}
