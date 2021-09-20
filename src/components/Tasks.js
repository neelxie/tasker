let tasks = [
  {
    id: 1,
    text: "Doctors appointment",
    day: "Feb 5th at 2:30pm",
    reminder: true,
  },
  {
    id: 2,
    text: "School meeting",
    day: "Feb 6th at 1:30pm",
    reminder: true,
  },
  {
    id: 3,
    text: "Code writing",
    day: "Feb 5th at 2:30pm",
    reminder: false,
  },
];
const Tasks = () => {
  return <>{tasks.map((task) =>(<h3 key={task.id}>{task.head}</h3>))}</>;
};

export default Tasks;
