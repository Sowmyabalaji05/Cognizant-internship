using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace CRMS.Migrations
{
    /// <inheritdoc />
    public partial class CreateApp : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Bookings",
                keyColumn: "BookingId",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Bookings",
                keyColumn: "BookingId",
                keyValue: 56);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Bookings",
                columns: new[] { "BookingId", "CarId", "IsReturned", "ReturnDate", "StartDate", "TotalPrice", "UserId" },
                values: new object[,]
                {
                    { 18, 3, false, new DateTime(2016, 2, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2016, 2, 8, 0, 0, 0, 0, DateTimeKind.Unspecified), 8000.0, 10 },
                    { 56, 1, false, new DateTime(2017, 5, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2017, 5, 9, 0, 0, 0, 0, DateTimeKind.Unspecified), 7000.0, 13 }
                });
        }
    }
}
