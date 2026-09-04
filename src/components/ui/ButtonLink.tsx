import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  tone?: "green" | "orange" | "outline";
  compact?: boolean;
};

export function ButtonLink({ children, className = "", tone = "green", compact = false, ...props }: ButtonLinkProps) {
  const toneClass = tone === "green" ? "" : `ui-button--${tone}`;
  const compactClass = compact ? "ui-button--compact" : "";
  return <a className={`ui-button ${toneClass} ${compactClass} ${className}`.trim()} {...props}>{children}</a>;
}
