import { t } from "@/lib/i18n";
import SemanticImage from "@/components/SemanticImage";

const guests = [
  ["Assis Abril", "/team/team-assis-abril.jpg"],
  ["Clinton Lima", "/team/team-clinton-lima.jpg"],
  ["Dio Lima", "/team/team-dio-lima.jpg"],
  ["Edzania Graça", "/team/team-edzania-graca.jpg"],
  ["Ierquine Vaz", "/team/team-ierquine-vaz.jpg"],
  ["Juelce Vera Cruz", "/team/team-juelce-vera-cruz.jpg"],
  ["Rute Ceita", "/team/team-rute-ceita.jpg"],
  ["Vanessa Viegas", "/team/team-vanessa-viegas.jpg"],
  ["Joimar Leite", "/team/team-joimar-leite.jpg"],
  ["Sónia Conceição", "/team/team-sonia-conceicao.jpg"],
  ["Shinteya Teal", "/team/team-shinteya-teal.jpg"],
  ["Carlos Semedo", "/team/team-carlos-semedo.jpg"],
];

export default function WeddingGuests({ dict }) {
  return (
    <div className="ui basic very padded circular center aligned segment">
      <h2>{t(dict, "extras at the wedding")}</h2>
      <div className="ui huge horizontal list">
        {guests.map(([name, src]) => (
          <div className="item link" key={name}>
            <SemanticImage className="ui avatar image hand" src={src} alt={name} data-title={name} data-content={t(dict, "member of the acting group early morning surprise")} data-variation="inverted" />
            <div className="content">
              <div className="header">{name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
