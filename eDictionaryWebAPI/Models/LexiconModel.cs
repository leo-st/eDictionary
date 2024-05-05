using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eDictionaryWebAPI.Models;

public class LexiconModel
{
    public string? Word { get; set; }
    public string? WordClass { get; set; }
    public string? Article { get; set; }
    public string? Translation { get; set; }
    public string? Description { get; set; }
    public string? ContextExample { get; set; }
}