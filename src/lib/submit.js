import { CONFIG } from "../config";

// Every form on the site posts here. Submissions go to formsubmit.co, which emails
// them to CONFIG.formEmail. No server or API key. The first submission to a new
// address triggers a one-time activation email to that inbox: click Activate once and
// every submission after that lands as a table, with the customer's email as reply-to.
export async function submitLead(subject, payload) {
  const res = await fetch(`https://formsubmit.co/ajax/${CONFIG.formEmail}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: subject,
      _template: "table",
      _captcha: "false",
      ...(CONFIG.formCc ? { _cc: CONFIG.formCc } : {}),
      ...payload,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.success === "false" || data.success === false) {
    throw new Error(data.message || "Form submission failed");
  }
}

export const SERVICE_OPTIONS = [
  { value: "Domestic Cleaning", label: "Domestic cleaning", key: "domestic" },
  {
    value: "Commercial Cleaning",
    label: "Commercial cleaning",
    key: "commercial",
  },
  {
    value: "Industrial Cleaning",
    label: "Industrial cleaning",
    key: "industrial",
  },
  {
    value: "End of Tenancy / Property Turnover",
    label: "End of tenancy / property turnover",
    key: "end-of-tenancy",
  },
  { value: "Other", label: "Other", key: "other" },
];
