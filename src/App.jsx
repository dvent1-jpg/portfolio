import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MarriottBlendedAI from './pages/MarriottBlendedAI';
import MarriottBookingFunnel from './pages/MarriottBookingFunnel';
import JeselTransformation from './pages/JeselTransformation';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/marriott-blended-ai-search-experience", element: <MarriottBlendedAI /> },
      { path: "/marriott-booking-funnel-redesign", element: <MarriottBookingFunnel /> },
      { path: "/jesel-digital-business-transformation", element: <JeselTransformation /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
