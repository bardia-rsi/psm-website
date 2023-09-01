import type { Root } from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.scss";

const root: Root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />)