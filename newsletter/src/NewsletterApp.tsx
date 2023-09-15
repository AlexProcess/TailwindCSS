import "./index.css";
import React, { useEffect, useState } from "react";
import { BgMobile } from "./assets/images/illustration-sign-up-mobile";
import { BgDesktop } from "./assets/images/illustration-sign-up-desktop";
import { InitialText } from "./components/UI/InitialText";
import { Form } from "./components/Form/Form";
import { FormSuccess } from "./components/Form/FormSuccess";

interface NewsletterProps {}

export const NewsletterApp: React.FC<NewsletterProps> = ({}) => {
    // const [isDesktop, setIsDesktop] = useState(false);

    // useEffect(() => {
    //     // Verificar la resolución de pantalla
    //     const handleResize = () => {
    //         setIsDesktop(window.innerWidth >= 1440);
    //     };

    //     // Agregar un event listener para cambiar la resolución
    //     window.addEventListener("resize", handleResize);

    //     // Llamar a handleResize una vez para establecer la resolución inicial
    //     handleResize();

    //     // Limpiar el event listener al desmontar el componente
    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     };
    // }, []);

    return (
        <div>
            <FormSuccess />
            {/* {isDesktop ? <BgDesktop /> : <BgMobile />}
            <InitialText />
            <Form /> */}
        </div>
    );
};
