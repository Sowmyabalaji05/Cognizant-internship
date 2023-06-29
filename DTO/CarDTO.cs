using System.ComponentModel.DataAnnotations;

namespace CRMS.DTO
{
    public class CarDTO
    {
        [Key]
        public int CarId { get; set; }
        public string? Brand { get; set; }

        public int Rating { get; set; }
        public string? CarName { get; set; }

        public string? ImgUrl { get; set; }
        public string? Model { get; set; }

        public string? SeatType { get; set; }
        public double PricePerDay { get; set; }

        public string? Automatic { get; set; }
        public string? Gps { get; set; }
        public string? Speed { get; set; }


        public string? Description { get; set; }
    }
}
