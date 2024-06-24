using eDictionaryWebAPI.Models;
using eDictionaryWebAPI.Entities;
using eDictionaryWebAPI.Data;

namespace eDictionaryWebAPI.Mapper;

public class LexiconMapperService : IMapperService<LexiconModel, Lexicon>
{
    private readonly DictionaryDbContext _context;

    public LexiconMapperService(DictionaryDbContext context)
    {
        _context = context;
    }

    public Lexicon Map(LexiconModel source)
    {
        if (source == null)
            return null;

        var destination = new Lexicon
        {
            Word = source.Word,
            Translation = source.Translation,
            Description = source.Description,
            ContextExample = source.ContextExample,
            FirstLetter = source.Word?.Substring(0, 1).ToUpper()
        };

        if (int.TryParse(source.WordTypeId, out int wordTypeId))
        {   
            destination.WordType = _context.WordTypes.Find(wordTypeId);
        }

        // if (!string.IsNullOrEmpty(source.GenderId))
        // {
        //     destination.Gender = _context.Genders.Find(source.GenderId);
        // }

        return destination;
    }
}