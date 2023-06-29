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
    public class BookingController : ControllerBase
    {
        private readonly IBookingRepository _bookingRepository;
        private readonly IMapper _mapper;



        public BookingController(IBookingRepository bookingRepository, IMapper mapper)
        {
            _bookingRepository = bookingRepository;
            _mapper = mapper;
        }



        [HttpGet]
        //[Authorize(Roles = "Admin")]

        public async Task<IActionResult> GetAllBookings()
        {




            var bookings = await _bookingRepository.GetAllAsync();
            var bookingDTOs = _mapper.Map<IEnumerable<BookingDTO>>(bookings);
            return Ok(bookingDTOs);




        }
        [HttpGet("{id}")]

        public async Task<IActionResult> GetBooking(int id)
        {
            var bookings = await _bookingRepository.GetByIdAsync(id);
            if (bookings == null)
                return NotFound();
            var bookingDTOs = _mapper.Map<BookingDTO>(bookings);
            return Ok(bookingDTOs);
        }
        [HttpPost]
        //[Authorize(Roles = "Admin")]
        public async Task<IActionResult> CreateBooking(BookingDTO bookingDTO)
        {




            var bookings = _mapper.Map<Booking>(bookingDTO);



            await _bookingRepository.AddAsync(bookings);
            var createdOrderDto = _mapper.Map<BookingDTO>(bookings);
            return Ok(createdOrderDto);
        }
        [HttpPost("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateBooking(int id, BookingDTO bookingDTO)
        {



            var existingBooking = await _bookingRepository.GetByIdAsync(id);
            if (existingBooking == null)
                return NotFound();



            _mapper.Map(bookingDTO, existingBooking);



            await _bookingRepository.UpdateAsync(existingBooking);
            return NoContent();
        }
        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteBooking(int id)
        {
            var existingBooking = await _bookingRepository.GetByIdAsync(id);
            if (existingBooking == null)
                return NotFound();



            await _bookingRepository.DeleteAsync(existingBooking);
            return Ok("Booking deleted sauccessfully");
        }

        [HttpGet("user/{userId}")]

        public async Task<IActionResult> GetBookingByUserId(int userId)
        {
            var bookings = await _bookingRepository.GetBookingByUserId(userId);
            if (bookings == null)
                return NotFound();
            var bookingDTOs = _mapper.Map<IEnumerable<BookingDTO>>(bookings);
            return Ok(bookingDTOs);
        }
    }
}
