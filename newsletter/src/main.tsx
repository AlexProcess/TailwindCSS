import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NewsletterApp } from "./NewsletterApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <NewsletterApp />
    </React.StrictMode>
);
