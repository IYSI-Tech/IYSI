import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './routes/Homepage';
import CommunityRouteOne from './component/Route-one/CommunityRouteOne.jsx';
import CommunityRouteTwo from './component/Route-two/CommunityRouteTwo.jsx';
import 'aos/dist/aos.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>This is an error page</div>,
    children: [
      {
        element: <Homepage />,
        index:true,
      },
      {
        path:"CommunityRouteOne",
        element: <CommunityRouteOne />,
      },
      {
        path:"CommunityRouteTwo",
        element: <CommunityRouteTwo />,
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
