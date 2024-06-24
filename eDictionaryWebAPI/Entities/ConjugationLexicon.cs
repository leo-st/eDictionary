using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eDictionaryWebAPI.Entities;
[Table("ConjugationLexicon", Schema ="public")]
public class ConjugationLexicon
{

    [Key]
    [ForeignKey("id_lexicon2_fkey")]
    [Column("id_lexicon")]
    public int LexiconId { get; set; }
    public Lexicon Lexicon { get; set; } // Navigation property

    [Key]
    [ForeignKey("id_conjugation_fkey")]
    [Column("id_conjugation")]
    public int ConjugationId { get; set; }
    public Conjugation Conjugation { get; set; } // Navigation property
}
