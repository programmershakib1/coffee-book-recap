import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Coffees from "../Pages/Coffees/Coffees";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CoffeeCards from "../CoffeeCards/CoffeeCards";
import CoffeeDetails from "../Pages/CoffeeDetails/CoffeeDetails";

const routes = createBrowserRouter ([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('../categories.json'),
            children: [
                {
                    path: '/',
                    element: <CoffeeCards></CoffeeCards>,
                    loader: () => fetch('../coffees.json'),
                },
                {
                    path: '/category/:category',
                    element: <CoffeeCards></CoffeeCards>,
                    loader: () => fetch('../coffees.json'),
                }
            ],
        },
        {
            path: '/coffees',
            element: <Coffees></Coffees>,
            loader: () => fetch('../coffees.json'),
        },
        {
            path: '/dashboard',
            element: <Dashboard></Dashboard>
        },
        {
            path: '/coffee/:id',
            element: <CoffeeDetails></CoffeeDetails>,
            loader: () => fetch('../coffees.json'),
        }
      ]
    }
  ]);

  export default routes;