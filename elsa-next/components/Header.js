import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Header({ lang = "en" }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const label = lang === "et" ? "Eesti" : lang === "pt" ? "Português" : "English";

  useEffect(() => {
    const onDocClick = (e) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const changeLang = (value) => {
    setOpen(false);
    if (value === "et") router.push("/peata-vagivald");
    else if (value === "pt") router.push("/stopviolencia");
    else router.push("/stopviolence");
  };

  return (
    <div className="ui basic very padded center aligned segment" style={{ paddingTop: 5, paddingBottom: 0 }}>
      <div className="ui large secondary menu">
        <div className="menu right">
          <div className="item" ref={ref}>
            <div
              className={`ui language floating dropdown link item ${open ? "active visible" : ""}`}
              onClick={() => setOpen((v) => !v)}
              role="button"
              aria-haspopup="listbox"
              aria-expanded={open}
            >
              <i className="world icon"></i>
              <div className="text">{label}</div>
              <div className={`menu ${open ? "transition visible" : "hidden"}`} role="listbox">
                <div
                  className="item"
                  data-value="et"
                  onClick={() => changeLang("et")}
                  role="option"
                  aria-selected={lang === "et"}
                >
                  Eesti
                </div>
                <div
                  className="item"
                  data-value="en"
                  onClick={() => changeLang("en")}
                  role="option"
                  aria-selected={lang === "en"}
                >
                  English
                </div>
                <div
                  className="item"
                  data-value="pt"
                  onClick={() => changeLang("pt")}
                  role="option"
                  aria-selected={lang === "pt"}
                >
                  Português
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
