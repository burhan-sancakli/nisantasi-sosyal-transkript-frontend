import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./app/layout";
import Login from "./app/(login)/page";
import AkademisyenGiris from "./app/(login)/akademisyen/giris/page";
import LoginLayout from "./app/(login)/layout";
import OgrenciGiris from "./app/(login)/ogrenci/giris/page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<LoginLayout />}>
        <Route index element={<Login />}></Route>
        <Route path="akademisyen/giris" element={<AkademisyenGiris />}></Route>
        <Route path="ogrenci/giris" element={<OgrenciGiris />}></Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
