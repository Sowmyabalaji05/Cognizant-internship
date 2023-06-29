using CRMS.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace CRMS.DTO
{
    public class UpdateUserRequestDTO
    {
        [Required(ErrorMessage = "User Name is required")]
        public string? UserName { get; set; }



        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email address")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        [StringLength(100, MinimumLength = 8)]
        public string? Password { get; set; }


        [Required]
        public string? Gender { get; set; }

        [Required]
        [RegularExpression(@"^\d{10}$", ErrorMessage = "Invalid mobile number")]

        public int PhoneNumber { get; set; }

        [Required]
        [MaxLength(100)]
        public string? Address { get; set; }

        [ForeignKey(nameof(Role))]
        public int RoleId { get; set; }
    }
}
