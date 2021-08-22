using System;
using System.Runtime.Serialization;

namespace Domin
{
    [Serializable]
    public class Person : IBaseEntity, IBaseGuessModel
    {
        private Person()
        {
        }

        public int Id { get; private set; }
        public PersonNationality Nationality { get; private set; }
        public Image Image { get; private set; }

        public static Person GetInstance(int id, PersonNationality nationality)
        {
            var image = Image.GetInstance((int)nationality);

            return new Person()
            {
                Id = id,
                Nationality = nationality,
                Image = image
            };
        }

    }
}
