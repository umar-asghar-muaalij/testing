import React from "react";

const Patient = () => {
  return (
    <div className="bg-slate-500 h-auto rounded-xl pt-6 pl-3 pb-5 flex items-start">
      <div className="bg-black w-12 h-12 rounded-full flex-shrink-0"></div>
      <div className="ml-4">
        <div className="font-bold text-lg">
          <h1>Syed Abdullah Ashiq</h1>
        </div>
        <div className="mt-5 text-lg pr-2">
          <p>
            In a small town nestled between rolling hills, a curious cat named
            Whiskers embarked on an unexpected adventure. One sunny morning, as
            he lounged on the windowsill, a vibrant butterfly fluttered by,
            catching his eye. Intrigued, Whiskers leaped to the ground and
            dashed after it, weaving through gardens filled with blooming
            flowers and overgrown grass.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Patient;
