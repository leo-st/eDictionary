using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eDictionaryWebAPI.Entities;
[Table("Lexicon", Schema ="public")]
public class Lexicon
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column("id")]
    public int Id { get; set; }
    [Column("word_class")]
    public string? WordClass { get; set; }
    [Column("word")]
    public string? Word { get; set; }
    [Column("article")]
    public string? Article { get; set; }
    [Column("translation")]
    public string? Translation { get; set; }
    [Column("first_letter")]
    public string? FirstLetter { get; set; }
    [Column("description")]
    public string? Description { get; set; }
    [Column("context_example")]
    public string? ContextExample { get; set; }
}
