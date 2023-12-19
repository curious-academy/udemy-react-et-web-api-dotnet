using sda.backend.minimalapi.Core.Games.Interfaces;
using sda.backend.minimalapi.Core.Games.Models;
using sda.backend.minimalapi.Core.Games.Services.Models;

namespace sda.backend.minimalapi.Core.Games.Services
{
    public class SqlServerGetAllGameService : IGetAllGameService
    {
        private readonly GameDbContext context;

        #region Constructors
        public SqlServerGetAllGameService(GameDbContext context)
        {
            this.context = context;
        }
        #endregion

        #region Public methods
        public IEnumerable<Game> GetAll()
        {
            var query = from item in context.Games
                        where item.Character != null
                        select item;

            //return this.context.Games.Where(item => item.Character != null).ToList();
            return query.ToList();
        }
        #endregion
    }
}
