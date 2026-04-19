import Feature from "./(index)/components/feature";
import Whatsapp from "../components/whatsapp/whatsapp";
import Benefit from "./(index)/components/benefit";
import Testimonials from "./(index)/components/testimonials";
import Steps from "./(index)/components/steps";
import SteamCleaning from "./(index)/components/steamCleaning";
import Hero from "./(index)/components/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Steps />
      <SteamCleaning />
      <Benefit />
      <Testimonials />
      <Feature />
      <Whatsapp />
    </main>
  );
}
// google gtm , datalayer
