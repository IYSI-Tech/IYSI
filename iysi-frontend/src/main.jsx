import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './routes/Homepage';
import Newsletter from './component/newsletter-route/Newsletter.jsx';
import Community from './component/community-route/Community.jsx';
import Contact from './component/contact-route/Contact.jsx';
import Register from './component/register-route/Register.jsx'
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
        path:"Newsletter",
        element: <Newsletter />,
      },
      {
        path:"Register",
        element: <Register />,
      },
      {
        path:"Community",
        element: <Community />,
      },
      {
        path:"Contact-us",
        element: <Contact />,
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
