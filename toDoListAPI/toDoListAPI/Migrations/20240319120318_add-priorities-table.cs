using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace toDoListAPI.Migrations
{
    /// <inheritdoc />
    public partial class addprioritiestable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PrioritiesID",
                table: "Tasks",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Priorities",
                columns: table => new
                {
                    PrioritiesID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PrioritiesName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Priorities", x => x.PrioritiesID);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tasks_PrioritiesID",
                table: "Tasks",
                column: "PrioritiesID");

            migrationBuilder.AddForeignKey(
                name: "FK_Tasks_Priorities_PrioritiesID",
                table: "Tasks",
                column: "PrioritiesID",
                principalTable: "Priorities",
                principalColumn: "PrioritiesID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tasks_Priorities_PrioritiesID",
                table: "Tasks");

            migrationBuilder.DropTable(
                name: "Priorities");

            migrationBuilder.DropIndex(
                name: "IX_Tasks_PrioritiesID",
                table: "Tasks");

            migrationBuilder.DropColumn(
                name: "PrioritiesID",
                table: "Tasks");
        }
    }
}
