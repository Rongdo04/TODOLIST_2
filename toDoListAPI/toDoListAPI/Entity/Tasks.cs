using System.ComponentModel.DataAnnotations;

namespace toDoListAPI.Entity {
    public class Tasks {
        public int TasksID { get; set; }
        [Required]
        public string TaskName { get; set; }
        public string? Description { get; set; }
        public string? DueDate { get; set; }
        public bool IsCompleted { get; set; }
        public User? user { get; set; }
        public int UserID { get; set; }
        public Priorities? priorities { get; set; }
        public int? PrioritiesID { get; set; }
    }
}
