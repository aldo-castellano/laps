import Form from "./components/form";
import Feature from "./components/feature";
import Footer from "./components/footer";
import Whatsapp from "../../components/global/whatsapp/whatsapp";
import Benefit from "./components/benefit";
import Steps from "./components/steps";

export default function Home() {
  return (
    <main>
      <Steps />
      <Benefit />

      <Feature />
      <Form />
      <Footer />
      <Whatsapp />
    </main>
  );
}
// google gtm , datalayer
