namespace Domin
{
    public class Image : IBaseEntity
    {
        private Image()
        {
        }

        public int Id { get; private set; }
        public string Url { get; private set; } = string.Empty;

        public static Image GetInstance(int id)
        {
            return new Image()
            {
                Id = id,
                Url = $@"images\{id}.jpg"
            };

        }
    }
}
