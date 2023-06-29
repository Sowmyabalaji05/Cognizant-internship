using CRMS.Context;
using CRMS.Models;
using CRMS.Repository.Interface;

namespace CRMS.Repository.Implementation
{
    public class CarRepository : Repository<Car>, ICarRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public CarRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }
    }
}
