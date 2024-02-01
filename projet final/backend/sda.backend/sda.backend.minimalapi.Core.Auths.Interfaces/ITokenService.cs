using Microsoft.IdentityModel.Tokens;
using sda.backend.minimalapi.Core.Auths.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace sda.backend.minimalapi.Core.Auths.Interfaces
{
    /// <summary>
    /// Contrat pour créer un servoce de génération de token
    /// </summary>
    public interface ITokenService
    {
        string Create(AuthenticationUser user);

        JwtSecurityToken Create(List<Claim> claims, SigningCredentials credentials, DateTime expiration);
    }
}
