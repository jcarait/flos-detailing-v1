import type { NextPage } from "next";
import Image from "next/image";
import Brands from "../components/brands";
import Hero from "../components/hero";

const Index: NextPage = () => {
  return (
    <div>
      <Hero />
      <div className="flex">
        <main className="m-auto sm:container">
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
          <section
            id="about"
            className="flex min-h-3/4 items-center justify-center"
          >
            <article className="space-y-3 p-5 sm:container">
              <h2 id="about" className="text-4xl font-semibold">
                About
              </h2>
              <div className="flex flex-col text-lg md:flex-row">
                <div className="basis-100 flex flex-1 flex-col space-y-5 p-5">
                  <p>
                    Ut veniam nisi consectetur nisi anim eu sunt labore culpa.
                    Adipisicing nisi exercitation amet adipisicing anim dolor
                    aliqua fugiat et amet aliquip Lorem. Nisi deserunt ut esse
                    amet ullamco culpa consectetur nostrud elit pariatur nisi
                    veniam et. Ipsum non cupidatat amet in minim aliquip qui non
                    esse. Sit reprehenderit tempor cillum aliquip aute minim
                    ipsum dolor fugiat ea. Nulla quis fugiat laborum minim aute.
                  </p>
                  <p>
                    Consequat cupidatat ut enim sint. Adipisicing in eu duis
                    irure commodo ex. Officia deserunt tempor in proident ipsum
                    nostrud enim officia adipisicing incididunt. Velit est
                    laboris ea Lorem ut non. Ea qui consectetur quis Lorem
                    pariatur laboris laborum exercitation do occaecat velit est
                    quis. Voluptate aute consectetur amet ad in Lorem dolore
                    laborum culpa aliquip. Enim pariatur labore aute amet non
                    enim magna et laboris.
                  </p>
                </div>
                <div className="basis-100 flex flex-1 flex-col p-5">
                  <Image src="/about.jpg" width="400px" height="350px" />
                </div>
              </div>
            </article>
          </section>
          <hr className="mb-10" />
          <section className="flex min-h-3/4 justify-center">
            <article className="space-y-3 p-5 sm:container">
              <h2 id="brand" className="mb-10 p-2 text-3xl font-semibold">
                Premium Brands
              </h2>
              <div className="container">
                <Brands />
              </div>
            </article>
          </section>
          <hr className="mb-10" />
          <section className="flex min-h-3/4 justify-center">
            <article className="space-y-3 p-5 sm:container">
              <h2 id="contact" className="text-4xl font-semibold">
                Contact
              </h2>
              <div className="flex flex-row flex-wrap text-lg">
                <div className="basis-100 flex flex-1 flex-col space-y-5 p-5">
                  <p>
                    Ut veniam nisi consectetur nisi anim eu sunt labore culpa.
                    Adipisicing nisi exercitation amet adipisicing anim dolor
                    aliqua fugiat et amet aliquip Lorem. Nisi deserunt ut esse
                    amet ullamco culpa consectetur nostrud elit pariatur nisi
                    veniam et. Ipsum non cupidatat amet in minim aliquip qui non
                    esse. Sit reprehenderit tempor cillum aliquip aute minim
                    ipsum dolor fugiat ea. Nulla quis fugiat laborum minim aute.
                  </p>
                  <p>
                    Consequat cupidatat ut enim sint. Adipisicing in eu duis
                    irure commodo ex. Officia deserunt tempor in proident ipsum
                    nostrud enim officia adipisicing incididunt. Velit est
                    laboris ea Lorem ut non. Ea qui consectetur quis Lorem
                    pariatur laboris laborum exercitation do occaecat velit est
                    quis. Voluptate aute consectetur amet ad in Lorem dolore
                    laborum culpa aliquip. Enim pariatur labore aute amet non
                    enim magna et laboris.
                  </p>
                </div>
                <div className="basis-100 flex flex-1 flex-col p-5">
                  <Image src="/about.jpg" width="400px" height="350px" />
                </div>
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
