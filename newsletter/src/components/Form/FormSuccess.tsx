import React from "react";
import { IconSuccess } from "../../assets/images/icon-success";
import { useLocation, useNavigate } from "react-router";

export const FormSuccess: React.FC = ({}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const email = location.state?.email || "";
    return (
        <div className="flex px-8 py-24">
            <div className="flex-col items-center space-y-6">
                <div className="mb-8">
                    <IconSuccess />
                </div>
                <div>
                    <h1 className="text-4xl font-bold text-charcoalgrey">
                        Thanks for Subscribing!
                    </h1>
                </div>
                <div>
                    <p className="font-medium text-charcoalgrey">
                        A confirmation email has been sent to{" "}
                        <span className="font-bold">{email}&#160;</span>
                        please open it and click the button inside to confirm
                        our subscription
                    </p>
                </div>
                <button
                    onClick={() => navigate("/")}
                    className="absolute px-12 py-3 font-bold text-white border border-blue-700 rounded-md left-5 right-5 bottom-8 bg-dark-slate hover:bg-blue-700"
                >
                    Dismiss messsage
                </button>
            </div>
        </div>
    );
};
