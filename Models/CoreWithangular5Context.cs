﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CoreWithAngular5.Models
{
    public partial class CoreWithangular5Context : DbContext
    {
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<Organization> Organization { get; set; }
        public virtual DbSet<ProductKey> ProductKey { get; set; }
        public virtual DbSet<EntityInformations> EntityInformations { get; set; }
        public virtual DbSet<ClassificationLevel> ClassificationLevel { get; set; }
        public virtual DbSet<IsoStandard> IsoStandard { get; set; }
        public virtual DbSet<RolesAndResponsibilities> RolesAndResponsibilities { get; set; }
        public virtual DbSet<CompetencyNeed> CompetencyNeed { get; set; }
        public virtual DbSet<CommitteeCharter> CommitteeCharter { get; set; }
        public virtual DbSet<TaskList> TaskList { get; set; }
        public virtual DbSet<Roles> Roles { get; set; }
        public virtual DbSet<TaskByRole> TaskByRole { get; set; }
        public virtual DbSet<TaskDetails> TaskDetails { get; set; }
        public virtual DbSet<SwotAnalysis> SwotAnalysis { get; set; }
        public virtual DbSet<Issues> Issues { get; set; }
        public virtual DbSet<LegalRequirements> LegalRequirements { get; set; }
        public virtual DbSet<Country> Country { get; set; }
        public virtual DbSet<City> City { get; set; }
        public virtual DbSet<ScopeStatements> ScopeStatements { get; set; }
        public virtual DbSet<Goals> Goals { get; set; }
        public virtual DbSet<Objectives> Objectives { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer(@"Data Source=DESKTOP-JAUR2NI\SQLEXPRESS;Initial Catalog=CoreWithangular5;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Organization>(entity =>
            {
                entity.Property(e => e.DateAndTime)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LegalName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.OrganizationName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ProductKey>(entity =>
            {
                entity.Property(e => e.ProductKeyName)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<EntityInformations>(entity =>
            {
                entity.Property(e => e.EntityInformation)
                    .HasMaxLength(8000)
                    .IsUnicode(false);

                //entity.Property(e => e.EntityInformationId)
                //.HasKey(e => e.EntityInformationId)
                //.HasName("PrimaryKey_EntityInformationId");

            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserName)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });
        }
    }
}
