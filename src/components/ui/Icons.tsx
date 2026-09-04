type IconProps = { className?: string };

export function CartIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M3 5h3l3.2 14.2h14.6l3-10.2H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="25" r="2" stroke="currentColor" strokeWidth="1.8"/><circle cx="23" cy="25" r="2" stroke="currentColor" strokeWidth="1.8"/></svg>;
}

export function SearchIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="2"/><path d="m21 21 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>;
}

export function GridIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="6" y="6" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="19" y="6" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="6" y="19" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="19" y="19" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/></svg>;
}

export function CloseIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>;
}
