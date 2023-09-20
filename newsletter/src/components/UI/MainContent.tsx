import { useState } from "react";
import { IconList } from "../../assets/images/icon-list";
import { supabase } from "../../db/api";
import { useNavigate } from "react-router";

export const MainContent: React.FC = ({}) => {
    const [email, setEmail] = useState("");

    const handleSubscription = async (e: any) => {
        e.preventDefault();

        const navigate = useNavigate();

        try {
            const { data, error } = await supabase
                .from("NewsletterTableDB")
                .insert([{ email }]);

            if (error) {
                console.error(
                    "Error al guardar el correo electrónico:",
                    error.message
                );
            } else {
                console.log("Correo electrónico guardado con éxito:", data);

                navigate("/form-success", { state: { email } });
            }
        } catch (error: any) {
            console.error(
                "Error al comunicarse con la base de datos:",
                error.message
            );
        }
    };

    return (
        <section className="flex-col p-6 py-20 space-y-2 2xl:space-y-8">
            <div className="">
                <h1 className="text-4xl font-bold text-dark-slate 2xl:text-7xl">
                    Stay updated!
                </h1>
            </div>
            <div className="2xl:w-4/5">
                <p className="font-normal text-dark-slate 2xl:text-lg">
                    Join 60,000+ product managers receiving monthly updates on:
                </p>
            </div>
            <div className="flex-col space-y-4">
                <div className="flex-row items-center mt-4">
                    <div className="flex items-center gap-4 ">
                        <IconList className="rounded-full bg-tomato" />
                        <p className="2xl:text-lg">
                            Product discovery and building what matters
                        </p>
                    </div>
                </div>
                <div className="flex-row items-center ">
                    <div className="flex items-center gap-4 ">
                        <IconList className="rounded-full bg-tomato" />
                        <p className="2xl:text-lg">
                            Measuring to ensure updates are a success
                        </p>
                    </div>
                </div>
                <div className="flex-row items-center">
                    <div className="flex items-center gap-4 ">
                        <IconList className="rounded-full bg-tomato" />
                        <p className="2xl:text-lg">And much more!</p>
                    </div>
                    <div className="mt-8">
                        <p className="text-sm font-bold">Email address</p>
                    </div>
                    <div className="flex justify-center mt-2 align-center">
                        <form className="w-full " onSubmit={handleSubscription}>
                            <input
                                className="h-12 p-5 mb-2 text-sm text-gray-700 border rounded-md sm:w-full border-grey focus:border-red-500 focus:outline-offset-1"
                                type="text"
                                placeholder="email@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="flex justify-center mt-3">
                                <button
                                    type="submit"
                                    className="w-full hover:shadow-custom transition duration-150 ease-in-out hover:bg-gradient-to-r from-[#ff5b64] via-[#ff675c] to-[#ff8d48] px-12 py-3 font-bold text-white border border-blue-700 rounded-md bg-dark-slate "
                                >
                                    Suscribe to monthly newsletter
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex-col px-6 space-y-4"></div>
            </div>
        </section>
    );
};
