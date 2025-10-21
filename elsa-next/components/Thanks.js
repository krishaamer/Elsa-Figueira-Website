import { t } from "@/lib/i18n";

export default function Thanks({ dict }) {
  return (
    <div className="ui basic very padded aligned segment">
      <h1 className="ui aligned sectionheader">
        {t(dict, "supporters")} <i className="circular users pink icon link" />
      </h1>
      <div className="container">
        <div className="ui padded segment">
          <h4 className="ui aligned">
            <i className="yellow star icon"></i> Cyrus Farivar <i className="yellow star icon"></i> Sofia Pontes
            <i className="yellow star icon"></i> Antonieta Almeida <i className="yellow star icon"></i> Hamilton Cruz
            <i className="yellow star icon"></i> Yves Peladeau <i className="yellow star icon"></i> Wannes Debusschere
            <i className="yellow star icon"></i> Albano Baptista <i className="yellow star icon"></i> Vladimyr Vera Cruz
            <i className="yellow star icon"></i> Carla Neves <i className="yellow star icon"></i> Oliver Wihler
            <i className="yellow star icon"></i> Guido Kundla <i className="yellow star icon"></i> Liivi Haamer
            <i className="yellow star icon"></i> Urmo Rae <i className="yellow star icon"></i> Maise Bragança
            <i className="yellow star icon"></i> Rui Holger Rodrigues <i className="yellow star icon"></i> Veljo Haamer
            <i className="yellow star icon"></i> Hanno Haamer <i className="yellow star icon"></i> Virna Neves
            <i className="yellow star icon"></i> Esterline Género <i className="yellow star icon"></i> Hélder Lima
            <i className="yellow star icon"></i> Samuel António <i className="yellow star icon"></i> Neusa Trovoada
            <i className="yellow star icon"></i> Osana Leal <i className="yellow star icon"></i> Nig D&apos;Alva
            <i className="yellow star icon"></i> Hoji Fortuna <i className="yellow star icon"></i> Joost De Raeymaeker
            <i className="yellow star icon"></i> Eduardo Cunha <i className="yellow star icon"></i> Eva Ladva
            <i className="yellow star icon"></i> Dagmar Mäe <i className="yellow star icon"></i> Pedro Canavilhas
            <i className="yellow star icon"></i> Osana Leal <i className="yellow star icon"></i> Kaisa Masso
          </h4>
        </div>
      </div>
    </div>
  );
}

