using sda.backend.minimalapi.Core.Games.Interfaces;
using sda.backend.minimalapi.Core.Games.Models;
namespace sda.backend.minimalapi.ui;

public static class GameEndpoints
{
	public static void MapGameEndpoints(this IEndpointRouteBuilder routes)
	{
		var group = routes.MapGroup("/api/Game").WithTags(nameof(Game));

		group.MapGet("/", (IGetAllGameService service) =>
		{
			return service.GetAll();
		})
		.WithName("GetAllGames")
		.RequireAuthorization()
		.WithOpenApi();

		group.MapGet("/{id}", (int id) =>
		{
			//return new Game { ID = id };
		})
		.WithName("GetGameById")
		.WithOpenApi();

		group.MapPut("/{id}", (int id, Game input) =>
		{
			return TypedResults.NoContent();
		})
		.WithName("UpdateGame")
		.WithOpenApi();

		group.MapPost("/", async (Game model, IPostGameService service) =>
		{
			await service.PostOneAsync(model);

			return TypedResults.Created($"/api/Games/{model.Id}", model);
		})
		.WithName("CreateGame")
		.RequireAuthorization()
		.WithOpenApi();

		group.MapDelete("/{id}", (int id) =>
		{
			//return TypedResults.Ok(new Game { ID = id });
		})
		.WithName("DeleteGame")
		.WithOpenApi();
	}
}
