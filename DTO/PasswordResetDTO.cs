using System.ComponentModel.DataAnnotations;

namespace CRMS.DTO
{
    public class PasswordResetDTO
    {
        [Required]
        
        public string token { get; set; }



        [Required(ErrorMessage = "Password is required.")]
        [StringLength(60, ErrorMessage = "Password must be between 6 and 50 characters.", MinimumLength = 6)]
        public string Password { get; set; }

        [Required ,Compare("Password")]

        public string ConfirmPassword { get; set; }
    }
}
