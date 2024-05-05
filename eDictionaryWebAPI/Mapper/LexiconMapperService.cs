using eDictionaryWebAPI.Models;
using eDictionaryWebAPI.Entities;

namespace eDictionaryWebAPI.Mapper;

public class LexiconMapperService : IMapperService< LexiconModel, Lexicon>
{
    public Lexicon Map(LexiconModel source)
    {
        if (source == null)
            return null;

        var destination = new Lexicon
        {
            Word = source.Word,
            WordClass = source.WordClass,
            Article = source.Article,
            Translation = source.Translation,
            Description = source.Description,
            ContextExample = source.ContextExample
        };

        // No special case handling needed for FirstLetter, as it's a property of Lexicon entity
        destination.FirstLetter = source.Word.Substring(0, 1).ToUpper();

        return destination;
    }
}