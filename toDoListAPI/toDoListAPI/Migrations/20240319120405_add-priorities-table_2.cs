using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace toDoListAPI.Migrations
{
    /// <inheritdoc />
    public partial class addprioritiestable_2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tasks_Priorities_PrioritiesID",
                table: "Tasks");

            migrationBuilder.AlterColumn<int>(
                name: "PrioritiesID",
                table: "Tasks",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Tasks_Priorities_PrioritiesID",
                table: "Tasks",
                column: "PrioritiesID",
                principalTable: "Priorities",
                principalColumn: "PrioritiesID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tasks_Priorities_PrioritiesID",
                table: "Tasks");

            migrationBuilder.AlterColumn<int>(
                name: "PrioritiesID",
                table: "Tasks",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Tasks_Priorities_PrioritiesID",
                table: "Tasks",
                column: "PrioritiesID",
                principalTable: "Priorities",
                principalColumn: "PrioritiesID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
