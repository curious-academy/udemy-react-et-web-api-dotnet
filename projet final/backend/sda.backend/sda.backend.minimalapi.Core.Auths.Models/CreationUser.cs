namespace sda.backend.minimalapi.Core.Auths.Models
{
    public class CreationUser
    {
        #region Properties
        public string UserName { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;
        #endregion
    }
}
