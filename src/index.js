import React from "react";
import ReactDOM from "react-dom/client";
import AddJOJOCharacter from "./components/AddJojoCharacter"
import JOJOPart1 from "./components/JojoPartOneList"
import JOJOPart2 from "./components/JojoPartTwoList"
import JOJOPart3 from "./components/JojoPartThreeList"
import JOJOPart4 from "./components/JojoPartFourList"
import JOJOPart5 from "./components/JojoPartFiveList"
import JOJOPart6 from "./components/JojoPartSixList"
import JOJOPart7 from "./components/JojoPartSevenList"
import JOJOPart8 from "./components/JojoPartEightList"
import App from "./App"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/addJOJOCharacter",
    element: <AddJOJOCharacter />,
  },
  {
    path: "/jojoPart1",
    element: <JOJOPart1 />,
  },
  {
    path: "/jojoPart2",
    element: <JOJOPart2 />,
  },
  {
    path: "/jojoPart3",
    element: <JOJOPart3 />,
  },
  {
    path: "/jojoPart4",
    element: <JOJOPart4 />,
  },
  {
    path: "/jojoPart5",
    element: <JOJOPart5 />,
  },
  {
    path: "/jojoPart6",
    element: <JOJOPart6 />,
  },
  {
    path: "/jojoPart7",
    element: <JOJOPart7 />,
  },
  {
    path: "/jojoPart8",
    element: <JOJOPart8 />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);