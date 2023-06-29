using AutoMapper;
using CRMS.DTO;
using CRMS.Models;
using CRMS.Repository.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CRMS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly ICarRepository _carRepository;
        private readonly IMapper _mapper;



        public CarController(ICarRepository carRepository, IMapper mapper)
        {



            _mapper = mapper;
            _carRepository = carRepository;
        }



        [HttpGet("cars")]
        public async Task<IActionResult> GetAllCar()
        {
            var cars = await _carRepository.GetAllAsync();
            var carDTOs = _mapper.Map<IEnumerable<CarDTO>>(cars);
            return Ok(carDTOs);
        }
        [HttpGet("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetCar([FromRoute] int id)
        {
            var cars = await _carRepository.GetByIdAsync(id);
            if (cars == null)
                return NotFound();
            var carDTOs = _mapper.Map<CarDTO>(cars);
            return Ok(carDTOs);
        }
        [HttpPost]
        [Authorize(Roles = "Admin")]



        public async Task<IActionResult> Car(CarDTO carDTO)
        {




            var cars = _mapper.Map<Car>(carDTO);



            await _carRepository.AddAsync(cars);
            var createdcarsDto = _mapper.Map<CarDTO>(cars);
            return Ok(createdcarsDto);
        }
        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateCar(int id, CarDTO carDTO)
        {



            var existingCar = await _carRepository.GetByIdAsync(id);
            if (existingCar == null)
                return NotFound();



            _mapper.Map(carDTO, existingCar);



            await _carRepository.UpdateAsync(existingCar);
            return Ok("Sucessfully Edited!!!!");
        }
        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteCar(int id)
        {
            var existingCar = await _carRepository.GetByIdAsync(id);
            if (existingCar == null)
                return NotFound();



            await _carRepository.DeleteAsync(existingCar);
            return Ok("cars deleted successfully");
        }
    }
}
