import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import ContactModal from "@/components/ContactModal";

export default function Layout({ lang = "en", children }) {
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handler = () => setContactOpen(true);
    window.addEventListener("open-contact", handler);
    return () => window.removeEventListener("open-contact", handler);
  }, []);

  return (
    <>
      <Header lang={lang} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      {children}
    </>
  );
}
