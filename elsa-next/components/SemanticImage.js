/* eslint-disable @next/next/no-img-element */
export default function SemanticImage({ src, alt = "", className = "", priority = false, ...props }) {
  // Use a plain <img> to precisely mirror Semantic UI sizing semantics
  // and allow arbitrary data-* attributes for tooltips.
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      {...props}
    />
  );
}
