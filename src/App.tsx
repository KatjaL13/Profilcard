import "./app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Overview from "./routes/overview/Overview";
import CreateView from "./routes/create/CreateView";
import EditView from "./routes/edit/EditView";
import { useReducer } from "react";
import userReducerProfile from "./hooks/useReducer";
import { UserContext } from "./context/UserContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/overview", element: <Overview /> },
      { path: "/create", element: <CreateView /> },
      { path: "/edit/:id", element: <EditView /> },
    ],
  },
]);

function App() {
  const [users, usersDispatch] = useReducer(userReducerProfile, [], fetchUsersFromLocalStorage);

  function fetchUsersFromLocalStorage() {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      return JSON.parse(storedUsers);
    }
    return [];
  }

  return (
    <UserContext.Provider value={{ users, usersDispatch }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
