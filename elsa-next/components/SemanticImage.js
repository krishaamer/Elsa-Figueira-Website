import Image from "next/image";

export default function SemanticImage({ src, alt = "", className = "", priority = false }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      className={className}
      style={{ width: "100%", height: "auto" }}
      priority={priority}
      unoptimized
    />
  );
}

