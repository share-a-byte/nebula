import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/images/logo.png"
        alt="Nebula logo"
        width={180}
        height={40}
        priority
      />
      <p className="text-center">loading...</p>
    </div>
  );
}
