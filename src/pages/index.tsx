import type { NextPage } from "next";
import Nav from "../components/nav";

const Home: NextPage = () => {
  return (
    <div className="bg-white dark:bg-black">
      <Nav />
      <h1>Flos Detailing</h1>
    </div>
  );
};

export default Home;
