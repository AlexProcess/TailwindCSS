import { IconSuccess } from "../../assets/images/icon-success";
import { useLocation, useNavigate } from "react-router";

export const FormSuccess: React.FC = ({}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const email = location.state?.email || "";
    return (
        <div className="flex justify-center px-8 py-24">
            <div className="flex-col items-center space-y-6">
                <div className="mb-8">
                    <IconSuccess />
                </div>
                <div className="2xl:w-3/5">
                    <h1 className="text-4xl font-bold 2xl:text-7xl text-charcoalgrey">
                        Thanks for Subscribing!
                    </h1>
                </div>
                <div className="2xl:w-3/6">
                    <p className="font-medium text-charcoalgrey">
                        A confirmation email has been sent to{" "}
                        <span className="font-bold">{email}&#160;</span>
                        please open it and click the button inside to confirm
                        our subscription
                    </p>
                </div>
                <div className="2xl:self-center 2xl:justify-center 2xl:flex 2xl:w-1/2">
                    <button
                        onClick={() => navigate("/")}
                        className="hover:shadow-custom transition duration-150 ease-in-out hover:bg-gradient-to-r from-[#ff5b64] via-[#ff675c] to-[#ff8d48] px-12 py-3 font-bold text-white border border-blue-700 rounded-md sm:left-5 sm:right-5 sm:bottom-8 bg-dark-slate hover:bg-blue-700"
                    >
                        Dismiss messsage
                    </button>
                </div>
            </div>
        </div>
    );
};
