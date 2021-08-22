using Application.Model;
using Application.UseCases.Game;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace SimpleGameForGeeks.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GameController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public GameController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public GuessModel Get([FromServices] IInitializeANewGame initializeANewGameService)
        {
            var gameRoundsCount = int.Parse(_configuration["General:GameRoundsCount"]);
            var gameScore = int.Parse(_configuration["General:GameScore"]);
            var gamePenalty = int.Parse(_configuration["General:GamePenalty"]);
            //TODO fix serialization issue.
            return initializeANewGameService.InintNewGame(gameRoundsCount, gameScore, gamePenalty);
        }
    }
}
