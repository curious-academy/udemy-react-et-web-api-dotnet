using sda.backend.minimalapi.Core.Auths.Models;
namespace sda.backend.minimalapi.ui;

public static class CreationUserEndpoints
{
    public static void MapCreationUserEndpoints(this IEndpointRouteBuilder routes)
    {
        var group = routes.MapGroup("/api/auth/create").WithTags(nameof(CreationUser));

        group.MapPost("/", (CreationUser model) =>
        {
            //return TypedResults.Created($"/api/CreationUsers/{model.ID}", model);
        })
        .WithName("CreateCreationUser")
        .WithOpenApi();
    }
}
