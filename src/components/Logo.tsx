import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="Bravioniyx Technologies"
      width={460}
      height={130}
      priority
      className="h-11 w-auto sm:h-14"
    />
  );
}
