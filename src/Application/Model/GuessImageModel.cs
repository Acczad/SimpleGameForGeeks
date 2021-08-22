using Domin;
using System.Collections.Generic;

namespace Application.Model
{
    public class GuessModel : IBaseViewModel
    {
    
        private GuessModel()
        {
        }

        public List<IBaseGuessModel> GuessList { get; private set; }
        public GameCondition GameConditions { get; private set; }

        public static GuessModel GetInstance(int roundCount)
        {
            return new GuessModel
            {
                GuessList = new List<IBaseGuessModel>(roundCount)
            };
        }
        public void SetGameConditions(GameCondition conditions)
        {
            GameConditions = conditions;
        }
        public void AddPersonToGuessList(IBaseGuessModel guessModel)
        {
            GuessList.Add(guessModel);
        }

    }
}
