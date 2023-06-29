using System.ComponentModel.DataAnnotations;

namespace CRMS.DTO
{
    public class RoleDTO
    {
        [Key]
        public int RoleId { get; set; }
        public string? RoleName { get; set; }
    }
}
