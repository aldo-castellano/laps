import Image from "next/image";
import Form from "./form/form";
import Feature from "./feature/feature";

export default function Home() {
  return (
    <main>
      <Feature />
      <Form />
    </main>
  );
}
