using eDictionaryWebAPI.Data;
using Microsoft.EntityFrameworkCore;
using eDictionaryWebAPI.Entities;
using eDictionaryWebAPI.Models;
using eDictionaryWebAPI.Mapper;
using ZstdSharp.Unsafe;
namespace eDictionaryWebAPI.Services;

public interface ILexiconService 
{
    // Task<IEnumerable<Lexicon>> GetAllWordsByFirstLetter(string first_letter);
    Task InsertNewWord(LexiconModel word);
    Task<IEnumerable<Lexicon>> GetAllWordsAlphabetically();
    Task<IEnumerable<WordType>> GetWordTypes();
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
    // public async Task<IEnumerable<Lexicon>> GetAllWordsByFirstLetter(string first_letter) 
    // {
    //     return await _context.Lexicons.Where(w => w.FirstLetter == first_letter.ToUpper()).ToListAsync();
    // }
    public async Task InsertNewWord(LexiconModel word) 
    {
        Lexicon lexicon = new Lexicon{
            Word = word.Word,
            Translation = word.Translation,
            Description = word.Description,
            ContextExample = word.ContextExample,
            FirstLetter = word.Word?.Substring(0, 1).ToUpper()
        };
             
        if (int.TryParse(word.WordTypeId, out int wordTypeId))
        {   
            lexicon.WordType = _context.WordTypes.Find(wordTypeId);
        }
        if (!string.IsNullOrEmpty(word.short_name))
        {
            lexicon.Gender = _context.Genders.Find(word.short_name);
        }
        
        GenderWords? genderWords = null;
        int? genderId =  null;
        if(word.GenderWordsModel != null){
                genderWords = new GenderWords{
                Musculine = word.GenderWordsModel.Musculine,
                Feminine = word.GenderWordsModel.Feminine, 
                Neutral =word.GenderWordsModel.Neutral
            };

            _context.GenderWords.Add(genderWords);
            await _context.SaveChangesAsync();
            genderId = genderWords.Id;
        }

        int? conjugationId = null;
        Conjugation? conjugation = null;
        if(word.ConjugationModel != null){
            conjugation = new Conjugation{
                Singular1 = word.ConjugationModel.Singular1,
                Singular2 = word.ConjugationModel.Singular2,
                Singular3 = word.ConjugationModel.Singular3,
                Plural1 = word.ConjugationModel.Plural1,
                Plural2 = word.ConjugationModel.Plural2,
                Plural3 = word.ConjugationModel.Plural3,
                Infinite = word.ConjugationModel.Infinite
            };

            _context.Conjugations.Add(conjugation);
            await _context.SaveChangesAsync();
            conjugationId = conjugation.Id;


        }

        _context.Lexicons.Add(lexicon);
        await _context.SaveChangesAsync();
        int lexiconId = lexicon.Id;
        
        if(genderWords!=null){
            GenderWordsLexicon genderWordsLexicon = new GenderWordsLexicon{
                GenderWordsId = (int)genderId,
                LexiconId = lexiconId
            };
            _context.GenderWordsLexicons.Add(genderWordsLexicon);
            await _context.SaveChangesAsync();
        }
        if(conjugation!=null){
            ConjugationLexicon conjugationLexicon = new ConjugationLexicon{
                ConjugationId = (int)conjugationId,
                LexiconId = lexiconId
            };
            _context.ConjugationLexicons.Add(conjugationLexicon);
            await _context.SaveChangesAsync();
        }



    }
    public async Task<IEnumerable<Lexicon>> GetAllWordsAlphabetically() 
    {
        IEnumerable<Lexicon> wordsAlphabetically = await _context.Lexicons.OrderByDescending(l => l.FirstLetter).
                Include(w => w.WordType).
                Include(g => g.GenderWordsLexicons).ThenInclude(gwl => gwl.GenderWords).
                Include(c => c.ConjugationLexicons).ThenInclude(gwl => gwl.Conjugation).
                ToListAsync();
        return wordsAlphabetically;
    }

    public async Task<IEnumerable<WordType>> GetWordTypes()
    {
        return await _context.WordTypes.OrderBy(w => w.Id).ToListAsync();
    }
}