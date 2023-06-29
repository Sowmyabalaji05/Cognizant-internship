﻿using CRMS.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace CRMS.DTO
{
    public class AddUserRequestDTO //: IValidatableObject
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


        [Required(ErrorMessage = "ConfirmPassword is required")]
        [DataType(DataType.Password)]
        
        [Compare("Password",ErrorMessage = "Passwords do not match")]
        public string? ConfirmPassword { get; set; }

        [Required]
        public string? Gender { get; set; }

        [Required]
        [RegularExpression(@"^\d{10}$", ErrorMessage = "Invalid mobile number")]
        [DataType(DataType.PhoneNumber)]
        public string? PhoneNumber { get; set; }


        [Required]
        [MaxLength(100)]
        public string? Address { get; set; }

     

        [ForeignKey(nameof(Role))]
        public int RoleId { get; set; }

       /* public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            var validator = new AddUserRequestValidator();
            var validationResult = validator.Validate(this);
            return validationResult.Errors.Select(error => new ValidationResult(error.ErrorMessage, new[] { error.PropertyName }));
        }*/
    }
}
