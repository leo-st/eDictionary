using Microsoft.EntityFrameworkCore;
using eDictionaryWebAPI.Entities;

namespace eDictionaryWebAPI.Data;
public class DictionaryDbContext : DbContext
{
    public DictionaryDbContext(DbContextOptions<DictionaryDbContext> options) : base(options)
    {
    }

    public DbSet<WordType> WordTypes { get; set; }
    public DbSet<GenderWords> GenderWords { get; set; }
    public DbSet<Conjugation> Conjugations { get; set; }
    public DbSet<Lexicon> Lexicons { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Lexicon>()
                .HasOne(l => l.WordType)
                .WithMany(g => g.Lexicons)
                .HasForeignKey("word_type") // Specify the foreign key column name
                .HasConstraintName("word_type_fkey");

        base.OnModelCreating(modelBuilder);
    }
}