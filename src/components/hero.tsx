import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-90 flex justify-center bg-black">
      <div>
        <Image src="/logo.png" width="700px" height="700px" />
      </div>
    </div>
  );
}
