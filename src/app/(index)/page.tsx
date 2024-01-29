import Form from "./components/form";
import Feature from "./components/feature";
import Whatsapp from "../../components/whatsapp/whatsapp";
import Benefit from "./components/benefit";
import Steps from "./components/steps";

export default function Home() {
  return (
    <main>
      <Steps />
      <Benefit />

      <Feature />
      {/* <Form /> */}

      <Whatsapp />
    </main>
  );
}
// google gtm , datalayer
