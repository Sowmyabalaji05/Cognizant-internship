using AutoMapper;
using CRMS.DTO;
using CRMS.Models;

namespace CRMS.Infrastructure
{
    public class MappingConfig : Profile
    {
        public MappingConfig()
        {
            CreateMap<Car, CarDTO>().ReverseMap();
            CreateMap<Booking, BookingDTO>().ReverseMap();
            CreateMap<User, UserDTO>().ReverseMap();
            CreateMap<Role, RoleDTO>().ReverseMap();
            //CreateMap<AddUser, AddUserDTO>().ReverseMap();
            CreateMap<UpdateUserRequestDTO, User>().ReverseMap();
            CreateMap<AddUserRequestDTO, User>().ReverseMap();
            CreateMap<AddAuthUserLoginDTO, User>().ReverseMap();
            CreateMap<ForgotPasswordDTO, User>().ReverseMap();

        }
    }
}
