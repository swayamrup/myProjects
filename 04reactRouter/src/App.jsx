import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import About from "./components/About/About";

import Contact from "./components/Contact";
import Github, { DataLoader } from "./components/Github";


function App() {
  //creating routes method 1(complicate)
  // const router=createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<Layout/>,
  //     children:[
  //       {
  //         path:"",
  //         element:<Home/>
  //       },
  //       {
  //         path:"About",
  //         element:<About/>
  //       },
  //       {
  //         path:"contact",
  //         element:<Contact/>
  //       },
  //       {
  //         path:"github",
  //         element:<Github/>
  //       }
  //     ]
  //   }
  // ])

  //creating routes method 2(easy)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="contact" element={<Contact />}/>
        <Route path="github" loader={DataLoader} element={<Github />} />
        {/* fetching parameters from url. u will directely get access to rendering element name "user"*/}
        <Route path="about/:user" element={<About />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
