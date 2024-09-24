import "./App.css";
import Add from "./Components/Add";
import DispData from "./Components/DispData";
// import Display from './Components/Display'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Update from "./Components/Update";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",

      element: (
        <>
          {" "}
          <DispData />{" "}
        </>
      ),
    },
    {
      path: "/create",
      element: <Add />,
    },,
    {
      path: "/update/:id",
      element: <Update />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* <Display/> */}
    </>
  );
}

export default App;
