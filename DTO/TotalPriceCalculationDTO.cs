namespace CRMS.DTO
{
    public class TotalPriceCalculationDTO
    {
        public DateTime StartDate { get; set; }
        public DateTime ReturnDate { get; set; }

        public decimal PricePerDay { get; set; }
    }
}
