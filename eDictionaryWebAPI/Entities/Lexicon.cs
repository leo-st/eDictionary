using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace eDictionaryWebAPI.Entities;
[Table("Lexicon", Schema ="public")]
public class Lexicon
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column("id")]
    public int Id { get; set; }
    [Column("word")]
    public string? Word { get; set; }
    [Column("translation")]
    public string? Translation { get; set; }
    //[Column("word_type")]
    public WordType? WordType { get; set; }
    //[Column("gender")]
    public Gender? Gender { get; set; }
    [Column("first_letter")]
    public string? FirstLetter { get; set; }
    [Column("description")]
    public string? Description { get; set; }
    [Column("context_example")]
    public string? ContextExample { get; set; }
    public ICollection<GenderWordsLexicon>? GenderWordsLexicons { get; set; }
    public ICollection<ConjugationLexicon>? ConjugationLexicons { get; set; }
}
