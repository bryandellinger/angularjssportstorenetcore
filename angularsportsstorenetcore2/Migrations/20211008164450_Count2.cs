using Microsoft.EntityFrameworkCore.Migrations;

namespace angularsportsstorenetcore2.Migrations
{
    public partial class Count2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Count",
                table: "Products");

            migrationBuilder.AddColumn<int>(
                name: "Count",
                table: "OrderProductJunctions",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Count",
                table: "OrderProductJunctions");

            migrationBuilder.AddColumn<int>(
                name: "Count",
                table: "Products",
                nullable: false,
                defaultValue: 0);
        }
    }
}
