import Image from "next/image";
import Form from "./form/form";
import Feature from "./feature/feature";
import Contact from "./contact/contact";
import Whatsapp from "./wharsapp/wharsapp";
import Benefit from "./benefit";
import Testimonials from "./testimonials";

export default function Home() {
  return (
    <main>
      <Feature />

      <Benefit />
      <Testimonials />
      {/* <Form /> */}
      <Contact />
      <Whatsapp />
    </main>
  );
}
