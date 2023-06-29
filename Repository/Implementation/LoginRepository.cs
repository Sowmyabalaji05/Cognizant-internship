using CRMS.Context;
using CRMS.Models;
using CRMS.Repository.Interface;
using Microsoft.EntityFrameworkCore;

namespace CRMS.Repository.Implementation
{
    public class LoginRepository : ILoginRepository
    {
        private readonly ApplicationDbContext _context;
        public LoginRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<User> GetByEmailAsync(string email)
        {
            return await _context.Users.Include("Roles").FirstOrDefaultAsync(x => x.Email == email);
        }
    }
}
