using System.ComponentModel.Design;
using Microsoft.AspNetCore.Mvc;
using eDictionaryWebAPI.Services;
using eDictionaryWebAPI.Entities;
using eDictionaryWebAPI.Models;

namespace eDictionaryWebAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class DictionaryController : ControllerBase
{
    private readonly ILexiconService _service;

    public DictionaryController(ILexiconService service)
    {
        _service = service;
    }

    // [HttpPost("GetWordsByFirstLetter")]
    // public async Task<ActionResult<IEnumerable<Lexicon>>> GetWordsByFirstLetter(char firstLetter)
    // {
    //     var words = await _service.GetAllWordsByFirstLetter(firstLetter.ToString());

    //     if (words == null)
    //     {
    //         return NotFound(); // Return 404 if no words found
    //     }

    //     return Ok(words); // Return 200 with the list of words
    // }

    [HttpPost("InsertWord")]
    public async Task<ActionResult> InsertWord(LexiconModel model)
    {
        await _service.InsertNewWord(model);
        return Ok(); // Return 200 with the list of words
    }
    [HttpGet("GetAllWords")]
    public async Task<ActionResult<IEnumerable<Lexicon>>> GetAllWords()
    {
        var words = await _service.GetAllWordsAlphabetically();

        if (words == null)
        {
            return NotFound(); // Return 404 if no words found
        }

        return Ok(words); // Return 200 with the list of words
    }
    [HttpPost("GetAllWordTypes")]
    public async Task<ActionResult<IEnumerable<WordType>>> GetAllWordTypes()
    {
        var words = await _service.GetWordTypes();

        if (words == null)
        {
            return NotFound(); // Return 404 if no words found
        }

        return Ok(words); // Return 200 with the list of words
    }
}
