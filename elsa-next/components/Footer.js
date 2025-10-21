import { t } from "@/lib/i18n";

export default function Footer({ dict }) {
  return (
    <div className="ui basic very padded center aligned segment">
      <h1 className="ui aligned sectionheader">
        <a href="mailto:elsafigueira@haam.co">
          <i className="circular mail outline pink icon link" />
        </a>
      </h1>
      <div className="ui container">
        <button className="ui facebook circular basic button">
          <a href="https://www.facebook.com/ElsaFigueiraOfficial">
            <i className="facebook icon"></i>
            Facebook
          </a>
        </button>
        <button className="ui twitter circular basic button">
          <a href="https://twitter.com/elsa_fantastica">
            <i className="twitter icon"></i>
            Twitter
          </a>
        </button>
        <button className="ui instagram circular basic button">
          <a href="https://instagram.com/elsafigueiraofficial/">
            <i className="instagram icon"></i>
            Instagram
          </a>
        </button>
        <button className="ui youtube circular basic button">
          <a href="https://www.youtube.com/channel/UCWGHFz5wxfGdVxLQtNEt86g">
            <i className="youtube icon"></i>
            YouTube
          </a>
        </button>
      </div>
      <h4 className="ui aligned"><a href="mailto:elsafigueira@haam.co">elsafigueira@haam.co</a></h4>
      <h4 className="ui aligned">Bitcoin 3NrTjyCik9ssC3Wzb4qD8PkqBhhqjNnaMc</h4>
      <h4 className="ui aligned">
        {t(dict, "A Haamer Ventures OÜ, Galo Cantá and Pekagboom production")}
      </h4>
      <h4 className="ui aligned">© 2015</h4>
    </div>
  );
}

