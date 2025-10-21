import { t } from "@/lib/i18n";
import SemanticImage from "@/components/SemanticImage";

export default function Social({ dict }) {
  return (
    <div className="ui basic very padded aligned segment">
      <h1 className="ui aligned sectionheader">
        {t(dict, "no to violence")} <i className="circular add user pink icon link" />
      </h1>
      <div className="ui three column stackable grid container">
        <div className="column">
          <SemanticImage className="ui massive fluid rounded image" src="/social/supporters-1.jpg" alt="Supporters 1" />
        </div>
        <div className="column">
          <SemanticImage className="ui massive fluid rounded image" src="/social/supporters-2.jpg" alt="Supporters 2" />
        </div>
        <div className="column">
          <SemanticImage className="ui massive fluid rounded image" src="/social/supporters-3.jpg" alt="Supporters 3" />
        </div>
      </div>
    </div>
  );
}
