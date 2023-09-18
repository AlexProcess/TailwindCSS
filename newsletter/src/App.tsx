import { Routes, Route } from "react-router";
import { NewsletterApp } from "./NewsletterApp";
import { FormSuccess } from "./components/Form/FormSuccess";

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<NewsletterApp />} />
            <Route path="/form-success" element={<FormSuccess />} />
        </Routes>
    );
};
