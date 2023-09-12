import "./index.css";
import { BgMobile } from "./assets/images/illustration-sign-up-mobile";
import { InitialText } from "./components/UI/InitialText";
import { Form } from "./components/Form/Form";

interface NewsletterProps {}

export const NewsletterApp: React.FC<NewsletterProps> = ({}) => {
    return (
        <div>
            <BgMobile />
            <InitialText />
            <Form />
        </div>
    );
};
