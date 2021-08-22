namespace Application.Model
{
    public class GameCondition : IBaseViewModel
    {

        public int Score { get; private set; }
        public int Penalty { get; private set; }

        public static GameCondition GetInstance(int score, int penalty)
        {
            return new GameCondition()
            {
                Score = score,
                Penalty = penalty
            };

        }
    }
}
