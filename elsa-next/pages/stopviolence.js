import Layout from "@/components/Layout";
import Intro from "@/components/Intro";
import StopViolence from "@/components/StopViolence";
import Media from "@/components/Media";
import Social from "@/components/Social";
import Actors from "@/components/Actors";
import Party from "@/components/Party";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Thanks from "@/components/Thanks";
import Footer from "@/components/Footer";
import { getDict } from "@/lib/i18n";

export default function StopViolencePage() {
  const dict = getDict("en");
  return (
    <Layout lang="en">
      <Intro dict={dict} />
      <StopViolence dict={dict} />
      <Media dict={dict} />
      <Social dict={dict} />
      <Actors dict={dict} />
      <Party dict={dict} />
      <Team dict={dict} />
      <Partners dict={dict} />
      <Thanks dict={dict} />
      <Footer dict={dict} />
    </Layout>
  );
}

