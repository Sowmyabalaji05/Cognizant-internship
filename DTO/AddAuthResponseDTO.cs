using System.ComponentModel.DataAnnotations;

namespace CRMS.DTO
{
    public class AddAuthResponseDTO
    {
        public string token { get; set; }



        [Required(ErrorMessage = "Username is required.")]
        [StringLength(50, ErrorMessage = "Username must be between 1 and 50 characters.", MinimumLength = 1)]



        public string UserName { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email address.")]
        public string Email { get; set; }
        public int RoleId { get; set; }

        public int UserId { get; set; }
    }
}
