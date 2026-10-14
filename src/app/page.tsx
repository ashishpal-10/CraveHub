import Combo from "@/components/Combo";
import Featured from "@/components/Featured";
import Heropage from "@/components/Heropage";
import Offerpage from "@/components/Offerpage";

export default function Home() {
  return (
   <main>
    <Heropage/>
   <Featured/>
   <Combo/>
   <Offerpage/>
   </main>
  );
}
