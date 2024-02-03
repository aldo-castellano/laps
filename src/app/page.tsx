import Form from "./(index)/components/form";
import Feature from "./(index)/components/feature";
import Whatsapp from "../components/whatsapp/whatsapp";
import Benefit from "./(index)/components/benefit";
import Steps from "./(index)/components/steps";

export default function Home() {
  return (
    <main>
      <Steps />
      <Benefit />

      <Feature />
      <Form />

      <Whatsapp />
    </main>
  );
}
// google gtm , datalayer
