using CRMS.Models;

namespace CRMS.Repository.Interface
{
    public interface IBookingRepository : IRepository<Booking>
    {
        Task<IEnumerable<Booking>> GetAllBookings();
        Task<IEnumerable<Booking>> GetBookingByUserId(int userId);



    }
}
