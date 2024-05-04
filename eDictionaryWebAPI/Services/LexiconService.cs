using eDictionaryWebAPI.Data;
using Microsoft.EntityFrameworkCore;
using eDictionaryWebAPI.Entities;
using eDictionaryWebAPI.Models;
using eDictionaryWebAPI.Mapper;
namespace eDictionaryWebAPI.Services;

public interface ILexiconService 
{
    Task<IEnumerable<Lexicon>> GetAllWordsByFirstLetter(string first_letter);
    Task InsertNewWord(LexiconModel word);
    Task<IEnumerable<Lexicon>> GetAllWordsAlphabetically();
}
public class LexiconService: ILexiconService
{
    private readonly DictionaryDbContext _context;
    private readonly IMapperService< LexiconModel, Lexicon> _mapperService;
    public LexiconService( DictionaryDbContext context, IMapperService<LexiconModel, Lexicon> mapperService)
    {
        _context = context;
        _mapperService = mapperService;
    }
    public async Task<IEnumerable<Lexicon>> GetAllWordsByFirstLetter(string first_letter) 
    {
        return await _context.Lexicon.Where(w => w.FirstLetter == first_letter.ToUpper()).ToListAsync();
    }
    public async Task InsertNewWord(LexiconModel word) 
    {
        var lexiconEntity = _mapperService.Map(word);
        _context.Lexicon.Add(lexiconEntity);
        await _context.SaveChangesAsync();
    }
    public async Task<IEnumerable<Lexicon>> GetAllWordsAlphabetically() 
    {
        return await _context.Lexicon.OrderByDescending(l => l.FirstLetter).ToListAsync();
    }
}