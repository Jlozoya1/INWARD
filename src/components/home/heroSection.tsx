import heroVideo from "../../assets/fileFinal.mp4";

export default function HeroSection() {
  return (
    <>
      <section
        id="hero"
        className="relative flex items-center h-[80vh] lg:h-[100vh] overflow-hidden"
      >
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight tracking-tight">
              Contabilidad que no solo suma, <br /> multiplica.
            </h1>
            <p className="mt-6 text-lg md:text-xl">
              Potenciamos tu{" "}
              <span className="text-[#dc2626] font-semibold">crecimiento</span>{" "}
              con estrategia financiera inteligente.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
