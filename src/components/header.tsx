import inwardOnly from "../assets/inwardLogo.svg";

export default function Header() {
  return (
    <>
      <header className="absolute top-0 left-0 w-full z-30 py-4">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <img
              src={inwardOnly}
              alt="Inward Logo"
              className="h-8 md:h-10 w-auto"
            />
            <h1 className="ml-3 text-white font-semibold text-2xl">INWARD</h1>
          </div>
        </div>
      </header>
    </>
  );
}
