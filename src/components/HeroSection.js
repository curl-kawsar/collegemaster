export default function HeroSection() {
  return (
    <section
      className="bg-gradient-to-r from-[#0E207B] via-[#1540B5] to-[#447EF7] p-4 md:p-8 flex flex-col md:flex-row items-center justify-between mb-8 bg-cover bg-center w-full h-[600px] md:h-[800px]"
      style={{ backgroundImage: "url('/Hero.png')" }}
    >
      <div className="bg-gradient-to-t from-[#0A174E] via-[#0E207B] to-transparent p-6 md:p-12 rounded-lg">
        <h1 className="text-2xl md:text-6xl font-bold text-white mb-4">
          Innovative Education <br /> Solution
        </h1>
        <p className="md:text-2xl text-gray-200 mb-4">
          Empowering Learning with Modern <br /> Tools and Strategies
        </p>
        <button className="bg-white text-blue-600 font-bold px-4 py-2 md:px-6 md:py-3 rounded">
          Book Your Free Consultation
        </button>
      </div>
    </section>
  );
}