import Link from "next/link";
import { t } from "@/lib/i18n";

export default function StopViolence({ dict }) {
  return (
    <div className="ui basic very padded center aligned segment" style={{ paddingTop: 0 }}>
      <button className="ui circular basic compact large pink button" data-content={t(dict, "elsa is a fictional character")} data-variation="inverted">
        {t(dict, "who is elsa")}
      </button>
      <button className="ui circular basic compact large pink button" data-content={t(dict, "domestic violence is a global epidemic")} data-variation="inverted">
        {t(dict, "why")}
      </button>
      <button className="ui circular basic compact large pink button" data-content={t(dict, "by spreading awareness")} data-variation="inverted">
        {t(dict, "how")}
      </button>
      <div className="ui horizontal divider"></div>
      <Link href="/video#elsa" className="ui massive circular animated fade pink button joinnow">
        <div className="visible content">
          <i className="video play icon" />
          Elsa Figueira
        </div>
        <div className="hidden content">
          <i className="video play icon" />
        </div>
      </Link>
      <div className="ui horizontal divider"></div>
      <div className="ui basic very padded center aligned segment" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <h4 className="ui center aligned header" data-content="" data-variation="inverted">
          <i className="calendar pink icon" />
        </h4>
        <div className="ui middle aligned relaxed large list">
          <div className="item">
            <div className="content">
              <div className="description">
                <i className="map marker pink icon" />
                {t(dict, "Sao Tome and Principe")} — {t(dict, "5 february")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
