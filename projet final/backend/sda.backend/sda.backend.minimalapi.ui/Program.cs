using Microsoft.EntityFrameworkCore;
using sda.backend.minimalapi.Core.Games.Interfaces;
using sda.backend.minimalapi.Core.Games.Services;
using sda.backend.minimalapi.Core.Games.Services.Models;
using sda.backend.minimalapi.ui;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<GameDbContext>(options =>
{
    string? connectionString = builder.Configuration.GetConnectionString("sda.backoffice.database");
    options.UseSqlServer(connectionString);
});

//builder.Services.AddScoped<IGetAllGameService, FakeInMemoryGetAllGameService>();
builder.Services.AddScoped<IGetAllGameService, SqlServerGetAllGameService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.MapGameEndpoints();

app.Run();
