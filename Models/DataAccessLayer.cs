using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
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

        //get Task Details
        public IEnumerable<TaskDetails> GetTaskDetails()
        {
            try
            {
                return db.TaskDetails.ToList();
            }
            catch
            {
                throw;
            }
        }

        public TaskDetails GetTaskDetailsById(int taskDetailsId)
        {
            try
            {
                TaskDetails taskDetails = db.TaskDetails.Find(taskDetailsId);
                return (taskDetails);
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

        //edit task Details
        public int EditTaskDetails(TaskDetails taskDetails)
        {
            try
            {
                db.Entry(taskDetails).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Swot Analysis
        public IEnumerable<SwotAnalysis> GetSwotAnalysis()
        {
            try
            {
                return db.SwotAnalysis.ToList();
            }
            catch
            {
                throw;
            }
        }

        public SwotAnalysis GetSwotAnalysisById(int swotAnalysisId)
        {
            try
            {
                SwotAnalysis swotAnalysis = db.SwotAnalysis.Find(swotAnalysisId);
                return swotAnalysis;
            }
            catch
            {
                throw;
            }
        }

        public IEnumerable<SwotAnalysis> GetSwotInternal()
        {
            var obj = (from swot in db.SwotAnalysis
                       where swot.Name == "Strength" || swot.Name == "Weakness"
                       select new SwotAnalysis
                       {
                           SwotAnalysisId = swot.SwotAnalysisId,
                           Name = swot.Name,
                           Description = swot.Description
                       }).ToList();
            return obj;
        }

        public IEnumerable<SwotAnalysis> GetSwotExternal()
        {
            var obj = (from swot in db.SwotAnalysis
                       where swot.Name == "Opportunities" || swot.Name == "Threat"
                       select new SwotAnalysis
                       {
                           SwotAnalysisId = swot.SwotAnalysisId,
                           Name = swot.Name,
                           Description = swot.Description
                       }).ToList();
            return obj;
        }

        public int AddSwotAnalysis(SwotAnalysis swotAnalysis)
        {
            try
            {
                db.SwotAnalysis.Add(swotAnalysis);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int EditSwotAnalysis(SwotAnalysis swotAnalysis)
        {
            try
            {
                db.Entry(swotAnalysis).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //User Issues
        public IEnumerable<Issues> GetIssues()
        {
            try
            {
              return db.Issues.ToList();
                
            }
            catch
            {
                throw;
            }
        }

        public Issues GetIssuesById(int issueId)
        {
            try
            {
                Issues issues = db.Issues.Find(issueId);
                return issues;
            }
            catch
            {
                throw;
            }
        }

        public int AddIssues(Issues issues)
        {
            try
            {
                db.Issues.Add(issues);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int EditIssues(Issues issues)
        {
            try
            {
                db.Entry(issues).State = EntityState.Modified;
                db.SaveChanges();
                return 1;

            }
            catch
            {
                throw;
            }
        }

        public int DeleteIssues(int issueId)
        {
            try
            {
                Issues issues = db.Issues.Find(issueId);
                db.Issues.Remove(issues);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get Countries
        public IEnumerable<Country> GetCountries()
        {
            return db.Country.ToList();
        }

        //get Cities by countryId
        public IActionResult GetCityByCountryId(int countryId)
        {
           var obj = (from cty in db.City
                   join cntry in db.Country on cty.CountryId equals cntry.CountryId
                   where cty.CountryId == countryId

                   select new CityByCountryViewModel()
                   {
                        CityName= cty.CityName
                   }).ToList();
            return new JsonResult(obj);
        }

        //get Issues by type
        public IEnumerable<Issues> GetIssuesByType()
        {
            var obj = (from issue in db.Issues
                       where issue.Type == "Internal"

                       select new Issues()
                       {
                           IssueId = issue.IssueId,
                           Type = issue.Type,
                           Description=issue.Description
                       }).ToList();
            return obj;
        }

        public IEnumerable<Issues> GetIssuesByExternalType()
        {
            var obj = (from issue in db.Issues
                       where issue.Type == "External"

                       select new Issues()
                       {
                           IssueId= issue.IssueId,
                           Type = issue.Type,
                           Description = issue.Description
                       }).ToList();
            return obj;
        }
        //get cities
        public IEnumerable<City> GetCities()
        {
            return db.City.ToList();


        }

        //public List<City> GetCities()
        //{
        //    using (CoreWithangular5Context db = new CoreWithangular5Context())
        //    {
        //        db.Database.OpenConnection();
        //        DbCommand cmd = db.Database.GetDbConnection().CreateCommand();
        //        cmd.CommandText = "GetCityByCountryId";
        //        cmd.CommandType = CommandType.StoredProcedure;
        //        List<City> cities;
        //        using (var reader = cmd.ExecuteReader())
        //        {
        //            cities = reader.MapToList<City>();
        //        }
        //        return cities;
        //    }
        //}

        //get LegalRequirements
        public IEnumerable<LegalRequirements> GetLegalRequirements()
        {
            return db.LegalRequirements.ToList();
        }

        public int AddLegalRequirements(LegalRequirements legal)
        {
            try
            {
                db.LegalRequirements.Add(legal);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
            
        }

        //Define Scope Statements
        public int AddScopeStatements(ScopeStatements scope)
        {
            try
            {
                db.ScopeStatements.Add(scope);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }

        }

        //Define Goals
        public int addGoals(Goals goals)
        {
            try
            {
                db.Goals.Add(goals);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //get Goals
        public IEnumerable<Goals> GetGoals()
        {
            return db.Goals.ToList();
        }

        //get GoalsbyId
        public Goals GetGoalsById(int goalId)
        {
            try
            {
                Goals goals = db.Goals.Find(goalId);
                return goals;

            }
            catch
            {
                throw;
            }
        }

        //edit Goals
        public int EditGoals(Goals goals)
        {
            try
            {
                db.Entry(goals).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Delete Goals
        public int DeleteGoals(int goalId)
        {
            try
            {
                Goals goals = db.Goals.Find(goalId);
                db.Goals.Remove(goals);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Define Objectives
        public int addObjectives(Objectives objectives)
        {
            try
            {
                db.Objectives.Add(objectives);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get Objectives
        public IEnumerable<Objectives>  getObjectives()
        {
            try
            {
                return db.Objectives.ToList();
            }
            catch
            {
                throw;
            }
        }

        //Get Objectives by Id
        public Objectives getObjectiveById(int objectiveId)
        {
            try
            {
                Objectives objectives = db.Objectives.Find(objectiveId);
                return objectives;
            }
            catch
            {
                throw;
            }
          
        }

        //Edit Objectives
        public int editObjectives(Objectives objectives)
        {
            try
            {
                db.Entry(objectives).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Delete Objectives
        public int deleteObjectives(int objectiveId)
        {
            try
            {
                Objectives objectives = db.Objectives.Find(objectiveId);
                db.Objectives.Remove(objectives);
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
