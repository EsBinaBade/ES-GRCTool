using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWithAngular5.Models
{
    public class DataAccessLayer
    {
        CoreWithangular5Context db = new CoreWithangular5Context();

        public IEnumerable<User> GetUser()
        {
            try
            {
                return db.User.ToList();
            }
            catch
            {
                throw;
            }
        }

        public IEnumerable<ClassificationLevel> GetClassificationLevels()
        {
            try
            {
                return db.ClassificationLevel.ToList();
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<ProductKey> GetProductKey()
        {
            try
            {
                return db.ProductKey.ToList();
            }
            catch
            {
                throw;
            }
        }
        //get all organization
        public IEnumerable<Organization> GetOrganizations()
        {
            try
            {
                return db.Organization.ToList();
            }
            catch
            {
                throw;
            }
        }

        public int UpdateOrganization(Organization organization)
        {
            try
            {
                db.Entry(organization).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular employee 
        public Organization GetOrganizationById(int organizationId)
        {
            try
            {
                Organization organization = db.Organization.Find(organizationId);
                return organization;
            }
            catch
            {
                throw;
            }
        }

        public ClassificationLevel GetClassificationlevelById(int ClassificationLevelId)
        {
            try
            {
                ClassificationLevel classificationLevel = db.ClassificationLevel.Find(ClassificationLevelId);
                return classificationLevel;
            }
            catch
            {
                throw;
            }
        }

        public int UpdateClassificationLevel(ClassificationLevel classificationLevel)
        {
            try
            {
                db.Entry(classificationLevel).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }
        //to delete ClassificationLevel
        public int DeleteClassificationLevel(int classificationLevelId)
        {
            try
            {
                ClassificationLevel classificationlevel = db.ClassificationLevel.Find(classificationLevelId);
                db.ClassificationLevel.Remove(classificationlevel);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Delete Organization
        public int DeleteOrganization(int organizationId)
        {
            try
            {
                Organization org = db.Organization.Find(organizationId);
                db.Organization.Remove(org);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //To Add new employee record   
        public int Adduser(User user)
        {
            try
            {
                db.User.Add(user);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int AddClassificationLevel(ClassificationLevel classificationLevel)
        {
            try
            {
                db.ClassificationLevel.Add(classificationLevel);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //To add EntityInformation
        public int AddEntityInfo(EntityInformations entityInformations)
        {
            try
            {
                db.EntityInformations.Add(entityInformations);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int AddProductKey(ProductKey productKey)
        {
            try
            {
                db.ProductKey.Add(productKey);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        

        //to Add new Organization
        public int AddOrganization(Organization organization)
        {
            try
            {
                db.Organization.Add(organization);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get Iso Standard
        public IEnumerable<IsoStandard> GetIsoStandard()
        {
            try
            {
                return db.IsoStandard.ToList();
                
            }
            catch
            {
                throw;
            }
        }

        public IEnumerable<CompetencyNeed> GetCompetencyNeeds()
        {
            try
            {
                return db.CompetencyNeed.ToList();

            }
            catch
            {
                throw;
            }
        }
        //Get Role And responsibilities
        public IEnumerable<RolesAndResponsibilities> GetRolesAndResponsibilities()
        {
            try
            {
                return db.RolesAndResponsibilities.ToList();
            }
            catch
            {
                throw;
            }
        }

        //Add Roles and responsibilities
        public int AddRolesAndResponsibilities(RolesAndResponsibilities rolesAndResponsibilities)
        {
            try
            {
                db.RolesAndResponsibilities.Add(rolesAndResponsibilities);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Edit Roles And responsibilities
        public int EditRolesAndResponsibilities (RolesAndResponsibilities rolesAndResponsibilities)
        {
            try
            {
                db.Entry(rolesAndResponsibilities).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //delete roles and Responsibilities
        public int DeleteRolesAndResponsibilities(int roleID)
        {
            try
            {
                RolesAndResponsibilities roles = db.RolesAndResponsibilities.Find(roleID);
                db.RolesAndResponsibilities.Remove(roles);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //get role by Id
        public RolesAndResponsibilities GetRolesAndResponsibilitiesById(int roleID)
        {
            try
            {
                RolesAndResponsibilities roles = db.RolesAndResponsibilities.Find(roleID);
                return roles;
            }
            catch
            {
                throw;
            }
        }

        //Committee Charter started
        public IEnumerable<CommitteeCharter> GetCommitteeCharters()
        {
            try
            {
                return db.CommitteeCharter.ToList();
            }
            catch
            {
                throw;
            }
        }

        public CommitteeCharter GetCommitteeCharterByID(int committeeId)
        {
            try
            {
                CommitteeCharter committeeCharter = db.CommitteeCharter.Find(committeeId);
                return committeeCharter;
            }
            catch
            {
                throw;
            }
        }

        public int AddCommittee(CommitteeCharter committeeCharter)
        {
            try
            {
                db.CommitteeCharter.Add(committeeCharter);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int EditCommittee(CommitteeCharter committeeCharter)
        {
            try
            {
                db.Entry(committeeCharter).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
                
            }
            catch
            {
                throw;
            }
        }

        public int DeleteCommittee(int committeeId)
        {
            try
            {
                CommitteeCharter committeeCharter = db.CommitteeCharter.Find(committeeId);
                db.CommitteeCharter.Remove(committeeCharter);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //get Task List
        public IEnumerable<TaskList> GetTaskLists()
        {
            try
            {
                return db.TaskList.ToList();
            }
            catch
            {
                throw;
            }
        }

        public TaskList GetTaskListById(int taskId)
        {
            try
            {
                TaskList taskList = db.TaskList.Find(taskId);
                return taskList;
            }
            catch
            {
                throw;
            }
        }

        //get Roles
        public IEnumerable<Roles> GetRoles()
        {
            try
            {
                return db.Roles.ToList();
            }
            catch
            {
                throw;
            }
        }

        //add TaskDetails
        public int AddTaskDetails(TaskDetails taskDetails)
        {
            try
            {
                db.TaskDetails.Add(taskDetails);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}
