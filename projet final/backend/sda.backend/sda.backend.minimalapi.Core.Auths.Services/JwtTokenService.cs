﻿using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using sda.backend.minimalapi.Core.Auths.Interfaces;
using sda.backend.minimalapi.Core.Auths.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace sda.backend.minimalapi.Core.Auths.Services
{
    public class JwtTokenService : ITokenService
    {
        #region Fields
        private const int ExpirationMinutes = 30;
        private readonly IConfiguration configuration;
        #endregion

        #region Constructors
        public JwtTokenService(IConfiguration configuration)
        {
            this.configuration = configuration;
        }
        #endregion

        #region Public methods
        public string Create(AuthenticationUser user)
        {
            var expiration = DateTime.UtcNow.AddMinutes(ExpirationMinutes);
            var token = Create(
                CreateClaims(user),
                CreateSigningCredentials(),
                expiration
            );
            var tokenHandler = new JwtSecurityTokenHandler();

            return tokenHandler.WriteToken(token);
        }

        public JwtSecurityToken Create(List<Claim> claims, SigningCredentials credentials, DateTime expiration)
        {
            return new(
                this.configuration.GetSection("JwtTokenSettings")["ValidIssuer"],
                this.configuration.GetSection("JwtTokenSettings")["ValidAudience"],
                claims,
                expires: expiration,
                signingCredentials: credentials
        );
        }
        #endregion

        #region Internal methods
        private List<Claim> CreateClaims(AuthenticationUser user)
        {
            var jwtSub = this.configuration.GetSection("JwtTokenSettings")["JwtRegisteredClaimNamesSub"];

            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, jwtSub),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.Email, user.Email)
            };

            return claims;
        }

        private SigningCredentials CreateSigningCredentials()
        {
            var symmetricSecurityKey = this.configuration.GetSection("JwtTokenSettings")["SymmetricSecurityKey"];

            return new SigningCredentials(
                new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(symmetricSecurityKey!)
                ),
                SecurityAlgorithms.HmacSha256
            );
        }
        #endregion
    }
}
