import React, { StrictMode } from "react";
import { createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './index.css';

import HomePage from './pages/Home/HomePage';
import FAQ from './pages/FAQ/FAQPage';
import Services from './pages/Services/ServicesPage';
import Contact from './pages/Contact/ContactPage';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  
  { 
    path: '/',
    element: <HomePage />
  },
  { 
    path: '/faq',
    element: <FAQ />
  },
  { 
    path: '/services',
    element: <Services />
  },
  { 
    path: '/contact',
    element: <Contact />
  }


  ]);

root.render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>
);


/*
   { 
    path: '/',
    element: </>
  }


*/