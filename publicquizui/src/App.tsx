import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardContent } from "./Components/Admin/Dashboard";
import { PersistGate } from "redux-persist/integration/react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Users from "./Components/Admin/Users";
import MainPage from "./Components/Admin/MainPage";
import Login from "./Components/Login/Login";
import { persistor, RootState } from "./app/store";
import { useSelector } from "react-redux";
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
  const isAuthenticated = useSelector(
    (state: RootState) => !!state.login.login.responseData
  );

  return (
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          {arrayOfApps.map((i: any, idx: any) => (
            <>
              <Route
                path={i.path}
                element={
                  <DashboardContent
                    arrayOfApps={arrayOfApps}
                    isAuthenticated={isAuthenticated}
                  >
                    {i.element}
                  </DashboardContent>
                }
                key={idx}
              />
            </>
          ))}
          <Route path="/" element={<Login />} />
        </Routes>
      </PersistGate>
    </BrowserRouter>
  );
}

export default App;
