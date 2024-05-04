using System.ComponentModel.Design;
using eDictionaryWebAPI.Data;
using eDictionaryWebAPI.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;
using eDictionaryWebAPI.Mapper;
using eDictionaryWebAPI.Models;
using eDictionaryWebAPI.Entities;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddDbContext<AuthContext>(options => 
        options.UseMySQL(builder.Configuration.GetConnectionString("AuthConnection")));
builder.Services.AddDbContext<DictionaryDbContext>(options =>
        options.UseNpgsql(builder.Configuration.GetConnectionString("DictionaryConnection")));

builder.Services.AddIdentityApiEndpoints<IdentityUser>().AddRoles<IdentityRole>().AddEntityFrameworkStores<AuthContext>();

// Correct registration of LexiconMapperService
builder.Services.AddSingleton<IMapperService<LexiconModel, Lexicon >, LexiconMapperService>();
builder.Services.AddScoped<ILexiconService, LexiconService>();


builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("oatuh2", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey
    });

    options.OperationFilter<SecurityRequirementsOperationFilter>();
});
builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
    builder.AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin();
}));

var app = builder.Build();

// Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI();
// }

app.UseSwagger();
app.UseSwaggerUI();

app.MapIdentityApi<IdentityUser>();
//app.MapIdentityApi<IdentityRole>();

app.UseCors("corsapp");
app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();