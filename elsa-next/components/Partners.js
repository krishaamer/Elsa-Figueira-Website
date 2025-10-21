import { t } from "@/lib/i18n";
import SemanticImage from "@/components/SemanticImage";

export default function Partners({ dict }) {
  return (
    <div className="ui basic very padded aligned segment">
      <h1 className="ui aligned sectionheader">
        {t(dict, "partners")} <i className="circular lightning pink icon link" />
      </h1>

      {/* Row 1 */}
      <div className="ui horizontal segments">
        <div className="ui center aligned segment">
          <a href="http://haam.co">
            <SemanticImage className="ui medium rounded image" src="/sponsors/haamer-ventures.jpg" alt="Haamer Ventures" data-content={t(dict, "platinum sponsor")} data-variation="inverted" />
          </a>
        </div>
        <div className="ui center aligned segment">
          <a href="http://wnb.ee">
            <SemanticImage className="ui medium rounded image" src="/sponsors/wnb.jpg" alt="WNB" data-content={t(dict, "platinum sponsor")} data-variation="inverted" />
          </a>
        </div>
        <div className="ui center aligned segment">
          <SemanticImage className="ui medium rounded image hand" src="/sponsors/oliver-wihler.jpg" alt="Oliver Wihler" data-content={t(dict, "silver sponsor")} data-variation="inverted" />
        </div>
        <div className="ui center aligned segment becomesupporter hand" onClick={() => window.dispatchEvent(new Event("open-contact"))}>
          <SemanticImage className="ui medium rounded image" src="/sponsors/become-supporter.jpg" alt={t(dict, "Become a partner of Elsa Figueira")} />
        </div>
        <div className="ui center aligned segment becomesupporter hand" onClick={() => window.dispatchEvent(new Event("open-contact"))}>
          <SemanticImage className="ui medium rounded image" src="/sponsors/become-supporter.jpg" alt={t(dict, "Become a partner of Elsa Figueira")} />
        </div>
        <div className="ui center aligned segment becomesupporter hand" onClick={() => window.dispatchEvent(new Event("open-contact"))}>
          <SemanticImage className="ui medium rounded image" src="/sponsors/become-supporter.jpg" alt={t(dict, "Become a partner of Elsa Figueira")} />
        </div>
      </div>

      {/* Row 2 */}
      <div className="ui horizontal segments">
        <div className="ui center aligned segment">
          <a href="https://www.facebook.com/PEKAGBOOM">
            <SemanticImage className="ui medium rounded image" src="/sponsors/pekagboom.jpg" alt="Pekagboom" data-content={t(dict, "co-producer")} data-variation="inverted" />
          </a>
        </div>
        <div className="ui center aligned segment">
          <a href="http://galocanta.org">
            <SemanticImage className="ui medium rounded image" src="/sponsors/galo-canta.jpg" alt="Galo Cantá" data-content={t(dict, "co-producer")} data-variation="inverted" />
          </a>
        </div>
        <div className="ui center aligned segment">
          <a href="http://www.cfaomotors-stp.com/">
            <SemanticImage className="ui medium rounded image" src="/sponsors/cfao.jpg" alt="CFAO" data-content={t(dict, "supporter")} data-variation="inverted" />
          </a>
        </div>
        <div className="ui center aligned segment">
          <a href="https://www.facebook.com/OceanuesGuestHousestp">
            <SemanticImage className="ui medium rounded image" src="/sponsors/oceanus.jpg" alt="Oceanus" data-content={t(dict, "supporter")} data-variation="inverted" />
          </a>
        </div>
        <div className="ui center aligned segment">
          <a href="https://www.facebook.com/copinetsolutions">
            <SemanticImage className="ui medium rounded image" src="/sponsors/copinet.jpg" alt="Copinet" data-content={t(dict, "supporter")} data-variation="inverted" />
          </a>
        </div>
        <div className="ui center aligned segment">
          <a href="http://cst.st">
            <SemanticImage className="ui medium rounded image" src="/sponsors/cst.jpg" alt="CST" data-content={t(dict, "supporter")} data-variation="inverted" />
          </a>
        </div>
      </div>

      {/* Row 3 */}
      <div className="ui horizontal segments">
        <div className="ui center aligned segment">
          <a href="https://www.facebook.com/PNstp">
            <SemanticImage className="ui medium rounded image" src="/sponsors/policia-nacional-stp.jpg" alt={t(dict, "policia nacional")} data-content={t(dict, "supporter")} data-variation="inverted" />
          </a>
        </div>
        <div className="ui center aligned segment">
          <a href="https://liis.co">
            <SemanticImage className="ui medium rounded image" src="/sponsors/liis-peetermann.jpg" alt="Liis Peetermann" data-content={t(dict, "supporter")} data-variation="inverted" />
          </a>
        </div>
        <div className="ui center aligned segment">
          <a href="https://www.facebook.com/Casa-Comercial-Sofia-Filhos-1588768538020115/">
            <SemanticImage className="ui medium rounded image" src="/sponsors/casa-comercial-sofia-e-filhos.jpg" alt="Casa Comercial Sofia e Filhos" data-content={t(dict, "supporter")} data-variation="inverted" />
          </a>
        </div>
        <div className="ui center aligned segment">
          <a href="https://www.facebook.com/LojaAtentikaSTome/">
            <SemanticImage className="ui medium rounded image" src="/sponsors/autentika.jpg" alt="Loja Autentika S.Tomé" data-content={t(dict, "supporter")} data-variation="inverted" />
          </a>
        </div>
        <div className="ui center aligned segment">
          <a href="http://www.conceitocasa.com">
            <SemanticImage className="ui medium rounded image" src="/sponsors/conceito-casa.jpg" alt="Conceito Casa" data-content={t(dict, "supporter")} data-variation="inverted" />
          </a>
        </div>
        <div className="ui center aligned segment">
          <a href="http://linhavermelha.st">
            <SemanticImage className="ui medium rounded image" src="/sponsors/linha-vermelha.jpg" alt="Linha Vermelha" data-content={t(dict, "supporter")} data-variation="inverted" />
          </a>
        </div>
      </div>
    </div>
  );
}
