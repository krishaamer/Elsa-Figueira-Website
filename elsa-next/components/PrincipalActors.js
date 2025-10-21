import { t } from "@/lib/i18n";
import SemanticImage from "@/components/SemanticImage";

export default function PrincipalActors({ dict }) {
  return (
    <div className="ui basic very padded circular center aligned segment">
      <h2>{t(dict, "principal actors")}</h2>
      <div className="ui huge horizontal list">
        <div className="item">
          <SemanticImage className="ui avatar image hand" src="/team/team-pekagboom.jpg" alt="Pekagboom" data-title="Pekagboom" data-content={t(dict, "musician and author of the story")} data-variation="inverted" />
          <div className="content">
            <div className="header">Pekagboom</div>
          </div>
        </div>
        <div className="item">
          <SemanticImage className="ui avatar image hand" src="/team/team-regina-fereira.jpg" alt="Regina Fereira" data-title="Regina Fereira" data-content={t(dict, "protagonist in the role of elsa figueira")} data-variation="inverted" />
          <div className="content">
            <div className="header">Regina Fereira</div>
          </div>
        </div>
        <div className="item">
          <SemanticImage className="ui avatar image hand" src="/team/team-yanira-tiny.jpg" alt="Yanira Tiny" data-title="Yanira Tiny" data-content={t(dict, "the voice of elsa figueira")} data-variation="inverted" />
          <div className="content">
            <div className="header">Yanira Tiny</div>
          </div>
        </div>
        <div className="item">
          <SemanticImage className="ui avatar image hand" src="/team/team-valeri-andre-menezes.jpg" alt="Valeri André Menezes" data-title="Valeri André Menezes" data-content={t(dict, "actor in the role of Dom Pedro, the husband")} data-variation="inverted" />
          <div className="content">
            <div className="header">Valeri André Menezes</div>
          </div>
        </div>
        <div className="item">
          <SemanticImage className="ui avatar image hand" src="/team/team-josefina-antonia.jpg" alt="Josefina Antónia" data-title="Josefina Antónia" data-content={t(dict, "actress in the role of elsas mother")} data-variation="inverted" />
          <div className="content">
            <div className="header">Josefina Antónia</div>
          </div>
        </div>
        <div className="item">
          <SemanticImage className="ui avatar image hand" src="/team/team-revete-fernandes.jpg" alt="Revete Fernandes" data-title="Revete Fernandes" data-content={t(dict, "actor in the role of elsas father")} data-variation="inverted" />
          <div className="content">
            <div className="header">Revete Fernandes</div>
          </div>
        </div>
        <div className="item">
          <SemanticImage className="ui avatar image hand" src="/team/team-katya-aragao.jpg" alt="Katya Aragão" data-title="Katya Aragão" data-content={t(dict, "producer and actress in the role of the police")} data-variation="inverted" />
          <div className="content">
            <div className="header">Katya Aragão</div>
          </div>
        </div>
        <div className="item">
          <SemanticImage className="ui avatar image hand" src="/team/team-enerlid-franca-e-lagos.jpg" alt="Enerlid Franca e Lagos" data-title="Enerlid Franca e Lagos" data-content={t(dict, "producer and actor in the role of the police")} data-variation="inverted" />
          <div className="content">
            <div className="header">Enerlid Franca e Lagos</div>
          </div>
        </div>
        <div className="item">
          <SemanticImage className="ui avatar image hand" src="/team/team-ana-pinheiro.jpg" alt="Ana Pinheiro" data-title="Ana Pinheiro" data-content={t(dict, "actress in the role of elsas friend")} data-variation="inverted" />
          <div className="content">
            <div className="header">Ana Pinheiro</div>
          </div>
        </div>
        <div className="item">
          <SemanticImage className="ui avatar image hand" src="/team/team-danila-costa.jpg" alt="Danila Costa" data-title="Danila Costa" data-content={t(dict, "actress in the role of elsas friend")} data-variation="inverted" />
          <div className="content">
            <div className="header">Danila Costa</div>
          </div>
        </div>
      </div>
    </div>
  );
}
