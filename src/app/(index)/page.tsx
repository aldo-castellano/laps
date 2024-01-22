import Form from "./components/form";
import Feature from "./components/feature";
import Contact from "./components/contact";
import Whatsapp from "../../components/global/whatsapp/whatsapp";
import Benefit from "./components/benefit";
import Testimonials from "./components/testimonials";
import Steps from "./components/steps";

export default function Home() {
  return (
    <main>
      <Steps />
      <Benefit />
      <Testimonials />

      <Feature />

      <Form />
      <Contact />
      <Whatsapp />
    </main>
  );
}
// google gtm , datalayer
