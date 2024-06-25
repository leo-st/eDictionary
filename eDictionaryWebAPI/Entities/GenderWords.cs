using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace eDictionaryWebAPI.Entities;
[Table("GenderWords", Schema ="public")]
public class GenderWords
{

    [Key]
    [Column("lexicon_id")]
    public int LexiconId { get; set; }
    [ForeignKey("LexiconId")]
    public Lexicon Lexicon { get; set; } // Navigation property

    [Column("musculine")]
    public string? Musculine { get; set; }
    [Column("feminine")]
    public string? Feminine { get; set; }
    [Column("neutral")]
    public string? Neutral { get; set; }
}
