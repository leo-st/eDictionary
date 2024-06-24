using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace eDictionaryWebAPI.Entities;
[Table("GenderWords", Schema ="public")]
public class GenderWords
{

    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column("id")]
    public int Id { get; set; }
    [Column("musculine")]
    public string? Musculine { get; set; }
    [Column("feminine")]
    public string? Feminine { get; set; }
    [Column("neutral")]
    public string? Neutral { get; set; }
    [JsonIgnore]
    public ICollection<GenderWordsLexicon>? GenderWordsLexicons { get; set; }
}
