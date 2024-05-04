using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;

namespace eDictionaryWebAPI.Data;

public class AuthContext : IdentityDbContext
{
    public AuthContext(DbContextOptions<AuthContext> dbContextOptions) : base(dbContextOptions) 
        {
            try 
            {
                var databaseCreator = Database.GetService<IDatabaseCreator>() as RelationalDatabaseCreator;
                if(databaseCreator != null) 
                {
                    if (!databaseCreator.CanConnect()) databaseCreator.Create();
                    if (!databaseCreator.HasTables()) databaseCreator.CreateTables();
                }
            }
            catch(Exception ex) {
                Console.WriteLine(ex.Message);
            }
        }

        //public DbSet<Customer> Customers { get; set; }
}