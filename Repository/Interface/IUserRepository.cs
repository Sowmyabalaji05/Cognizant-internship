using CRMS.Models;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace CRMS.Repository.Interface
{
    public interface IUserRepository : IRepository<User>
    {
       //Task<User> GetUserByUserNameAsync(string UserName);
        //Task<User> GetUserByEmailAsync(string Email);

    }
}