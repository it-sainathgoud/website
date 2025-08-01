import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/mindtris-logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Mindtris">
      <Image src={logo} alt="Mindtris Logo" width={36} height={36} />
    </Link>
  );
}
