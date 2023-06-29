using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace CRMS.Migrations
{
    /// <inheritdoc />
    public partial class backend : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Year",
                table: "Cars",
                newName: "Rating");

            migrationBuilder.RenameColumn(
                name: "CarType",
                table: "Cars",
                newName: "Speed");

            migrationBuilder.AddColumn<string>(
                name: "ConfirmPassword",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Automatic",
                table: "Cars",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Brand",
                table: "Cars",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Cars",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Gps",
                table: "Cars",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImgUrl",
                table: "Cars",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Model",
                table: "Cars",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SeatType",
                table: "Cars",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Cars",
                keyColumn: "CarId",
                keyValue: 1,
                columns: new[] { "Automatic", "Brand", "CarName", "Description", "Gps", "ImgUrl", "Model", "Rating", "SeatType", "Speed" },
                values: new object[] { "Automatic", "Tesla", "Tesla Malibu", "The Tesla Model 3 is an electric car produced by American automaker Tesla. It is a battery-powered four-door sedan that is marketed in the compact-executive segment.", "GPS Navigation", "https://i.pinimg.com/originals/de/a7/88/dea7880f7dd2140295584422cc857dea.jpg", "Model 3", 112, "Heated seats", "20kmpl" });

            migrationBuilder.UpdateData(
                table: "Cars",
                keyColumn: "CarId",
                keyValue: 2,
                columns: new[] { "Automatic", "Brand", "CarName", "Description", "Gps", "ImgUrl", "Model", "PricePerDay", "Rating", "SeatType", "Speed" },
                values: new object[] { "Automatic", "Toyota", "Toyota Urban Cruiser Hyryder", "The Toyota Urban Cruiser is an automobile nameplate used by the Japanese automobile manufacturer Toyota since 2008 for several subcompact crossover SUV models: Toyota Urban Cruiser Concept, a concept car showcased in 2006", "GPS Navigation", "https://tse2.mm.bing.net/th/id/OIP._TjxvsWVUbHHwXdBNbBv2gAAAA?pid=ImgDet&rs=1", "Model-2022", 2000.0, 102, "Heated seats", "20kmpl" });

            migrationBuilder.UpdateData(
                table: "Cars",
                keyColumn: "CarId",
                keyValue: 3,
                columns: new[] { "Automatic", "Brand", "CarName", "Description", "Gps", "ImgUrl", "Model", "PricePerDay", "Rating", "SeatType", "Speed" },
                values: new object[] { "Automatic", "BMW", "BMW X3", "The BMW X3 is a compact luxury crossover SUV manufactured by BMW since 2003, based on the BMW 5 Series platform. Now in its third generation, BMW markets the car as a Sports Activity Vehicle, the company's proprietary descriptor for its X-line luxury vehicles.", "GPS Navigation", "https://media.autoexpress.co.uk/image/private/s--sOxiKAFg--/v1562244603/autoexpress/2017/06/_dsc6820.jpg", "Model-2022", 7000.0, 132, "Heated seats", "20kmpl" });

            migrationBuilder.InsertData(
                table: "Cars",
                columns: new[] { "CarId", "Automatic", "Brand", "CarName", "Description", "Gps", "ImgUrl", "Model", "PricePerDay", "Rating", "SeatType", "Speed" },
                values: new object[,]
                {
                    { 4, "Automatic", "Nissan", "Nissan Mercielago", "The Nissan Magnite is a subcompact crossover SUV manufactured and marketed by Nissan. Unveiled in October 2020, the Magnite is placed below the Kicks in Nissan's global SUV lineup, making it the smallest Nissan crossover SUV worldwide", "GPS Navigation", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pannucarrental.com%2Ffleets%2Fnissan-magnite&psig=AOvVaw061xA6lo2X3qfb0g5vsC_6&ust=1686900860001000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLiUjtXhxP8CFQAAAAAdAAAAABAD", "Model-2022", 2000.0, 102, "Heated seats", "20kmpl" },
                    { 5, "Automatic", "Toyota", "Toyota Camry", "The Toyota Camry (XV30) is a mid-size car produced by Toyota from June 2001 to January 2006. The XV30 series represented the fifth generation of the Toyota Camry in all markets outside Japan, which followed a different generational lineage. The XV30 range is split into different model codes indicative of the engine.", "GPS Navigation", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-svfxa&psig=AOvVaw2DpbXz0HXcoACj7-Rwo1Et&ust=1686901299868000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCJi2iK7jxP8CFQAAAAAdAAAAABAD", "Model-2022", 2000.0, 94, "Heated seats", "20kmpl" },
                    { 6, "Automatic", "Volvo", "Volvo XC90", "The Volvo XC90 is a mid-size luxury SUV manufactured and marketed by Volvo Cars since 2002 and now in its second generation.\r\n\r\nThe first generation was introduced at the 2002 North American International Auto Show and used the Volvo P2 platform shared with the first generation Volvo S80 and other large Volvo cars.", "GPS Navigation", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-tyrpr&psig=AOvVaw3Ye1sywGAcEzgrk8-nLtAu&ust=1686901524554000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCKDJuY_kxP8CFQAAAAAdAAAAABAE", "Model-2022", 2000.0, 119, "Heated seats", "20kmpl" },
                    { 7, "Automatic", "Ford", "Ford Fiesta", "The Ford Fiesta is a supermini car marketed by Ford since 1976 over seven generations. Over the years, the Fiesta has mainly been developed and manufactured by Ford's European operations, and has been positioned below the Escort", "GPS Navigation", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-peluz&psig=AOvVaw04SBRDcFJkNYF5mF8cQpnw&ust=1686901642104000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCNCN8MfkxP8CFQAAAAAdAAAAABAE", "Model 3", 2000.0, 82, "Heated seats", "20kmpl" },
                    { 8, "Automatic", "Colorado", "Rolls Royce Colorado", "Rolls-Royce is the world's leading supplier of marine propulsion equipment. Its products and services range from complete ship design to integrated propulsion, maneuvering, and positioning systems and deck machinery.", "GPS Navigation", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Drolls%2Broyce&psig=AOvVaw3NsLqkaVxNleCNWqhCRb2N&ust=1686901874745000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLCgsLjlxP8CFQAAAAAdAAAAABAD", "Model 3", 2000.0, 52, "Heated seats", "20kmpl" }
                });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 10,
                columns: new[] { "ConfirmPassword", "Password" },
                values: new object[] { "090kjg56", "090kjg56" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 12,
                column: "ConfirmPassword",
                value: "xbdfbxfhbx");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 13,
                column: "ConfirmPassword",
                value: "asfsdgv");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "CarId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "CarId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "CarId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "CarId",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "CarId",
                keyValue: 8);

            migrationBuilder.DropColumn(
                name: "ConfirmPassword",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Automatic",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "Brand",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "Gps",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "ImgUrl",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "Model",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "SeatType",
                table: "Cars");

            migrationBuilder.RenameColumn(
                name: "Speed",
                table: "Cars",
                newName: "CarType");

            migrationBuilder.RenameColumn(
                name: "Rating",
                table: "Cars",
                newName: "Year");

            migrationBuilder.UpdateData(
                table: "Cars",
                keyColumn: "CarId",
                keyValue: 1,
                columns: new[] { "CarName", "CarType", "Year" },
                values: new object[] { "Huyndai", "sedan", 2017 });

            migrationBuilder.UpdateData(
                table: "Cars",
                keyColumn: "CarId",
                keyValue: 2,
                columns: new[] { "CarName", "CarType", "PricePerDay", "Year" },
                values: new object[] { "Ford", "sedan", 3000.0, 2015 });

            migrationBuilder.UpdateData(
                table: "Cars",
                keyColumn: "CarId",
                keyValue: 3,
                columns: new[] { "CarName", "CarType", "PricePerDay", "Year" },
                values: new object[] { "Renault", "micro", 1500.0, 2018 });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 10,
                column: "Password",
                value: "090kjg");
        }
    }
}
