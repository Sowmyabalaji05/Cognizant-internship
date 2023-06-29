using CRMS.Models;

namespace CRMS.Repository.Interface
{
    public interface ILoginRepository
    {
        Task<User> GetByEmailAsync(string email);
    }
}
