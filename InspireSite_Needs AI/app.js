const appContent = {
  about:
    "This AI assistant serves as a reference tool for healthcare providers caring for patients and newborns affected by substance use disorder. Use it to quickly recall key concepts, pain management algorithms, patient-centered communication strategies, NOWS interventions, and Utah-specific guidance from Project INSPIRE content.",
  hero:
    "Ask questions about substance use disorder care principles, pain management approaches, NOWS interventions, Utah laws and policies, or specific clinical scenarios. The experience is structured to keep the chat area focused while placing supporting resources one tap away.",
  privacy:
    "Use this tool only within approved University of Utah workflows and secure environments. Do not enter patient identifiers or protected health information unless the deployed version has been reviewed and approved for that use by the appropriate University of Utah privacy, security, and compliance teams.",
  features: [
    {
      title: "Screening & Assessment",
      description:
        "Refresh screening steps, assessment approaches, clinical observation points, and documentation considerations for substance use disorder care.",
      icon: "clipboard",
    },
    {
      title: "Pain Management",
      description:
        "Reference opioid-sparing approaches, labor support options, adjunct pain management strategies, and postpartum considerations.",
      icon: "pulse",
    },
    {
      title: "NOWS & Newborn Care",
      description:
        "Surface quick guidance related to Eat, Sleep, Console, newborn observation, and supportive interventions tied to Project INSPIRE content.",
      icon: "baby",
    },
    {
      title: "Communication & Reporting",
      description:
        "Review patient-centered language, clinical empathy, stigma reduction, documentation boundaries, and Utah reporting considerations.",
      icon: "chat",
    },
  ],
  prompts: [
    "What is the Eat, Sleep, Console assessment for NOWS?",
    "What is an opioid-sparing protocol for patients in labor with a history of SUD?",
    "How do I respond when a patient expresses fear or concern about DCFS involvement?",
    "What language should I avoid during sensitive examinations?",
    "How do I talk to patients about DCFS in a way that reduces fear and stigma?",
    "Under Utah law, what am I mandated to report regarding substance use in pregnancy?",
    "How do I document substance use history while respecting patient privacy?",
    "How can I address implicit bias and stigma within my team?",
    "What are the core skills of clinical empathy?",
    "What adjuncts for pain management are not opioids?",
    "What urine toxicology should I order for fentanyl?",
  ],
  resources: [
    {
      title: "Project INSPIRE Notes",
      subtitle: "Training-aligned notes, summaries, and quick references.",
      body:
        "Use this area to surface INSPIRE note titles, summary guidance, or direct links to approved quick-reference documents once the final list is confirmed.",
      bullets: [
        "Training notes by title",
        "Scenario-specific reminders",
        "Simulation-aligned quick references",
      ],
    },
    {
      title: "Utah Law & Reporting Guidance",
      subtitle: "Mandated reporting, policy reminders, and patient communication considerations.",
      body:
        "This resource area is intended for Utah-specific reporting guidance, documentation boundaries, and language providers can use when patients have concerns about child welfare involvement.",
      bullets: [
        "Mandated reporting overview",
        "Documentation boundaries",
        "Patient communication reminders",
      ],
    },
    {
      title: "Eat, Sleep, Console (ESC) Assessment",
      subtitle: "Support for NOWS observation and bedside decision-making.",
      body:
        "Provide a concise refresher on the ESC framework, what providers should observe, and when to escalate or connect to follow-up guidance.",
      bullets: [
        "Eat criteria",
        "Sleep criteria",
        "Console criteria and escalation",
      ],
    },
    {
      title: "Coping with Labor Algorithm",
      subtitle: "Non-opioid and supportive pain management pathways during labor.",
      body:
        "Use this section to anchor labor support guidance, including coping strategies, supportive interventions, and when to refer to related algorithms or protocols.",
      bullets: [
        "Supportive labor interventions",
        "Pain management adjuncts",
        "Related escalation or referral points",
      ],
    },
    {
      title: "Opioid-Sparing & Post-Cesarean Support",
      subtitle: "Postpartum and post-C/S protocol reminders.",
      body:
        "This quick-reference item can house opioid-sparing protocols, post-cesarean pain management options, and SuperRad binder content selected for the final experience.",
      bullets: [
        "Post-cesarean pain support",
        "Adjunct medication reminders",
        "Selected SuperRad binder references",
      ],
    },
  ],
  quickAccess: [
    {
      title: "FAQs",
      description:
        "Common provider questions can live here as a lightweight support layer outside the main assistant flow.",
    },
    {
      title: "INSPIRE Notes Access",
      description:
        "Use this card to link to approved note collections, file locations, or a document viewer once finalized.",
    },
    {
      title: "Formulas & Reference Items",
      description:
        "Reserve this area for formulas, dosing reminders, or other structured reference content that should stay one tap away.",
    },
  ],
};

const iconMap = {
  clipboard: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M9 4h6"></path>
      <path d="M9 2h6a2 2 0 0 1 2 2v2H7V4a2 2 0 0 1 2-2Z"></path>
      <path d="M7 6H6a2 2 0 0 0-2 2v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a2 2 0 0 0-2-2h-1"></path>
      <path d="M9 11h6"></path>
      <path d="M9 15h6"></path>
    </svg>
  `,
  pulse: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3 12h4l2.2-5 3.6 10 2.2-5H21"></path>
    </svg>
  `,
  baby: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="8.5" r="3.5"></circle>
      <path d="M8.5 18.5a3.5 3.5 0 1 1 7 0"></path>
      <path d="M6 18.5h12"></path>
    </svg>
  `,
  chat: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.8 8.8 0 0 1-3.4-.7L3 21l1.8-5.2a8.5 8.5 0 1 1 16.2-4.3Z"></path>
    </svg>
  `,
};

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function setStaticCopy() {
  document.getElementById("aboutCopy").textContent = appContent.about;
  document.getElementById("heroCopy").textContent = appContent.hero;
  document.getElementById("privacyCopy").textContent = appContent.privacy;
}

function renderFeatures() {
  const grid = document.getElementById("featureGrid");
  grid.innerHTML = appContent.features
    .map(
      (item) => `
        <article class="feature-card">
          <div class="feature-icon">${iconMap[item.icon] || ""}</div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
}

function renderPrompts() {
  const list = document.getElementById("promptList");
  list.innerHTML = appContent.prompts
    .map(
      (prompt) => `
        <button type="button" class="prompt-button" data-prompt="${escapeAttribute(prompt)}">${prompt}</button>
      `
    )
    .join("");
}

function renderResources(filterText = "") {
  const accordion = document.getElementById("resourceAccordion");
  const emptyState = document.getElementById("resourceEmptyState");
  const term = filterText.trim().toLowerCase();
  const filtered = appContent.resources.filter((item) => {
    if (!term) return true;
    const haystack = [item.title, item.subtitle, item.body, ...(item.bullets || [])].join(" ").toLowerCase();
    return haystack.includes(term);
  });

  accordion.innerHTML = filtered
    .map(
      (item, index) => `
        <article class="accordion-item">
          <button
            type="button"
            class="accordion-trigger"
            aria-expanded="false"
            aria-controls="resource-panel-${index}"
            id="resource-trigger-${index}"
          >
            <span class="accordion-copy">
              <span class="accordion-title">${item.title}</span>
              <span class="accordion-subtitle">${item.subtitle}</span>
            </span>
            <span class="accordion-icon" aria-hidden="true">+</span>
          </button>
          <div class="accordion-content" id="resource-panel-${index}" role="region" aria-labelledby="resource-trigger-${index}" hidden>
            <div class="accordion-content-inner">
              <div class="accordion-body">
                <p>${item.body}</p>
                <ul class="inline-list">
                  ${(item.bullets || []).map((bullet) => `<li>${bullet}</li>`).join("")}
                </ul>
              </div>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  emptyState.hidden = filtered.length !== 0;
}

function renderQuickAccess() {
  const grid = document.getElementById("quickAccess");
  grid.innerHTML = appContent.quickAccess
    .map(
      (item) => `
        <article class="quick-card">
          <h4>${item.title}</h4>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
}

function activateView(viewName) {
  document.querySelectorAll("[data-view-panel]").forEach((panel) => {
    const isActive = panel.dataset.viewPanel === viewName;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });

  document.querySelectorAll("[data-view]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === viewName);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateComposerState() {
  const input = document.getElementById("assistantInput");
  const status = document.getElementById("composerStatus");
  const sendButton = document.getElementById("sendButton");
  const count = document.getElementById("characterCount");
  const value = input.value.trim();

  count.textContent = `${input.value.length} character${input.value.length === 1 ? "" : "s"}`;
  sendButton.disabled = value.length === 0;
  sendButton.textContent = value.length === 0 ? "AI Integration Pending" : "Ready for Integration";
  status.textContent =
    value.length === 0
      ? "Select a prompt below to load it here."
      : "Question loaded. In production, this is where the assistant submit action would fire.";
}

function setupComposer() {
  const input = document.getElementById("assistantInput");
  const promptList = document.getElementById("promptList");
  const clearButton = document.getElementById("clearInputButton");
  const form = document.getElementById("assistantComposer");

  promptList.addEventListener("click", (event) => {
    const button = event.target.closest(".prompt-button");
    if (!button) return;
    input.value = button.dataset.prompt || "";
    activateView("ask");
    input.focus();
    updateComposerState();
  });

  clearButton.addEventListener("click", () => {
    input.value = "";
    updateComposerState();
    input.focus();
  });

  input.addEventListener("input", updateComposerState);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    updateComposerState();
  });

  updateComposerState();
}

function setupAccordion() {
  document.getElementById("resourceAccordion").addEventListener("click", (event) => {
    const trigger = event.target.closest(".accordion-trigger");
    if (!trigger) return;

    const accordion = document.getElementById("resourceAccordion");
    const triggers = accordion.querySelectorAll(".accordion-trigger");
    const isExpanded = trigger.getAttribute("aria-expanded") === "true";

    triggers.forEach((button) => {
      button.setAttribute("aria-expanded", "false");
      const panelId = button.getAttribute("aria-controls");
      const panel = document.getElementById(panelId);
      if (panel) panel.hidden = true;
    });

    if (!isExpanded) {
      trigger.setAttribute("aria-expanded", "true");
      const panel = document.getElementById(trigger.getAttribute("aria-controls"));
      if (panel) panel.hidden = false;
    }
  });
}

function setupResourceSearch() {
  const input = document.getElementById("resourceSearch");
  input.addEventListener("input", () => renderResources(input.value));
}

function setupNavigation() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => activateView(button.dataset.view));
  });

  document.querySelectorAll("[data-jump-view]").forEach((button) => {
    button.addEventListener("click", () => activateView(button.dataset.jumpView));
  });
}

function setupLogoFallback() {
  document.querySelectorAll(".logo-image").forEach((img) => {
    img.addEventListener("error", () => {
      img.classList.add("is-hidden");
    });
  });
}

function init() {
  setStaticCopy();
  renderFeatures();
  renderPrompts();
  renderResources();
  renderQuickAccess();
  setupNavigation();
  setupComposer();
  setupAccordion();
  setupResourceSearch();
  setupLogoFallback();
}

document.addEventListener("DOMContentLoaded", init);
