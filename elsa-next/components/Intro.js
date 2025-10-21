import { t } from "@/lib/i18n";
import SemanticImage from "@/components/SemanticImage";

export default function Intro({ dict }) {
  return (
    <div className="ui basic very padded center aligned segment">
      <h2>
        <SemanticImage
          className="ui avatar image hand"
          src="/team/team-pekagboom.jpg"
          alt="Pekagboom"
          data-title="Pekagboom"
          data-content={t(dict, "musician and author of the story")}
          data-variation="inverted"
        />
      </h2>
      <h1 className="ui center aligned icon header heroheader">
        “{t(dict, "what eyes can see, we can change")}.” — Pekagboom
      </h1>
    </div>
  );
}
