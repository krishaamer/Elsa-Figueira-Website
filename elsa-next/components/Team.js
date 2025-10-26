import { t } from "@/lib/i18n";
import SemanticImage from "@/components/SemanticImage";

const team = [
  ["/team/team-pekagboom.jpg", "Pekagboom", "musician and author of the story"],
  ["/team/team-kris-haamer.jpg", "Kris Haamer", "director, producer, co-author"],
  ["/team/team-carla-rebelo.jpg", "Carla Rebelo", "co-author"],
  ["/team/team-katya-aragao.jpg", "Katya Aragão", "producer and actress in the role of the police"],
  ["/team/team-enerlid-franca-e-lagos.jpg", "Enerlid Franca e Lagos", "producer and actor in the role of the police"],
  ["/team/team-daena-neto.jpg", "Daena Neto", "producer"],
  ["/team/team-cynthia-tiny.jpg", "Cynthia Tiny", "public relations"],
  ["/team/team-marlene-fortes.jpg", "Marlene Fortes", "public relations"],
  ["/team/team-mario-lopes.jpg", "Mário Lopes", "public relations"],
  ["/team/team-vivalda-prazeres.jpg", "Vivalda Prazeres", "public relations"],
  ["/file.svg", "Joelma de Matos", "public relations"],
  ["/file.svg", "Joana Almeida", "public relations"],
];

export default function Team({ dict }) {
  return (
    <div className="ui basic very padded aligned segment" id="team">
      <h1 className="ui aligned sectionheader">
        {t(dict, "creators")} <i className="circular heart red icon link" />
      </h1>
      <div className="ui basic very padded circular center aligned segment">
        <div className="ui huge horizontal list">
          {team.map(([src, name, role]) => (
            <div className="item" key={name}>
              <SemanticImage className="ui avatar image hand" src={src} alt={name} data-title={name} data-content={t(dict, role)} data-variation="inverted" />
              <div className="content">
                <div className="header">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
