using Application.Model;
using Domin;
using System;

namespace Application.UseCases.Game
{
    public class InitializeANewGame : IInitializeANewGame
    {
        public GuessModel InintNewGame(int roundCount, int score, int penalty)
        {
            var gameModel = GuessModel.GetInstance(roundCount);

            var gameCondtions = GameCondition.GetInstance(score, penalty);
            gameModel.SetGameConditions(gameCondtions);

            for (int i = 0; i < roundCount; i++)
            {
                var person = Person.GetInstance(i, GetRandomNationality());
                gameModel.AddPersonToGuessList(person); 
            }

            return gameModel;
        }

        private PersonNationality GetRandomNationality()
        {
            Random random = new Random();
            return (PersonNationality)random.Next(1, 4);
        }

    }
}
