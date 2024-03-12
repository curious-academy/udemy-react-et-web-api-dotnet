using sda.backend.minimalapi.Core.Games.Interfaces;
using sda.backend.minimalapi.Core.Games.Models;
using sda.backend.minimalapi.Core.Games.Services.Models;

namespace sda.backend.minimalapi.Core.Games.Services
{
	public class SqlServerIPostGameService : IPostGameService
	{
		#region Fields
		private readonly GameDbContext context;
		#endregion

		#region Constructors
		public SqlServerIPostGameService(GameDbContext context)
		{
			this.context = context;
		}
		#endregion

		#region Public methods
		public void PostOne(Game game)
		{
			this.context.Games.Add(game);
			this.context.SaveChanges();
		}

		public Task PostOneAsync(Game game)
		{
			this.context.Games.Add(game);
			return this.context.SaveChangesAsync();
		}
		#endregion
	}
}
