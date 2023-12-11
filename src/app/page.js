import Hero from "@/components/hero/Hero";
import Info_desc from "@/components/info/Info_desc";
import Info_desc2 from "@/components/info/Info_desc2";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <Hero />
      <Info_desc />
      <Info_desc2 />
    </main>
  );
}
