import type { NextPage } from "next";
import Content from "../components/content";
import Hero from "../components/hero";
import Nav from "../components/nav";

const Index: NextPage = () => {
  return (
    <>
      <Hero />
      <main>
        <section id="about" className="flex justify-center">
          <Content />
        </section>
      </main>
    </>
  );
};

export default Index;
