import React from "react";
import { Link } from "react-router-dom";


const BackMotos = () => {
    return (
        <Link to="/motos">
            <div className="bg-[#202020] w-full px-6 md:px-12 lg:px-20 pt-6 pb-2">
                <button className="text-[#ff6b00] text-lg tracking-[0.1em]  cursor-pointer py-4 transition-all duration-300 font-semibold hover:text-orange-600">
                    ← Back To Inventory
                </button>
            </div>
        </Link>
    );
};

export default BackMotos;