import { useState, useEffect } from "react";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  if (!showLoader) return null; 

  return (
    <section className="bg-[#202020] min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="tracking-widest text-gray-400 text-sm">
          LOADING MOTORCYCLES...
        </p>
      </div>
    </section>
  );
};

export default Loader;