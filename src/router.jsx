import { BASE } from '../config';
import { Home } from './pages/Home';
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: BASE,
    element: <Home />,
  },
]);
