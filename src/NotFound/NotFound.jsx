import ErrorVideo from "./Not Found page.mp4";
import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== "/404") {
            navigate("/404", { replace: true });
        }
    }, [location, navigate]);
    return (
        <div>
            <div className="relative flex flex-col items-center justify-center min-h-screen text-white text-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <video className="w-full h-full object-cover" autoPlay muted loop>
                        <source src={ErrorVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className=" absolute bottom-[100px] left-[170px] b z-10">
                    <Link
                        to="/"
                        className="px-6 py-2 bg-red-500 rounded-full text-lg font-semibold hover:bg-red-600 transition"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
