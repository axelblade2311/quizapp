import Dashboard from "../../Dashboard/Dashboard";

const studentOptions = [
  { path: "/student/view-quizes", label: "View Quizes" },
  { path: "/student/view-result", label: "My Results" },
];

const StudentPanel = () => {
  return <Dashboard role="Student" options={studentOptions} />;
};

export default StudentPanel;
