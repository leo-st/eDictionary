using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eDictionaryWebAPI.Models;

public class LexiconCreateModel : LexiconModel
{
    public required string Word { get; set; }
    public required string Translation { get; set; }
    public required int WordTypeId { get; set; }

}

public class LexiconEditModel : LexiconModel
{
    public required int Id {get; set;}
    public string? Translation { get; set; }
    public int? WordTypeId { get; set; }

}

public class LexiconModel
{
    public string? Description { get; set; }
    public string? ContextExample { get; set; }
    public GenderWordsModel? GenderWordsModel{ get; set; }
    public ConjugationModel? ConjugationModel{ get; set; }
}

public class GenderWordsModel
{
    public string? Musculine { get; set; }
    public string? Feminine { get; set; }
    public string? Neutral { get; set; }
}

public class ConjugationModel
{
    public string? Singular1 { get; set; }
    public string? Singular2 { get; set; }
    public string? Singular3 { get; set; }
    public string? Plural1 { get; set; }
    public string? Plural2 { get; set; }
    public string? Plural3 { get; set; }
    public string? Infinite { get; set; }
}