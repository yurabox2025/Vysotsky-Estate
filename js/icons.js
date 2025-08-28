export const icons = {
  doc: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h7l4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M14 3v5h5"/></svg>',
  clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  office: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="3" width="8" height="18" rx="1"/><rect x="14" y="8" width="6" height="13" rx="1"/><path d="M8 7h0M8 11h0M8 15h0M17 12h0M17 16h0"/></svg>',
  team: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M3 20c0-3 3-5 5-5s5 2 5 5"/><path d="M11 20c0-3 3-5 5-5s5 2 5 5"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="3"/></svg>',
  bulb: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12c1 1 1 2 1 3h6c0-1 0-2 1-3a7 7 0 0 0-4-12z"/></svg>',
  shake: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12l3-3a2 2 0 0 1 3 3l-6 6-3-3-4 4"/></svg>',
  chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>',
  target: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/></svg>',
  gift: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12v8H4v-8M2 8h20v4H2z"/><path d="M12 8v12"/><path d="M12 8c-1.5 0-4-1-4-3s2.5-2 4 1c1.5-3 4-2 4 0s-2.5 2-4 2z"/></svg>',
  book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z"/><path d="M4 15h16"/></svg>',
  person: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="M13 5l7 7-7 7"/></svg>'
};
export const icon = (name) => icons[name] || icons.doc;
