import React from "react";

export const Form = () => {
    return (
        <div className="flex-col px-6">
            <p className="text-sm font-bold">Email address</p>
            <div className="flex justify-center mt-2 align-center">
                <form className="w-full">
                    <input
                        className="w-full h-12 p-5 mb-2 text-sm text-gray-700 border rounded-md border-grey focus:border-red-500 focus:outline-none"
                        type="text"
                        placeholder="email@company.com"
                    />
                    <div className="flex justify-center mt-4">
                        <button className="px-12 py-3 font-bold text-white border border-blue-700 rounded-md bg-dark-slate hover:bg-blue-700">
                            Suscribe to monthly newsletter
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
