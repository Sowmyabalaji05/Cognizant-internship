using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using CRMS.Models;

namespace CRMS.DTO
{
    public class BookingDTO
    {

        [Key]
        public int BookingId { get; set; }
        [Required]
        [ForeignKey("Car")]
        public int CarId { get; set; }

        public double TotalPrice { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime ReturnDate { get; set; }

        //public Boolean IsReturned { get; set; }
        [ForeignKey("User")]
        public int UserId { get; set; }
       // public User User { get; set; }
        //public Car car { get; set; }


    }
}
