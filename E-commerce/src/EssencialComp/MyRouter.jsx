import {
    Home,
    Layout,
    ProductListCard,
    ProductDetails,
    Cart,
    Error,
    Demo,
    Login,
    Register,
  } from "../index";
import {  RouterProvider,createBrowserRouter, useParams } from "react-router-dom";
import Products from "../assets/productsData";
function MyRouter({children}) {

    const discount = 10;
  
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout />,
          errorElement: <Error />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: ":Categoty",
              element: (
                <ProductListCard Products={Products} discount={discount} />
              ),
            },
            {
              path: ":Category/:productId",
              element: (
                <ProductDetails discount={discount} Products={Products} />
              ),
            },
            {
              path: "cart",
              element: <Cart />,
            },
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register/>,
            },
          ],
          
        },
    
      ]);

      

  return (
    <RouterProvider router={router}>
{children}
    </RouterProvider>
  )
}

export default MyRouter