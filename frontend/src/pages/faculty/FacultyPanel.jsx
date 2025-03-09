import Dashboard from "../../Dashboard/Dashboard";

const facultyOptions = [
  { path: "/faculty/create-quiz", label: "Create Quiz" },
  { path: "/faculty/delete-quiz", label: "Delete Quiz" },
  { path: "/faculty/delete-quiz", label: "View Quizes" },
];

const FacultyPanel = () => {
  return <Dashboard role="Faculty" options={facultyOptions} />;
};

export default FacultyPanel;
