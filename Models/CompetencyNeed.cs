using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWithAngular5.Models
{
    public class CompetencyNeed
    {
        public int CompetencyNeedId { get; set; }
        public int SkillLevel { get; set; }
        public string Label { get; set; }
        public string Description { get; set; }

    }
}
