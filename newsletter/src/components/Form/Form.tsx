import React, { useState } from "react";
import { supabase } from "../../db/api";

export const Form = () => {
    const [email, setEmail] = useState("");

    const handleSubscription = async (e: any) => {
        e.preventDefault();

        try {
            const { data, error } = await supabase
                .from("subscribers")
                .insert([{ email }]);

            if (error) {
                console.error(
                    "Error al guardar el correo electrónico:",
                    error.message
                );
            } else {
                console.log("Correo electrónico guardado con éxito:", data);
            }
        } catch (error: any) {
            console.error(
                "Error al comunicarse con la base de datos:",
                error.message
            );
        }
    };

    return (
        <div className="flex-col px-6">
            <p className="text-sm font-bold">Email address</p>
            <div className="flex justify-center mt-2 align-center">
                <form className="w-full" onSubmit={handleSubscription}>
                    <input
                        className="w-full h-12 p-5 mb-2 text-sm text-gray-700 border rounded-md border-grey focus:border-red-500 focus:outline-none"
                        type="text"
                        placeholder="email@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="flex justify-center mt-3">
                        <button className="px-12 py-3 font-bold text-white border border-blue-700 rounded-md bg-dark-slate hover:bg-blue-700">
                            Suscribe to monthly newsletter
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
