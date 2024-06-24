using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace eDictionaryWebAPI.Entities;
[Table("GenderWordsLexicon", Schema ="public")]
public class GenderWordsLexicon
{

    [Key]
    [ForeignKey("id_lexicon_fkey")]
    [Column("id_lexicon")]
    public int LexiconId { get; set; }
    public Lexicon Lexicon { get; set; } // Navigation property

    [Key]
    [ForeignKey("id_gender_words_fkey")]
    [Column("id_gender_words")]
    public int GenderWordsId { get; set; }
    public GenderWords GenderWords { get; set; } // Navigation property
}
