using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWithAngular5.Models
{
    public class Objectives
    {
        [Key]
        public int ObjectiveId { get; set; }
        public string ObjectiveNumber { get; set; }
        public string SMARTspecific { get; set; }
        public string SMARTmeasurable { get; set; }
        public string SMARTacheivable { get; set; }
        public string SMARTrealistic { get; set; }
        public string SMARTtimed { get; set; }
        public string SMARTobjective { get; set; }
        public string RelatedProjects { get; set; }
        public string ResponsiblePerson { get; set; }
        public int GoalId { get; set; }

    }
}
