import { t } from "@/lib/i18n";
import SemanticImage from "@/components/SemanticImage";

function YouTube({ id }) {
  return (
    <div className="ui embed" style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
      <iframe
        src={`https://www.youtube.com/embed/${id}?rel=0`}
        title={id}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

function Card({ meta, avatarSrc, avatarAlt, children, dict }) {
  return (
    <div className="ui fluid card">
      <div className="content">
        <div className="right floated meta">{meta}</div>
        {avatarSrc && (
          <>
            <SemanticImage
              className="ui avatar image hand"
              src={avatarSrc}
              alt={avatarAlt}
              data-title={avatarAlt}
              data-content={t(dict, avatarAlt === "Pekagboom" ? "musician and author of the story" : avatarAlt === "Mário Lopes" || avatarAlt === "Cynthia Tiny" ? "public relations" : avatarAlt === "Regina Fereira" ? "protagonist in the role of elsa figueira" : "")}
              data-variation="inverted"
            /> {avatarAlt}
          </>
        )}
      </div>
      <div className="image">{children}</div>
    </div>
  );
}

export default function Media({ dict }) {
  return (
    <div className="ui basic very padded aligned segment">
      <h1 className="ui aligned sectionheader">
        {t(dict, "elsa figueira in the media")} <i className="circular film pink icon link" />
      </h1>
      <div className="ui three stackable cards">
        <Card
          meta={t(dict, "documentary what should elsa do")}
          avatarSrc="/team/team-pekagboom.jpg"
          avatarAlt="Pekagboom"
          dict={dict}
        >
          <YouTube id="PN-UKGvSSls" />
        </Card>

        <Card
          meta={t(dict, "interview")}
          avatarSrc="/team/team-mario-lopes.jpg"
          avatarAlt="Mário Lopes"
          dict={dict}
        >
          <YouTube id="kDAfvpO61Ao" />
        </Card>

        <Card
          meta={t(dict, "stptv changing mentalities")}
          avatarSrc="/team/team-cynthia-tiny.jpg"
          avatarAlt="Cynthia Tiny"
          dict={dict}
        >
          <YouTube id="tFHtky6N5yc" />
        </Card>

        <Card
          meta={t(dict, "bue fixe rdp africa")}
          avatarSrc="/team/team-marlene-fortes.jpg"
          avatarAlt="Marlene Fortes"
          dict={dict}
        >
          <a href="https://www.youtube.com/watch?v=CsAVDFtHV6g">
            <SemanticImage className="ui fluid image" src="/media/elsa-figuiera_pekagboom-marlene-fortes-rdp-africa-2.jpg" alt="RDP Africa" />
          </a>
        </Card>

        <Card
          meta={t(dict, "interview with andim media")}
          avatarSrc="/team/team-regina-fereira.jpg"
          avatarAlt="Regina Fereira"
          dict={dict}
        >
          <a href="https://www.youtube.com/watch?v=N5Q1D4iRG-U">
            <SemanticImage className="ui fluid image" src="/media/elsa-figueira-andim-regina-fereira-valeri-andre-menezes.jpg" alt="ANDIM" />
          </a>
        </Card>

        <div className="ui fluid card">
          <div className="content">
            {/* Feed */}
            <div className="ui feed">
              <div className="event">
                <div className="label">
                  <SemanticImage className="ui image hand" src="/team/team-katya-aragao.jpg" alt="Katya Aragão" data-title="Katya Aragão" data-content={t(dict, "producer and actress in the role of the police")} data-variation="inverted" />
                </div>
                <div className="content">
                  <div className="summary">
                    Katya Aragão {t(dict, "at the radio")} {" "}
                    <a href="https://soundcloud.com/elsafigueira/elsafigueira-radio-voice-of-america-portugues">
                      Voice of America (VOA) Português
                    </a>
                  </div>
                  <div className="extra text">
                    “{t(dict, "domestic violence is a problem that plagues the whole world")}.“
                  </div>
                  <div className="extra images">
                    <a href="https://soundcloud.com/elsafigueira/elsafigueira-radio-voice-of-america-portugues">
                      <SemanticImage className="ui image" src="/media/elsa-figueira-voice-of-america-katya-aragao-enerlid-franca.jpg" alt="VOA" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="event">
                <div className="label">
                  <SemanticImage className="ui image hand" src="/team/team-pekagboom.jpg" alt="Pekagboom" data-title="Pekagboom" data-content={t(dict, "musician and author of the story")} data-variation="inverted" />
                </div>
                <div className="content">
                  <div className="summary">
                    {t(dict, "Pekagboom at")} {" "}
                    <a href="http://www.rtp.pt/play/p1441/e174507/bem-vindos-2014">RTP Africa&apos;s Bem-Vindos</a> {" "}
                    {t(dict, "with the host")} Cláudia Leal
                  </div>
                  <div className="extra images">
                    <a href="http://www.rtp.pt/play/p1441/e174507/bem-vindos-2014">
                      <SemanticImage src="/media/elsa-figueira-pekagboom-bem-vindos.jpg" alt="Bem-Vindos" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="event">
                <div className="label">
                  <SemanticImage className="ui image hand" src="/team/team-vivalda-prazeres.jpg" alt="Vivalda Prazeres" data-title="Vivalda Prazeres" data-content={t(dict, "public relations")} data-variation="inverted" />
                </div>
                <div className="content">
                  <div className="summary">
                    Vivalda dos Prazeres, Pekagboom {t(dict, "and")} Kris Haamer {t(dict, "at the portal")} {" "}
                    <a href="http://steppesinsync.com/2014/11/26/sao-tomean-estonian-elsa-figueira-creates-positive-role-models-keeps-anti-violence-discussion-going/">
                      Steppes in Sync
                    </a>
                  </div>
                </div>
              </div>

              <div className="event">
                <div className="label">
                  <SemanticImage className="ui image hand" src="/team/team-mario-lopes.jpg" alt="Mário Lopes" data-title="Mário Lopes" data-content={t(dict, "public relations")} data-variation="inverted" />
                </div>
                <div className="content">
                  <div className="summary">
                    Mário Lopes, Pekagboom {t(dict, "and")} Kris Haamer {t(dict, "at the radio")} {" "}
                    <a href="http://www.dw.com/pt/filme-produzido-em-são-tomé-e-pr%C3%ADncipe-fortalece-poder-da-mulher-contra-a-violência-doméstica/a-18084781">
                      Deutsche Welle
                    </a>
                  </div>
                </div>
              </div>

              <div className="event">
                <div className="label">
                  <SemanticImage className="ui image hand" src="/team/team-kris-haamer.jpg" alt="Kris Haamer" data-title="Kris Haamer" data-content={t(dict, "director, producer, co-author")} data-variation="inverted" />
                </div>
                <div className="content">
                  <div className="summary">
                    Kris Haamer {t(dict, "launch announcement")} {t(dict, "at the portal")} {" "}
                    <a href="http://www.redeangola.info/crowdfunding-para-filme-sobre-violencia-domestica/">Rede Angola</a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Feed */}
          </div>
        </div>
      </div>
    </div>
  );
}
