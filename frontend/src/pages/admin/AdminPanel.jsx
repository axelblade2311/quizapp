import Dashboard from "../../Dashboard/Dashboard";

const adminOptions = [
  { path: "/admin/create-user", label: "Create User" },
  { path: "/admin/delete-users", label: "Delete Users" },
  { path: "/admin/view-users", label: "View Users" },
  { path: "/admin/view-quizes", label: "View Quizes" },
  { path: "/admin/start-quiz", label: "Start Quiz" },
  { path: "/admin/stop-quiz", label: "Stop Quiz" },
];

const AdminPanel = () => {
  return <Dashboard role="Admin" options={adminOptions} />;
};

export default AdminPanel;
