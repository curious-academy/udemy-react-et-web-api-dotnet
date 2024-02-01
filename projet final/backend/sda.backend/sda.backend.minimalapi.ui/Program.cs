using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using sda.backend.minimalapi.Core.Auths.Interfaces;
using sda.backend.minimalapi.Core.Auths.Models;
using sda.backend.minimalapi.Core.Auths.Services;
using sda.backend.minimalapi.Core.Games.Interfaces;
using sda.backend.minimalapi.Core.Games.Services;
using sda.backend.minimalapi.Core.Games.Services.Models;
using sda.backend.minimalapi.ui;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllHeaders",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
#region Parametrage swagger + bearer dans swagger
builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("Bearer", new Microsoft.OpenApi.Models.OpenApiSecurityScheme()
    {
        In = ParameterLocation.Header,
        Description = "Please enter a valid token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "Bearer"
    });

    options.AddSecurityRequirement(new OpenApiSecurityRequirement()
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type=ReferenceType.SecurityScheme,
                    Id="Bearer"
                }
            },
            new string[]{}
        }
    });
});
#endregion

string? connectionString = builder.Configuration.GetConnectionString("sda.backoffice.database");
builder.Services.AddDbContext<GameDbContext>(options =>
{
    options.UseSqlServer(connectionString);
});

builder.Services.AddDbContext<AuthenticationDbContext>(options =>
{
    options.UseSqlServer(connectionString, b => b.MigrationsAssembly("sda.backend.minimalapi.ui"));
});

builder.Services.AddIdentityCore<AuthenticationUser>(options =>
{
    //options.SignIn.RequireConfirmedEmail = true;
})
.AddEntityFrameworkStores<AuthenticationDbContext>();


IConfigurationSection jwtSection = builder.Configuration.GetSection("JwtTokenSettings");
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.IncludeErrorDetails = true;

    options.TokenValidationParameters = new TokenValidationParameters()
    {
        ClockSkew = TimeSpan.Zero,
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = jwtSection["ValidIssuer"],
        ValidAudience = jwtSection["ValidAudience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSection["SymmetricSecurityKey"]!))
    };
});

builder.Services.AddScoped<ITokenService, JwtTokenService>();
//builder.Services.AddScoped<IGetAllGameService, FakeInMemoryGetAllGameService>();
builder.Services.AddScoped<IGetAllGameService, SqlServerGetAllGameService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAllHeaders");

app.UseHttpsRedirection();

app.MapGameEndpoints();

app.MapCreationUserEndpoints();

app.Run();
