import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ChildLayout from "./pages/ChildLayout.jsx";
import HomePage from "./pages/HomePage";
import CoursesPage, { loader as contactPageLoader } from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/Error/ErrorPage";
import MyAccountPage from "./pages/MyAccountPage.jsx";
import ForgotPassword from "./components/My-Account/ForgotPassword.jsx";
import { Provider } from "react-redux";
import store from "./store/store.jsx";
import CourseDetailsPage from "./pages/CourseDetailspage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    loader: contactPageLoader,
  },
  {
    path: "/coursevista",
    element: <ChildLayout />,
    children: [
      {
        path: "courses",
        children: [
          { index: true, element: <CoursesPage /> },
          { path: ":courseId", element: <CourseDetailsPage /> },
        ],
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "my-account",
        children: [
          { index: true, element: <MyAccountPage /> },
          { path: "forgot-password", element: <ForgotPassword /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // </React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
