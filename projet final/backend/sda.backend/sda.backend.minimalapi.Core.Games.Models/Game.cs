namespace sda.backend.minimalapi.Core.Games.Models
{
    /// <summary>
    /// Game model, domain first
    /// </summary>
    public class Game
    {
        #region Properties
        public int Id { get; set; }

        public DateTime BeginDate { get; set; }

        public DateTime? EndDate { get; set; }

        public string Character { get; set; } = string.Empty;

        public bool Success { get; set; }
        #endregion
    }
}
