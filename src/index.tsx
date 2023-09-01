import type { Root } from "react-dom/client";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./styles/index.scss";

const root: Root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<RouterProvider router={router} />);