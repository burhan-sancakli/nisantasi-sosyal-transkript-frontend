import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import RootLayout from "./app/layout";

import LoginLayout from "./app/login/layout";
import Staff from "./app/login/staff/page";
import Student from "./app/login/student/page";
import Login from "./app/login/page";
import { ReduxProvider } from "./GlobalRedux/ReduxProvider";
import { useEffect } from "react";
import StudentLayout from "./app/student/layout";
import StudentPage from "./app/student/page";
import StudentRoute from "./components/StudentRoute";
import StaffRoute from "./components/StaffRoute";
import StaffPage from "./app/staff/page";
import StaffLayout from "./app/staff/layout";
import StudentNewPage from "./app/student/new/page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Navigate to={"/login"} replace />} />
      <Route path="/login" element={<LoginLayout />}>
        <Route index element={<Login />}></Route>
        <Route path="staff" element={<Staff />}></Route>
        <Route path="student" element={<Student />}></Route>
      </Route>
      <Route
        path="/student"
        element={
          <StudentRoute>
            <StudentLayout />
          </StudentRoute>
        }
      >
        <Route index element={<StudentPage />}></Route>
        <Route path="/student/new" element={<StudentNewPage />} />
      </Route>
      <Route
        path="/staff"
        element={
          <StaffRoute>
            <StaffLayout />
          </StaffRoute>
        }
      >
        <Route index element={<StaffPage />}></Route>
      </Route>
    </Route>
  )
);

function App() {
  useEffect(() => {
    document.title = "Nişantaşı Sosyal Transkript Sistemi";
  }, []);
  return (
    <ReduxProvider>
      <RouterProvider router={router} />
    </ReduxProvider>
  );
}

export default App;
