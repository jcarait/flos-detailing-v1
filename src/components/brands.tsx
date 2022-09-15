import Image from "next/image";

export default function Brands() {
  return (
    <div className="grid gap-8 opacity-90 md:grid-cols-3 md:gap-5">
      <div className="m-auto">
        <Image src="/gtechniq.png" width="250px" height="53" layout="fixed" />
      </div>
      <div className="m-auto">
        <Image src="/rupes.png" width="150px" height="150px" />
      </div>
      <div className="m-auto">
        <Image src="/carpro.png" width="150px" height="150px" />
      </div>
      <div className="m-auto">
        <Image src="/scholl.png" width="250px" height="103px" />
      </div>
      <div className="m-auto">
        <Image src="/kochchemie.png" width="250px" height="53" />
      </div>
      <div className="m-auto">
        <Image src="/nv.jpg" width="150px" height="150px" />
      </div>
    </div>
  );
}
