/**
 * app.js — INSPIRE Clinical AI Assistant
 *
 * All app content lives in `appContent` below. To update copy, prompts,
 * resources, or quick-access items, edit that object — no other changes needed.
 *
 * Navigation convention:
 *   data-view="x"        → tab button that activates panel "x"
 *   data-view-panel="x"  → the content panel for view "x"
 *   data-jump-view="x"   → any element that navigates to panel "x" (e.g. CTAs)
 *
 * Render functions inject HTML into DOM containers on init and on search.
 * Event setup functions (setup*) wire up listeners after render.
 */

const appContent = {
  privacy:
    "Use this tool only within approved University of Utah workflows and secure environments. Do not enter patient identifiers or protected health information unless the deployed version has been reviewed and approved for that use by the appropriate University of Utah privacy, security, and compliance teams.",
  features: [
    { title: "Screening & Assessment", description: "Screening steps, assessment approaches, and documentation considerations for SUD care.", icon: "clipboard" },
    { title: "Pain Management",        description: "Opioid-sparing approaches, labor support, adjunct strategies, and postpartum considerations.", icon: "pulse" },
    { title: "NOWS & Newborn Care",    description: "Eat, Sleep, Console, newborn observation, and supportive INSPIRE-aligned interventions.", icon: "baby" },
    { title: "Communication",          description: "Patient-centered language, empathy, stigma reduction, and Utah reporting considerations.", icon: "chat" },
  ],
  prompts: [
    { label: "ESC / NOWS assessment",    text: "What is the Eat, Sleep, Console assessment for NOWS?" },
    { label: "Opioid-sparing protocol",  text: "What is an opioid-sparing protocol for patients in labor with a history of SUD?" },
    { label: "DCFS fear response",        text: "How do I respond when a patient expresses fear about DCFS involvement?" },
    { label: "Sensitive exam language",   text: "What language should I avoid during sensitive examinations?" },
    { label: "Talking about DCFS",        text: "How do I talk to patients about DCFS in a way that reduces fear and stigma?" },
    { label: "Utah reporting law",         text: "Under Utah law, what am I mandated to report regarding substance use in pregnancy?" },
    { label: "Documenting with privacy",  text: "How do I document substance use history while respecting patient privacy?" },
    { label: "Team bias & stigma",         text: "How can I address implicit bias and stigma within my team?" },
    { label: "Clinical empathy skills",   text: "What are the core skills of clinical empathy?" },
    { label: "Non-opioid pain adjuncts",  text: "What adjuncts for pain management are not opioids?" },
    { label: "Fentanyl tox screen",       text: "What urine toxicology should I order for fentanyl?" },
  ],
  resources: [
    {
      title: "Project INSPIRE Notes",
      subtitle: "Training-aligned notes, summaries, and quick references",
      icon: "notes",
    },
    {
      title: "Utah Law & Reporting Guidance",
      subtitle: "Mandated reporting, policy reminders, documentation boundaries",
      icon: "scale",
    },
    {
      title: "Eat, Sleep, Console (ESC)",
      subtitle: "NOWS observation and bedside decision-making",
      icon: "baby",
    },
    {
      title: "Coping with Labor Algorithm",
      subtitle: "Non-opioid and supportive pain management pathways",
      icon: "pulse",
    },
    {
      title: "Opioid-Sparing & Post-Cesarean",
      subtitle: "Postpartum and post-C/S protocol reminders",
      icon: "pill",
    },
  ],
  quickAccess: [
    {
      title: "FAQs",
      subtitle: "Common provider questions outside the main assistant flow",
      icon: "help",
    },
    {
      title: "INSPIRE Notes Access",
      subtitle: "Link to approved note collections and document viewer",
      icon: "file",
    },
    {
      title: "Formulas & Reference Items",
      subtitle: "Dosing reminders and structured reference content",
      icon: "calculator",
    },
  ],
};

/**
 * iconMap — SVG strings keyed by icon name.
 * Referenced by appContent entries via their `icon` field.
 * All SVGs use stroke="currentColor" so color is controlled by CSS.
 */
const iconMap = {
  clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 4h6"/><path d="M9 2h6a2 2 0 0 1 2 2v2H7V4a2 2 0 0 1 2-2Z"/><path d="M7 6H6a2 2 0 0 0-2 2v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a2 2 0 0 0-2-2h-1"/><path d="M9 11h6"/><path d="M9 15h6"/></svg>`,
  pulse: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12h4l2.2-5 3.6 10 2.2-5H21"/></svg>`,
  baby: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8.5" r="3.5"/><path d="M8.5 18.5a3.5 3.5 0 1 1 7 0"/><path d="M6 18.5h12"/></svg>`,
  chat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.8 8.8 0 0 1-3.4-.7L3 21l1.8-5.2a8.5 8.5 0 1 1 16.2-4.3Z"/></svg>`,
  notes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  scale: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v18"/><path d="m8 6-4 6h8L8 6z"/><path d="m16 6 4 6h-8l4-6z"/><path d="M8 21h8"/></svg>`,
  pill: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>`,
  help: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>`,
  file: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  calculator: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="10" x2="8" y2="10"/><line x1="11" y1="14" x2="8" y2="14"/><line x1="16" y1="14" x2="13" y2="14"/><line x1="11" y1="18" x2="8" y2="18"/><line x1="16" y1="18" x2="13" y2="18"/></svg>`,
};

/** Shared chevron used in every list row to indicate a tappable item. */
const chevronSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>`;

function renderFeatures() {
  document.getElementById("featureGrid").innerHTML = appContent.features.map(item => `
    <article class="feature-card">
      <div class="feature-icon">${iconMap[item.icon] || ""}</div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `).join("");
}

function renderPrompts() {
  document.getElementById("promptList").innerHTML = appContent.prompts.map(p => `
    <button type="button" class="chip-btn" data-prompt="${p.text.replace(/"/g, "&quot;")}">${p.label}</button>
  `).join("");
}

function renderResources(filterText = "") {
  const term = filterText.trim().toLowerCase();
  const filtered = appContent.resources.filter(item =>
    !term || [item.title, item.subtitle].join(" ").toLowerCase().includes(term)
  );
  document.getElementById("resourceList").innerHTML = filtered.map(item => `
    <button class="list-row" type="button">
      <span class="list-row__icon">${iconMap[item.icon] || ""}</span>
      <span class="list-row__copy">
        <span class="list-row__title">${item.title}</span>
        <span class="list-row__subtitle">${item.subtitle}</span>
      </span>
      <span class="list-row__chevron">${chevronSVG}</span>
    </button>
  `).join("");
  document.getElementById("resourceEmptyState").hidden = filtered.length !== 0;
}

function renderQuickAccess() {
  document.getElementById("quickAccess").innerHTML = appContent.quickAccess.map(item => `
    <button class="list-row" type="button">
      <span class="list-row__icon">${iconMap[item.icon] || ""}</span>
      <span class="list-row__copy">
        <span class="list-row__title">${item.title}</span>
        <span class="list-row__subtitle">${item.subtitle}</span>
      </span>
      <span class="list-row__chevron">${chevronSVG}</span>
    </button>
  `).join("");
}

function activateView(viewName) {
  document.querySelectorAll("[data-view-panel]").forEach(panel => {
    const active = panel.dataset.viewPanel === viewName;
    panel.hidden = !active;
  });
  document.querySelectorAll("[data-view]").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.view === viewName);
  });
}

function updateComposerState() {
  const input  = document.getElementById("assistantInput");
  const send   = document.getElementById("sendButton");
  const count  = document.getElementById("characterCount");
  const val    = input.value.trim();
  count.textContent = `${input.value.length} chars`;
  send.disabled = val.length === 0;
}

function setupComposer() {
  const input = document.getElementById("assistantInput");
  const form  = document.getElementById("assistantComposer");

  // Load a prompt chip's full question text into the composer and switch to Ask view
  document.getElementById("promptList").addEventListener("click", e => {
    const btn = e.target.closest(".chip-btn");
    if (!btn) return;
    input.value = btn.dataset.prompt || "";
    activateView("ask");
    input.focus();
    updateComposerState();
  });

  input.addEventListener("input", updateComposerState);
  form.addEventListener("submit", e => { e.preventDefault(); updateComposerState(); });
  updateComposerState();
}

function setupNavigation() {
  document.querySelectorAll("[data-view]").forEach(btn => {
    btn.addEventListener("click", () => activateView(btn.dataset.view));
  });
  document.querySelectorAll("[data-jump-view]").forEach(el => {
    const go = () => activateView(el.dataset.jumpView);
    el.addEventListener("click", go);
    if (el.tagName !== "BUTTON") el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") go(); });
  });
}

function setupResourceSearch() {
  const input = document.getElementById("resourceSearch");
  input.addEventListener("input", () => renderResources(input.value));
}

function setupLogoFallback() {
  document.querySelectorAll(".logo-image").forEach(img => {
    img.addEventListener("error", () => img.classList.add("is-hidden"));
  });
}

function init() {
  document.getElementById("privacyCopy").textContent = appContent.privacy;
  renderFeatures();
  renderPrompts();
  renderResources();
  renderQuickAccess();
  setupNavigation();
  setupComposer();
  setupResourceSearch();
  setupLogoFallback();
  // Ensure home is the active visible panel on load
  activateView("home");
}

document.addEventListener("DOMContentLoaded", init);
