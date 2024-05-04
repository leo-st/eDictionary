using Microsoft.EntityFrameworkCore;
using eDictionaryWebAPI.Entities;

namespace eDictionaryWebAPI.Data;
public class DictionaryDbContext: DbContext
{
    public DictionaryDbContext(DbContextOptions<DictionaryDbContext> options) : base(options)
    {
    }

    public DbSet<Lexicon> Lexicon { get; set; }
}