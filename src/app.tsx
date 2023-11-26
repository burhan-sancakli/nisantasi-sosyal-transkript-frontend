import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./app/layout";
import Home from "./app/(home)/page";
import AkademisyenGiris from "./app/akademisyen/giris/page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="akademisyen/giris" element={<AkademisyenGiris />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
