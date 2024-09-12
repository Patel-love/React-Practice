import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Team from "./Components/Team";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Error from "./Components/Error";
import Profilepage from "./Components/Profilepage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
          <Footer />
        </>
      ),
      errorElement: <Error />,
    },
    {
      path: "/about",
      element: (
        <>
          <Header />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/team",
      element: (
        <>
          <Header />
          <Team />
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Header />
          <Login />
          <Footer />
        </>
      ),
    },
    {
      path: "/profile",
      element: (  
        <>
          <Header />
          <Profile />
          <Footer />
        </>
      ),
      children: [
        {
          path: "/profile/:profileId",
          element: <Profilepage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
