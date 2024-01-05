import Image from "next/image";
import Form from "./form/form";
import Feature from "./feature/feature";
import Contact from "./contact/contact";
import Whatsapp from "./wharsapp/wharsapp";

export default function Home() {
  return (
    <main>
      <Feature />
      <Form />
      <Contact />
      <Whatsapp />
    </main>
  );
}
