using CRMS.Models;
using Microsoft.EntityFrameworkCore;

namespace CRMS.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options) { }
        public DbSet<Role> Roles { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Car> Cars { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        //public DbSet<BookingDetail> BookingDetails { get; set; }

        public string RoleName { get; private set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure relationships
            

            modelBuilder.Entity<Role>().HasData(
                 new Role
                 {
                     RoleId = 1,
                     RoleName = "Admin"
                 },

                 new Role
                 {
                     RoleId = 2,
                     RoleName = "User"
                 });
            modelBuilder.Entity<Car>().HasData(

                new Car
                {
                    CarId = 1,
                    Brand="Tesla",
                    Rating=112,
                    CarName = "Tesla Malibu",
                    ImgUrl= "https://i.pinimg.com/originals/de/a7/88/dea7880f7dd2140295584422cc857dea.jpg",
                    Model="Model 3",
                    PricePerDay= 2000,
                    Speed= "20kmpl",
                    Gps= "GPS Navigation",
                    SeatType= "Heated seats",
                    Automatic= "Automatic",
                    Description="The Tesla Model 3 is an electric car produced by American automaker Tesla. " +
                    "It is a battery-powered four-door sedan that is marketed in the compact-executive segment.",
                 

                },

                new Car
                {
                    CarId = 2,
                    Brand = "Toyota",
                    Rating = 102,
                    CarName = "Toyota Urban Cruiser Hyryder",
                    ImgUrl = "https://tse2.mm.bing.net/th/id/OIP._TjxvsWVUbHHwXdBNbBv2gAAAA?pid=ImgDet&rs=1",
                    Model = "Model-2022",
                    PricePerDay = 2000,
                    Speed = "20kmpl",
                    Gps = "GPS Navigation",
                    SeatType = "Heated seats",
                    Automatic = "Automatic",
                    Description = "The Toyota Urban Cruiser is an automobile nameplate used by the Japanese automobile manufacturer Toyota since 2008 for several" +
                    " subcompact crossover SUV models: Toyota Urban Cruiser Concept, a concept car showcased in 2006"
              

                },

                new Car
                {
                    CarId = 3,
                    Brand = "BMW",
                    Rating = 132,
                    CarName = "BMW X3",
                    ImgUrl = "https://media.autoexpress.co.uk/image/private/s--sOxiKAFg--/v1562244603/autoexpress/2017/06/_dsc6820.jpg",
                    Model = "Model-2022",
                    PricePerDay = 7000,
                    Speed = "20kmpl",
                    Gps = "GPS Navigation",
                    SeatType = "Heated seats",
                    Automatic = "Automatic",
                    Description = "The BMW X3 is a compact luxury crossover SUV manufactured by BMW since 2003, based on the BMW 5 Series platform. " +
                    "Now in its third generation, BMW markets the car as a Sports Activity Vehicle, the company's proprietary descriptor for its X-line luxury vehicles."
                 
                },
                 new Car
                 {
                     CarId = 4,
                     Brand = "Nissan",
                     Rating = 102,
                     CarName = "Nissan Mercielago",
                     ImgUrl = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pannucarrental.com%2Ffleets%2Fnissan-magnite&psig=AOvVaw061xA6lo2X3qfb0g5vsC_6&ust=1686900860001000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLiUjtXhxP8CFQAAAAAdAAAAABAD",
                     Model = "Model-2022",
                     PricePerDay = 2000,
                     Speed = "20kmpl",
                     Gps = "GPS Navigation",
                     SeatType = "Heated seats",
                     Automatic = "Automatic",
                     Description = "The Nissan Magnite is a subcompact crossover SUV manufactured and marketed by Nissan. Unveiled in October 2020, " +
                     "the Magnite is placed below the Kicks in Nissan's global SUV lineup, making it the smallest Nissan crossover SUV worldwide",


                 },
                  new Car
                  {
                      CarId = 5,
                      Brand = "Toyota",
                      Rating = 94,
                      CarName = "Toyota Camry",
                      ImgUrl = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-svfxa&psig=AOvVaw2DpbXz0HXcoACj7-Rwo1Et&ust=1686901299868000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCJi2iK7jxP8CFQAAAAAdAAAAABAD",
                      Model = "Model-2022",
                      PricePerDay = 2000,
                      Speed = "20kmpl",
                      Gps = "GPS Navigation",
                      SeatType = "Heated seats",
                      Automatic = "Automatic",
                      Description = "The Toyota Camry (XV30) is a mid-size car produced by Toyota from June 2001 to January 2006. " +
                      "The XV30 series represented the fifth generation of the Toyota Camry in all markets outside Japan, which followed a different generational lineage. " +
                      "The XV30 range is split into different model codes indicative of the engine.",
                     

                  },
                   new Car
                   {
                       CarId = 6,
                       Brand = "Volvo",
                       Rating = 119,
                       CarName = "Volvo XC90",
                       ImgUrl = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-tyrpr&psig=AOvVaw3Ye1sywGAcEzgrk8-nLtAu&ust=1686901524554000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCKDJuY_kxP8CFQAAAAAdAAAAABAE",
                       Model = "Model-2022",
                       PricePerDay = 2000,
                       Speed = "20kmpl",
                       Gps = "GPS Navigation",
                       SeatType = "Heated seats",
                       Automatic = "Automatic",
                       Description = "The Volvo XC90 is a mid-size luxury SUV manufactured and marketed by Volvo Cars since 2002 and " +
                       "now in its second generation.The first generation was introduced at the 2002 North American International " +
                       "Auto Show and used the Volvo P2 platform shared with the first generation Volvo S80 and other large Volvo cars.",
                      

                   },
                    new Car
                    {
                        CarId = 7,
                        Brand = "Ford",
                        Rating = 82,
                        CarName = "Ford Fiesta",
                        ImgUrl = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-peluz&psig=AOvVaw04SBRDcFJkNYF5mF8cQpnw&ust=1686901642104000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCNCN8MfkxP8CFQAAAAAdAAAAABAE",
                        Model = "Model 3",
                        PricePerDay = 2000,
                        Speed = "20kmpl",
                        Gps = "GPS Navigation",
                        SeatType = "Heated seats",
                        Automatic = "Automatic",
                        Description = "The Ford Fiesta is a supermini car marketed by Ford since 1976 over seven generations." +
                        " Over the years, the Fiesta has mainly been developed and manufactured by Ford's European operations," +
                        " and has been positioned below the Escort",
                      

                    },
                     new Car
                     {
                         CarId = 8,
                         Brand = "Colorado",
                         Rating = 52,
                         CarName = "Rolls Royce Colorado",
                         ImgUrl = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Drolls%2Broyce&psig=AOvVaw3NsLqkaVxNleCNWqhCRb2N&ust=1686901874745000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLCgsLjlxP8CFQAAAAAdAAAAABAD",
                         Model = "Model 3",
                         PricePerDay = 2000,
                         Speed = "20kmpl",
                         Gps = "GPS Navigation",
                         SeatType = "Heated seats",
                         Automatic = "Automatic",
                         Description = "Rolls-Royce is the world's leading supplier of marine propulsion equipment. " +
                         "Its products and services range from complete ship design to integrated propulsion, maneuvering, " +
                         "and positioning systems and deck machinery.",
                       

                     }
                );

            modelBuilder.Entity<User>().HasData(

                new User
                {
                    UserId = 13,
                    UserName = "MeenaPriya",

                    Email = "mennaPriya@gmail.com",
                    Password = "asfsdgv",
                    ConfirmPassword = "asfsdgv",
                    Gender = "Female",
                    PhoneNumber = "789542589",
                    Address = "87A south part New Delhi",
                    RoleId = 2,
                },
                new User
                {
                    UserId = 12,
                    UserName = "Manju Ram",

                    Email = "manjuRam@gmail.com",
                    Password = "xbdfbxfhbx",
                    ConfirmPassword = "xbdfbxfhbx",
                    Gender = "male",
                    PhoneNumber = "789542589",
                    Address = "56B Faossil nagar,chennai",
                    RoleId = 2,
                },

                new User
                {
                    UserId = 10,
                    UserName = "Hema Prasad",

                    Email = "HemaPrasad.com",
                    Password = "090kjg56",
                    ConfirmPassword = "090kjg56",
                    Gender = "Female",
                    PhoneNumber = "789542589",
                    Address = "955C Thanikachalam nagar, Bangalore",
                    RoleId = 2,
                }
                );
            

        }
    }
}
