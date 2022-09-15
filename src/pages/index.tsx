import type { NextPage } from "next";
import Image from "next/image";
import Content from "../components/content";
import Hero from "../components/hero";
import Nav from "../components/nav";

const Index: NextPage = () => {
  return (
    <div>
      <Hero />
      <main>
        <section id="about" className="flex justify-center">
          <article className="space-y-3 p-5 sm:container">
            <h2 id="about" className="text-4xl font-semibold">
              About
            </h2>
            <div className="flex flex-row flex-wrap text-lg">
              <div className="basis-100 flex flex-1 flex-col space-y-5 p-5">
                <p>
                  Ut veniam nisi consectetur nisi anim eu sunt labore culpa.
                  Adipisicing nisi exercitation amet adipisicing anim dolor
                  aliqua fugiat et amet aliquip Lorem. Nisi deserunt ut esse
                  amet ullamco culpa consectetur nostrud elit pariatur nisi
                  veniam et. Ipsum non cupidatat amet in minim aliquip qui non
                  esse. Sit reprehenderit tempor cillum aliquip aute minim ipsum
                  dolor fugiat ea. Nulla quis fugiat laborum minim aute.
                </p>
                <p>
                  Consequat cupidatat ut enim sint. Adipisicing in eu duis irure
                  commodo ex. Officia deserunt tempor in proident ipsum nostrud
                  enim officia adipisicing incididunt. Velit est laboris ea
                  Lorem ut non. Ea qui consectetur quis Lorem pariatur laboris
                  laborum exercitation do occaecat velit est quis. Voluptate
                  aute consectetur amet ad in Lorem dolore laborum culpa
                  aliquip. Enim pariatur labore aute amet non enim magna et
                  laboris.
                </p>
              </div>
              <div className="basis-100 flex flex-1 flex-col p-5">
                <Image src="/about.jpg" width="400px" height="350px" />
              </div>
            </div>
          </article>
        </section>
        <section className="flex justify-center">
          <article className="space-y-3 p-5 sm:container">
            <h2 id="brand" className="text-end text-4xl font-semibold">
              Brand
            </h2>
            <div className="flex flex-row-reverse flex-wrap text-lg">
              <div className="basis-100 flex flex-1 flex-col space-y-5 p-5 text-end">
                <p>
                  Ut veniam nisi consectetur nisi anim eu sunt labore culpa.
                  Adipisicing nisi exercitation amet adipisicing anim dolor
                  aliqua fugiat et amet aliquip Lorem. Nisi deserunt ut esse
                  amet ullamco culpa consectetur nostrud elit pariatur nisi
                  veniam et. Ipsum non cupidatat amet in minim aliquip qui non
                  esse. Sit reprehenderit tempor cillum aliquip aute minim ipsum
                  dolor fugiat ea. Nulla quis fugiat laborum minim aute.
                </p>
                <p>
                  Consequat cupidatat ut enim sint. Adipisicing in eu duis irure
                  commodo ex. Officia deserunt tempor in proident ipsum nostrud
                  enim officia adipisicing incididunt. Velit est laboris ea
                  Lorem ut non. Ea qui consectetur quis Lorem pariatur laboris
                  laborum exercitation do occaecat velit est quis. Voluptate
                  aute consectetur amet ad in Lorem dolore laborum culpa
                  aliquip. Enim pariatur labore aute amet non enim magna et
                  laboris.
                </p>
              </div>
              <div className="basis-100 flex flex-1 flex-col p-5">
                <div className="m-auto">
                  <Image
                    src="/brand.jpg"
                    width="480px"
                    height="600px"
                    layout="fixed"
                  />
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className="flex justify-center">
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
                  esse. Sit reprehenderit tempor cillum aliquip aute minim ipsum
                  dolor fugiat ea. Nulla quis fugiat laborum minim aute.
                </p>
                <p>
                  Consequat cupidatat ut enim sint. Adipisicing in eu duis irure
                  commodo ex. Officia deserunt tempor in proident ipsum nostrud
                  enim officia adipisicing incididunt. Velit est laboris ea
                  Lorem ut non. Ea qui consectetur quis Lorem pariatur laboris
                  laborum exercitation do occaecat velit est quis. Voluptate
                  aute consectetur amet ad in Lorem dolore laborum culpa
                  aliquip. Enim pariatur labore aute amet non enim magna et
                  laboris.
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
  );
};

export default Index;
