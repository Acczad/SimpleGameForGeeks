using Application.Model;

namespace Application.UseCases.Game
{
    public interface IInitializeANewGame
    {
        public GuessModel InintNewGame(int roundCount, int score, int penalty);
    }
}