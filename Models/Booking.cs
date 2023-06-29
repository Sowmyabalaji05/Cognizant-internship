using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace CRMS.Models
{
    public class Booking
    {
        [Key]
        public int BookingId { get; set; }
        [Required]
        [ForeignKey("Car")]
        public int CarId { get; set; }
        [ForeignKey("User")]
        public int UserId { get; set; }

        public double TotalPrice { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime ReturnDate { get; set; }

        //public Boolean IsReturned { get; set; }
      
        public User User { get; set; }
        public Car Car { get; set; }

       
    }
}
