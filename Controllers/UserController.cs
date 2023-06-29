using AutoMapper;
using CRMS.DTO;
using CRMS.Models;
using CRMS.Repository.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace CRMS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IUserRepository _userRepository;



        public UserController(IUserRepository userRepository, IMapper mapper)
        {



            _mapper = mapper;
            _userRepository = userRepository;
        }
        [HttpGet]
        [Authorize(Roles = "Admin")]

        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _userRepository.GetAllAsync();
            var userDtos = _mapper.Map<IEnumerable<UserDTO>>(users);
            return Ok(userDtos);
        }
        [HttpGet("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _userRepository.GetByIdAsync(id);
            if (user == null)
                return NotFound();
            var userDto = _mapper.Map<UserDTO>(user);
            return Ok(userDto);
        }
        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> CreateUser(UserDTO userDTO)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var user = _mapper.Map<User>(userDTO);



            await _userRepository.AddAsync(user);
            var createdUserDto = _mapper.Map<UserDTO>(user);
            return Ok(createdUserDto);
        }
        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateUser(int id, UserDTO userDTO)
        {



            var existingUser = await _userRepository.GetByIdAsync(id);
            if (existingUser == null)
                return NotFound();



            _mapper.Map(userDTO, existingUser);



            await _userRepository.UpdateAsync(existingUser);
            return NoContent();
        }
        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]

        public async Task<IActionResult> DeleteUser(int id)
        {
            var existingUser = await _userRepository.GetByIdAsync(id);
            if (existingUser == null)
                return NotFound();



            await _userRepository.DeleteAsync(existingUser);
            return Ok("User deleted successfully");
        }


    }
}
