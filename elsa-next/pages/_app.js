import "@/styles/globals.css";
import "@/styles/elsa.css";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const tooltip = document.createElement("div");
    tooltip.className = "elsa-tooltip";
    document.body.appendChild(tooltip);

    let currentEl = null;

    function showTooltip(e) {
      const el = e.currentTarget;
      const content = el.getAttribute("data-content");
      if (!content) return;
      currentEl = el;
      tooltip.textContent = content;
      tooltip.style.display = "block";
      const rect = el.getBoundingClientRect();
      const ttRect = tooltip.getBoundingClientRect();
      const top = rect.top + window.scrollY - ttRect.height - 8;
      const left = rect.left + window.scrollX + rect.width / 2 - ttRect.width / 2;
      tooltip.style.top = `${Math.max(0, top)}px`;
      tooltip.style.left = `${Math.max(0, left)}px`;
    }

    function hideTooltip() {
      tooltip.style.display = "none";
      currentEl = null;
    }

    function initTooltips() {
      document.querySelectorAll("[data-content]").forEach((el) => {
        if (!el.__elsaTooltipBound) {
          el.setAttribute("title", el.getAttribute("data-content") || "");
          el.addEventListener("mouseenter", showTooltip);
          el.addEventListener("mouseleave", hideTooltip);
          el.__elsaTooltipBound = true;
        }
      });
    }

    initTooltips();
    const handleRoute = () => setTimeout(initTooltips, 0);
    router.events.on("routeChangeComplete", handleRoute);
    return () => {
      router.events.off("routeChangeComplete", handleRoute);
      tooltip.remove();
      document.querySelectorAll("[data-content]").forEach((el) => {
        if (el.__elsaTooltipBound) {
          el.removeEventListener("mouseenter", showTooltip);
          el.removeEventListener("mouseleave", hideTooltip);
          delete el.__elsaTooltipBound;
        }
      });
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Elsa Figueira</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Elsa Figueira campaign against domestic violence" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
