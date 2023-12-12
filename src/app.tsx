import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./app/layout";

import MainLayout from "./app/(main)/layout";
import Main from "./app/(main)/page";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginLayout from "./app/login/layout";
import Staff from "./app/login/staff/page";
import Student from "./app/login/student/page";
import Login from "./app/login/page";
import { ReduxProvider } from "./GlobalRedux/ReduxProvider";
import { useEffect } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/login" element={<LoginLayout />}>
        <Route index element={<Login />}></Route>
        <Route path="staff" element={<Staff />}></Route>
        <Route path="student" element={<Student />}></Route>
      </Route>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Main />}></Route>
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
