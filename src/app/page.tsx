import Feature from "./(index)/components/feature";
import Whatsapp from "../components/whatsapp/whatsapp";
import Benefit from "./(index)/components/benefit";
import Testimonials from "./(index)/components/testimonials";
import Steps from "./(index)/components/steps";
import SteamCleaning from "./(index)/components/steamCleaning";
import Hero from "./(index)/components/hero";
import HomeFaq from "./(index)/components/homeFaq";
import { homeJsonLd } from "@/lib/seo";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  return (
    <main>
      <JsonLd data={homeJsonLd} />
      <Hero />
      <Steps />
      <SteamCleaning />
      <Benefit />
      <Testimonials />
      <Feature />
      <HomeFaq />
      <Whatsapp />
    </main>
  );
}
// google gtm , datalayer
