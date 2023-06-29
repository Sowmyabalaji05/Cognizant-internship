using AutoMapper;
using CRMS.Context;
using CRMS.DTO;
using CRMS.Infrastructure;
using CRMS.Models;
using CRMS.Repository.Implementation;
using CRMS.Repository.Interface;
//using CRMS.Services.Interface;
using IdentityModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;

namespace CRMS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthsController : ControllerBase
    {
        private ApplicationDbContext context;
        private readonly IConfiguration configuration;
        private readonly IMapper mapper;
        private readonly IUserRepository userRepository;
        private readonly ILoginRepository _loginRepository;
       





        public AuthsController(ApplicationDbContext context, IConfiguration configuration, IMapper mapper,
        IUserRepository userRepository, ILoginRepository loginRepository1)
        {
            this.context = context;
            this.configuration = configuration;
            this.mapper = mapper;
            this.userRepository = userRepository;
            this._loginRepository = loginRepository1;
           




        }
        [Route("login")]
        [HttpPost]
        public IActionResult Login(AddAuthUserLoginDTO loginModel)
        {



            var user = context.Users.Include(x => x.Roles).SingleOrDefault(x => x.Email == loginModel.Email);



            if (user is null)
                return Unauthorized("Invalid Email or Password!");



            string hashedPassword = HashPassword(loginModel.Password);
            if (BCrypt.Net.BCrypt.Verify(loginModel.Password, user.Password))
            {

                var token = JWT.GenerateToken(new Dictionary<string, string> {
                { ClaimTypes.Role, user.Roles.RoleName },
                { "RoleId", user.Roles.RoleId.ToString() },
                {JwtClaimTypes.PreferredUserName, user.UserName },
                { JwtClaimTypes.Id, user.UserId.ToString() },
                { JwtClaimTypes.Email, user.Email}
             }, configuration["JWT:Key"]);

                return Ok(new AddAuthResponseDTO { token = token, UserName = user.UserName, RoleId =user.RoleId,Email=user.Email, UserId=user.UserId });
            }
            else
            {
                return Unauthorized("Invalid Email or Password");
            }
        }
       
        [Route("Registration")]
        [HttpPost]



        public async Task<IActionResult> Create([FromBody] AddUserRequestDTO addUserRequestDTO)
        {

         
                // Check if a user with the same email already exists
                var existingUser = await _loginRepository.GetByEmailAsync(addUserRequestDTO.Email);
                if (existingUser != null)
                {
                    // Return an error response indicating that the email is already registered
                    return BadRequest("Email is already registered.");
                }


            //Map DTO to Domain Model           
            var userEntity = mapper.Map<User>(addUserRequestDTO);
            userEntity.Password = HashPassword(addUserRequestDTO.Password);
             await userRepository.AddAsync(userEntity);
                // var users = mapper.Map<UserDTO>(userEntity);
             return Ok("Registration Successful");
            }
           


        private string HashPassword(string password)
        {
            string hashedPassword = BCrypt.Net.BCrypt.HashPassword(password);
            return hashedPassword;
        }

       
    }
}
