import { t } from "@/lib/i18n";
import SemanticImage from "@/components/SemanticImage";

export default function Party({ dict }) {
  return (
    <div className="ui basic very padded aligned segment">
      <h1 className="ui aligned sectionheader">
        {t(dict, "opening party")} <i className="circular birthday pink icon link" />
      </h1>
      <div className="ui three column stackable grid container">
        <div className="column">
          <SemanticImage className="ui huge rounded image" src="/launch/elsa-figueira_pico-mocambo-audience.jpg" alt="Party 1" />
        </div>
        <div className="column">
          <SemanticImage className="ui huge rounded image" src="/launch/elsa-figueira_team-galo-canta.jpg" alt="Party 2" />
        </div>
        <div className="column">
          <SemanticImage className="ui huge rounded image" src="/launch/elsa-figueira_enerlid-franca-katia-silva.jpg" alt="Party 3" />
        </div>
      </div>
    </div>
  );
}
