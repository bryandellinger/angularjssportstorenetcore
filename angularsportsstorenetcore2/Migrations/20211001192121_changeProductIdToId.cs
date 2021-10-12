using Microsoft.EntityFrameworkCore.Migrations;

namespace angularsportsstorenetcore2.Migrations
{
    public partial class changeProductIdToId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ProductID",
                table: "Products",
                newName: "ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Products",
                newName: "ProductID");
        }
    }
}
