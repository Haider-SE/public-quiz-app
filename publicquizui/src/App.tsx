import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardContent } from "./Components/Admin/Dashboard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Users from "./Components/Admin/Users";
import MainPage from "./Components/Admin/MainPage";
import LogoutIcon from "@mui/icons-material/Logout";
import Login from "./Components/Login/Login";
const arrayOfApps = [
  {
    path: "/home",
    element: <MainPage />,
    icon: <DashboardIcon />,
    primary: "Dashboard",
  },
  {
    path: "/users",
    element: <Users />,
    icon: <AssignmentIcon />,
    primary: "Users",
  },
];
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {arrayOfApps.map((i: any, idx: any) => (
          <>
            <Route
              path={i.path}
              element={
                <DashboardContent arrayOfApps={arrayOfApps}>
                  {i.element}
                </DashboardContent>
              }
              key={idx}
            />
          </>
        ))}
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
