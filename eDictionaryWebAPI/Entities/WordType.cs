using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace eDictionaryWebAPI.Entities;
[Table("WordType", Schema ="public")]
public class WordType
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column("id")]
    public int Id { get; set; }
    [Required]
    [MaxLength(50)]
    [Column("name")]
    public string? Name { get; set; }

    [Required]
    [Column("description")]
    public string? Description { get; set; }

    [Required]
    [Column("example")]
    public string? Example { get; set; }
    [JsonIgnore]

    public ICollection<Lexicon>? Lexicons { get; set; }
}
