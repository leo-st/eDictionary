using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace eDictionaryWebAPI.Entities;
[Table("Conjugation", Schema ="public")]
public class Conjugation
{

    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column("id")]
    public int Id { get; set; }
    [Column("1_singular")]
    public string? Singular1 { get; set; }
    [Column("2_singular")]
    public string? Singular2 { get; set; }
    [Column("3_singular")]
    public string? Singular3 { get; set; }
    [Column("1_plural")]
    public string? Plural1 { get; set; }
    [Column("2_plural")]
    public string? Plural2 { get; set; }
    [Column("3_plural")]
    public string? Plural3 { get; set; }
    [Column("infinite")]
    public string? Infinite { get; set; }
    [JsonIgnore]
    public ICollection<ConjugationLexicon>? ConjugationLexicons { get; set; }
}
