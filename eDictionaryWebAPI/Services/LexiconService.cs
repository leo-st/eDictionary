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
    Task<bool> InsertNewWord(LexiconCreateModel word);
    Task<IEnumerable<Lexicon>> GetAllWordsAlphabetically();
    Task<IEnumerable<WordType>> GetWordTypes();
    Task<bool> EditWord(LexiconEditModel word);
}
public class LexiconService : ILexiconService
{
    private readonly DictionaryDbContext _context;
    // private readonly IMapperService<LexiconModel, Lexicon> _mapperService;
    public LexiconService(DictionaryDbContext context)
    {
        _context = context;
        //_mapperService = mapperService;
    }
    // public async Task<IEnumerable<Lexicon>> GetAllWordsByFirstLetter(string first_letter) 
    // {
    //     return await _context.Lexicons.Where(w => w.FirstLetter == first_letter.ToUpper()).ToListAsync();
    // }
    public async Task<bool> InsertNewWord(LexiconCreateModel word)
    {
        var lexicon = new Lexicon
        {
            Word = word.Word,
            Translation = word.Translation,
            Description = word.Description,
            ContextExample = word.ContextExample,
            FirstLetter = word.Word?.Substring(0, 1).ToUpper(),
            GenderWords = word.GenderWordsModel != null
                ? new GenderWords
                {
                    Musculine = word.GenderWordsModel.Musculine,
                    Feminine = word.GenderWordsModel.Feminine,
                    Neutral = word.GenderWordsModel.Neutral
                }
                : null,
            Conjugation = word.ConjugationModel != null
                ? new Conjugation
                {
                    Singular1 = word.ConjugationModel.Singular1,
                    Singular2 = word.ConjugationModel.Singular2,
                    Singular3 = word.ConjugationModel.Singular3,
                    Plural1 = word.ConjugationModel.Plural1,
                    Plural2 = word.ConjugationModel.Plural2,
                    Plural3 = word.ConjugationModel.Plural3,
                    Infinite = word.ConjugationModel.Infinite
                }
                : null
        };

        if (_context.WordTypes.Find(word.WordTypeId) != null)
        {
            lexicon.WordType = _context.WordTypes.Find(word.WordTypeId);
        }
        else
        {
            return false;
        }

        _context.Lexicons.Add(lexicon);
        await _context.SaveChangesAsync();
        return true;
    }
    public async Task<IEnumerable<Lexicon>> GetAllWordsAlphabetically()
    {
        IEnumerable<Lexicon> wordsAlphabetically = await _context.Lexicons.OrderByDescending(l => l.FirstLetter).
                Include(w => w.WordType).
                Include(g => g.GenderWords).
                Include(c => c.Conjugation).
                ToListAsync();
        return wordsAlphabetically;
    }

    public async Task<IEnumerable<WordType>> GetWordTypes()
    {
        return await _context.WordTypes.OrderBy(w => w.Id).ToListAsync();
    }
    public async Task<bool> EditWord(LexiconEditModel word)
    {
        // Extract current Word
        Lexicon? existingWord = await _context.Lexicons
            .Include(l => l.WordType)
            .Include(g => g.GenderWords)
            .Include(c => c.Conjugation)
            .FirstOrDefaultAsync(w => w.Id == word.Id);

        if (existingWord == null)
        {
            return false; // Word not found
        }

        // Update properties if they are changed
        if (word.Translation != null && existingWord.Translation != word.Translation)
        {
            existingWord.Translation = word.Translation;
        }
        if (word.Description != null && existingWord.Description != word.Description)
        {
            existingWord.Description = word.Description;
        }
        if (word.ContextExample != null && existingWord.ContextExample != word.ContextExample)
        {
            existingWord.ContextExample = word.ContextExample;
        }

        existingWord.FirstLetter = existingWord.Word.Substring(0, 1).ToUpper();

        // Update WordType if changed
        if (word.WordTypeId != null && (existingWord.WordType == null || existingWord.WordType.Id != word.WordTypeId))
        {
            var newWordType = await _context.WordTypes.FindAsync(word.WordTypeId);
            if (newWordType != null)
            {
                existingWord.WordType = newWordType;
            }
            else
            {
                return false; // Invalid WordTypeId
            }
        }

        // Update or add GenderWords
        if (word.GenderWordsModel != null)
        {
            if (existingWord.GenderWords != null)
            {
                existingWord.GenderWords.Musculine = word.GenderWordsModel.Musculine;
                existingWord.GenderWords.Feminine = word.GenderWordsModel.Feminine;
                existingWord.GenderWords.Neutral = word.GenderWordsModel.Neutral;
            }
            else
            {
                existingWord.GenderWords = new GenderWords
                {
                    LexiconId = existingWord.Id,
                    Musculine = word.GenderWordsModel.Musculine,
                    Feminine = word.GenderWordsModel.Feminine,
                    Neutral = word.GenderWordsModel.Neutral
                };
                _context.GenderWords.Add(existingWord.GenderWords);
            }

            // Remove existing Conjugation if GenderWords is updated
            if (existingWord.Conjugation != null)
            {
                _context.Conjugations.Remove(existingWord.Conjugation);
                existingWord.Conjugation = null;
            }
        }

        // Update or add Conjugation
        if (word.ConjugationModel != null)
        {
            if (existingWord.Conjugation != null)
            {
                existingWord.Conjugation.Singular1 = word.ConjugationModel.Singular1;
                existingWord.Conjugation.Singular2 = word.ConjugationModel.Singular2;
                existingWord.Conjugation.Singular3 = word.ConjugationModel.Singular3;
                existingWord.Conjugation.Plural1 = word.ConjugationModel.Plural1;
                existingWord.Conjugation.Plural2 = word.ConjugationModel.Plural2;
                existingWord.Conjugation.Plural3 = word.ConjugationModel.Plural3;
                existingWord.Conjugation.Infinite = word.ConjugationModel.Infinite;
            }
            else
            {
                existingWord.Conjugation = new Conjugation
                {
                    LexiconId = existingWord.Id,
                    Singular1 = word.ConjugationModel.Singular1,
                    Singular2 = word.ConjugationModel.Singular2,
                    Singular3 = word.ConjugationModel.Singular3,
                    Plural1 = word.ConjugationModel.Plural1,
                    Plural2 = word.ConjugationModel.Plural2,
                    Plural3 = word.ConjugationModel.Plural3,
                    Infinite = word.ConjugationModel.Infinite
                };
                _context.Conjugations.Add(existingWord.Conjugation);
            }

            // Remove existing GenderWords if Conjugation is updated
            if (existingWord.GenderWords != null)
            {
                _context.GenderWords.Remove(existingWord.GenderWords);
                existingWord.GenderWords = null;
            }
        }

        // Save changes to the database
        await _context.SaveChangesAsync();
        return true;
    }
}