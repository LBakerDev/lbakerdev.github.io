import { useEffect, useId, useRef, useState } from 'react';

interface Props {
  links: ReadonlyArray<{ label: string; href: string }>;
  resumeUrl: string;
}

export default function MobileNav({ links, resumeUrl }: Props) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="menu-button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          {open ? <path d="M4 4l10 10M14 4L4 14" /> : <path d="M2 5h14M2 9h14M2 13h14" />}
        </svg>
      </button>

      <nav id={menuId} aria-label="Primary" className="menu-panel" hidden={!open}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <a className="btn btn-dark" href={resumeUrl} onClick={close} data-goatcounter-click="resume-mobile-menu">
          Résumé (PDF)
        </a>
      </nav>

      <style>{`
        .menu-button {
          width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid var(--color-line-strong);
          border-radius: var(--radius-pill);
          background: transparent; color: var(--color-ink);
          cursor: pointer;
        }
        .menu-panel {
          position: absolute; left: 0; right: 0; top: 64px;
          display: flex; flex-direction: column; gap: 4px;
          padding: 12px var(--gutter) 24px;
          background: var(--color-bg);
          border-bottom: 1px solid var(--color-line);
        }
        .menu-panel[hidden] { display: none; }
        .menu-panel a:not(.btn) {
          padding: 14px 0; font-size: 1.125rem;
          color: var(--color-ink); text-decoration: none;
          border-bottom: 1px solid var(--color-line);
        }
        .menu-panel .btn { margin-top: 16px; }
      `}</style>
    </>
  );
}
