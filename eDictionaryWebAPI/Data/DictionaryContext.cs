using Microsoft.EntityFrameworkCore;
using eDictionaryWebAPI.Entities;

namespace eDictionaryWebAPI.Data;
public class DictionaryDbContext : DbContext
{
    public DictionaryDbContext(DbContextOptions<DictionaryDbContext> options) : base(options)
    {
    }

    public DbSet<WordType> WordTypes { get; set; }
    public DbSet<Gender> Genders { get; set; }
    public DbSet<GenderWords> GenderWords { get; set; }
    public DbSet<Conjugation> Conjugations { get; set; }
    public DbSet<Lexicon> Lexicons { get; set; }
    public DbSet<GenderWordsLexicon> GenderWordsLexicons { get; set; }
    public DbSet<ConjugationLexicon> ConjugationLexicons { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<GenderWordsLexicon>()
            .HasKey(gw => new { gw.LexiconId, gw.GenderWordsId });

        modelBuilder.Entity<GenderWordsLexicon>()
            .HasOne(sc => sc.Lexicon)
            .WithMany(s => s.GenderWordsLexicons)
            .HasForeignKey(sc => sc.LexiconId);

        modelBuilder.Entity<GenderWordsLexicon>()
            .HasOne(sc => sc.GenderWords)
            .WithMany(s => s.GenderWordsLexicons)
            .HasForeignKey(sc => sc.GenderWordsId);

        modelBuilder.Entity<ConjugationLexicon>()
            .HasKey(cl => new { cl.LexiconId, cl.ConjugationId });
        
        modelBuilder.Entity<ConjugationLexicon>()
            .HasOne(sc => sc.Lexicon)
            .WithMany(s => s.ConjugationLexicons)
            .HasForeignKey(sc => sc.LexiconId);

        modelBuilder.Entity<ConjugationLexicon>()
            .HasOne(sc => sc.Conjugation)
            .WithMany(s => s.ConjugationLexicons)
            .HasForeignKey(sc => sc.ConjugationId);

        modelBuilder.Entity<Lexicon>()
                .HasOne(l => l.Gender)
                .WithMany(g => g.Lexicons)
                .HasForeignKey("gender") // Specify the foreign key column name
                .HasConstraintName("gender_fkey");
        modelBuilder.Entity<Lexicon>()
                .HasOne(l => l.WordType)
                .WithMany(g => g.Lexicons)
                .HasForeignKey("word_type") // Specify the foreign key column name
                .HasConstraintName("word_type_fkey");

        base.OnModelCreating(modelBuilder);
    }
}