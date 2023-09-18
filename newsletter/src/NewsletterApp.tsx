import "./index.css";
import React, { useEffect, useState } from "react";
import { BgMobile } from "./assets/images/illustration-sign-up-mobile";
import { BgDesktop } from "./assets/images/illustration-sign-up-desktop";
import { InitialText } from "./components/UI/InitialText";
import { Form } from "./components/Form/Form";

interface NewsletterProps {}

export const NewsletterApp: React.FC<NewsletterProps> = ({}) => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1440);
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            {/* <FormSuccess /> */}
            {isDesktop ? <BgDesktop /> : <BgMobile />}
            <InitialText />
            <Form />
        </div>
    );
};
