import React, { useEffect, useState } from "react";
import { BgMobile } from "./assets/images/illustration-sign-up-mobile";
import { BgDesktop } from "./assets/images/illustration-sign-up-desktop";
import { MainContent } from "./components/UI/MainContent";

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
            <div className="2xl:flex-row-reverse 2xl:flex 2xl:place-content-around">
                {isDesktop ? <BgDesktop /> : <BgMobile />}
                <MainContent />
            </div>
        </div>
    );
};
