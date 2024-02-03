import Image from "next/image";
import Link from "next/link";
import Calculator from "../components/Calculator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">cfa calc</h1>
      <p className="text-xl mb-8">
        A calculator to see what&apos;s the most optimal way to spend your points.
      </p>
      <Calculator />
      <p className="text-sm mt-8">
        Disclaimer: We are not affiliated with Chick-fil-A. This is a personal project. Right now we&apos;re only using the data from the Chick-fil-A app and our local Chick-fil-A location. We are not responsible for any discrepancies in the data. Please use this tool at your own risk.
      </p>
      <footer>
        <p className="text-sm mt-8">
          made by <Link href="https://jarrensj.com">jarrensj 🍣</Link>
        </p>
      </footer>
    </main>
  );
}
