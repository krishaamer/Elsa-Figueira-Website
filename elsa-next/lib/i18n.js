import en from "@/locales/en.i18n.json" assert { type: "json" };
import et from "@/locales/et.i18n.json" assert { type: "json" };
import pt from "@/locales/pt.i18n.json" assert { type: "json" };

const DICTS = { en, et, pt };

export function getDict(lang = "en") {
  return DICTS[lang] || DICTS.en;
}

export function t(dict, key) {
  return dict?.[key] || key;
}

