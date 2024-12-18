import Image from "next/image";

export const QRcode = ({ code }: {code: string}) => {
  return <Image src={code} width={400} height={400} alt="QR code"/>;
};
