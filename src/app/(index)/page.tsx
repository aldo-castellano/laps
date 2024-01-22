import Form from "./components/form";
import Feature from "./components/feature";
import Contact from "./components/contact";
import Whatsapp from "../../components/global/whatsapp/whatsapp";
import Benefit from "./components/benefit";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <main>
      <Feature />
      <Benefit />
      <Testimonials />
      <Form />
      <Contact />
      <Whatsapp />
    </main>
  );
}
