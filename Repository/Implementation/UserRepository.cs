using CRMS.Context;
using CRMS.Models;
using CRMS.Repository.Interface;
using Microsoft.EntityFrameworkCore;
using Swashbuckle.AspNetCore.Filters;
using System.Linq.Expressions;

namespace CRMS.Repository.Implementation
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public UserRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }



       /* public async Task<User> GetUserByUserNameAsync(string UserName)
        {
            return await _dbContext.Users.SingleOrDefaultAsync(x => x.UserName == UserName);
        }
        public async Task<User> GetUserByEmailAsync(string Email)
        {
            return await _dbContext.Users.SingleOrDefaultAsync(x => x.Email == Email);
        }

        public async Task UpdateUserAsync(User user)
        {
            _dbContext.Users.Update(user);
            await _dbContext.SaveChangesAsync();
        }*/
    }
}
