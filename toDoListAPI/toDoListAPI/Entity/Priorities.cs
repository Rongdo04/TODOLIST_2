namespace toDoListAPI.Entity {
    public class Priorities {
        public int PrioritiesID { get; set; }
        public string PrioritiesName { get; set; }
        public IEnumerable<Tasks>? tasks { get; set; }
    }
}
