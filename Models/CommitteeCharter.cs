using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWithAngular5.Models
{
    public class CommitteeCharter
    {
        [Key]
        public int CommitteeId { get; set; }
        public string Chairman { get; set; }
        public string DeputyChairman { get; set; }
        public string Members { get; set; }
        public string About { get; set; }
        public string Attendance { get; set; }
        public string Voting { get; set; }
        public string MeetingFrequency { get; set; }


    }
}
