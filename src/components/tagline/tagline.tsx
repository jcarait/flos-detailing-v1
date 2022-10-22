import Image from "next/image";

const Tagline = () => {
  return (
    <section
      id="cta"
      className="container mt-8 flex min-h-3/4 flex-col justify-center px-10 md:flex-row md:items-center"
    >
      <div className="flex flex-col text-lg md:flex-row">
        <div className="basis-100 flex flex-1 flex-col justify-center space-y-5 p-5">
          <h3 className="mt-12 text-center text-4xl font-semibold tracking-wide md:w-60 md:leading-loose">
            Get the expert care your car needs
          </h3>
        </div>
        <div className="basis-100 flex flex-1 flex-col p-5">
          <Image src="/expert.jpg" width="700" height="950" />
        </div>
      </div>
    </section>
  );
};

export default Tagline;
