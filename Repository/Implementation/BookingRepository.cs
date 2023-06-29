using CRMS.Context;
using CRMS.DTO;
using CRMS.Models;
using CRMS.Repository.Interface;
using Microsoft.EntityFrameworkCore;

namespace CRMS.Repository.Implementation
{
    public class BookingRepository : Repository<Booking>, IBookingRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public BookingRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

       public async Task<IEnumerable<Booking>> GetAllBookings()
        {
            return await _dbContext.Set<Booking>().Include(x => x.Car).Include(x => x.User).ThenInclude(x => x.Roles).ToListAsync();
        }
        public async Task<IEnumerable<Booking>> GetBookingByUserId(int userId)
        {
            return await _dbContext.Set<Booking>().Where(b =>b.UserId == userId).Include(x => x.Car).Include(x => x.User).ThenInclude(x => x.Roles).ToListAsync();
        }




    }
}
