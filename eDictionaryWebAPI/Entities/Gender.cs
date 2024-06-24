using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eDictionaryWebAPI.Entities;
[Table("Gender", Schema ="public")]
public class Gender
{
    [Key]
    [Column("short_name")]
    public string? ShortName { get; set; }

    [Required]
    [MaxLength(50)]
    [Column("name")]
    public string? Name { get; set; }

    [Required]
    [Column("article")]
    public string? Article { get; set; }

    public ICollection<Lexicon>? Lexicons { get; set; }
}
