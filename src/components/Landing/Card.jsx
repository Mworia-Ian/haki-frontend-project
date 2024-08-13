import React from "react";

function Card() {
  return (
    <div id="Plans" className="flex items-center w-full py-[6rem] px-4 bg-[#F2F5F5] mb-5">
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
        <div className="w-full shadow-xl bg-[#37B9F1] text-[#242d2d] flex flex-col p-12 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[3rem] bg-transparent"
            src="src/assets/reshot-icon-justice-XH4D3B8RWF.svg"
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 text-[#242d2d]">Membership</h2>
          <p className="text-center text-4xl font-bold">KES 150/Month</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Unrestricted Access</p>
            <p className="py-2 border-b mx-8">Direct Contact with Lawyers</p>
            <p className="py-2 border- mx-8">24hr Support</p>
          </div>
          <button className="bg-[#242d2d] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#37B9F1] hover:bg-[#CBD4F4] hover:text-[#00636D]">
          Get Started
        </button>
        </div>

        <div className="w-full shadow-xl bg-[#37B9F1] text-[#242d2d] flex flex-col p-12 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[3rem] bg-transparent"
            src="src/assets/reshot-icon-justice-XH4D3B8RWF.svg"
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 text-[#242d2d]">Membership</h2>
          <p className="text-center text-4xl font-bold">Free</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Restricted Access</p>
            <p className="py-2 border-b mx-8">No Direct Contact with Lawyers</p>
            <p className="py-2 border- mx-8">4hr Support</p>
          </div>
          <button className="bg-[#242d2d] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#37B9F1] hover:bg-[#CBD4F4] hover:text-[#00636D]">
          Get Started
        </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
