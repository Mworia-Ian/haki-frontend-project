function About() {
  return (
    <div>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[500px] mx-auto my-4 rounded-xl drop-shadow-2xl"
            src="src/assets/images/court-hammer-books-judgment-law-concept.jpg"
            alt="/"
          />
          <div className="flex flex-col justify-center">
            <p className="text-[#00636D] font-bold text-xl">
              About us
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#080e31]">
              Making it easier to access legal representation
            </h1>
            <p className="text-[#00636D]">
            Haki aims to connect everyday Kenyans with reliable legal representation. Our platform helps you find customized legal services that match your specific needs.
            </p>
            <button className="bg-[#080e31] text-white hover:bg-[#00636D] hover:text-[#080e31] w-[200px] rounded-md font-medium my-6 mx-auto  md:mx-0 py-3 ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
