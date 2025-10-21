import { t } from "@/lib/i18n";
import PrincipalActors from "@/components/PrincipalActors";
import WeddingGuests from "@/components/WeddingGuests";
import SemanticImage from "@/components/SemanticImage";

export default function Actors({ dict }) {
  return (
    <div className="ui basic very padded aligned segment">
      <h1 className="ui aligned sectionheader">
        {t(dict, "our team")} <i className="circular rocket pink icon link" />
      </h1>
      <div className="ui three column stackable grid container">
        <div className="column">
          <SemanticImage className="ui rounded image" src="/actors/elsa-figueira_actors-angolares.jpg" alt="Actors 1" />
        </div>
        <div className="column">
          <SemanticImage className="ui rounded image" src="/actors/elsa-figueira_actors-elsa-figueira-parents.jpg" alt="Actors 2" />
        </div>
        <div className="column">
          <SemanticImage className="ui rounded image" src="/actors/elsa-figueira_actors-police.jpg" alt="Actors 3" />
        </div>
      </div>
      <div className="ui two column stackable grid container">
        <div className="column">
          <PrincipalActors dict={dict} />
        </div>
        <div className="column">
          <WeddingGuests dict={dict} />
        </div>
      </div>
    </div>
  );
}
