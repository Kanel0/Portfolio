import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ref, set } from "firebase/database";
import { database } from "../../lib/firebase";
import { useAuth } from "../../lib/auth-context";
import { useSiteContent } from "../../lib/content-context";
import { defaultContent } from "../../lib/defaultContent";

const tabs = [
  { id: "hero", label: "Hero" },
  { id: "profile", label: "Profile" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "capabilities", label: "Capabilities" },
  { id: "stack", label: "Stack" },
  { id: "background", label: "Background" },
];

const clone = (value) => JSON.parse(JSON.stringify(value));

function Field({ label, value = "", onChange, textarea = false, type = "text", hint }) {
  const id = `field-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {textarea ? (
        <textarea
          id={id}
          rows={3}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
      {hint && <p className="field-hint">{hint}</p>}
    </div>
  );
}

function Lines({ label, value = [], onChange, hint }) {
  return (
    <Field
      label={label}
      value={value.join("\n")}
      onChange={(text) => onChange(text.split("\n"))}
      textarea
      hint={hint}
    />
  );
}

function CommaList({ label, value = [], onChange, hint }) {
  return (
    <Field
      label={label}
      value={value.join(", ")}
      onChange={(text) =>
        onChange(
          text
            .split(",")
            .map((part) => part.trim())
        )
      }
      hint={hint}
    />
  );
}

function Panel({ title, description, children, onRemove }) {
  return (
    <section className="admin-panel">
      <div className="admin-panel-head">
        <h3>{title}</h3>
        {onRemove && (
          <button type="button" className="admin-remove" onClick={onRemove}>
            Remove
          </button>
        )}
      </div>
      {description && <p className="admin-panel-note">{description}</p>}
      <div className="admin-grid">{children}</div>
    </section>
  );
}

export default function Dashboard() {
  const { user, logout } = useAuth();
  const { content, status } = useSiteContent();
  const [tab, setTab] = useState("hero");
  const [draft, setDraft] = useState(() => clone(content));
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");
  const dirty = useRef(false);

  useEffect(() => {
    if (!dirty.current && status !== "loading") setDraft(clone(content));
  }, [content, status]);

  const edit = (next) => {
    dirty.current = true;
    setState("idle");
    setDraft(next);
  };

  const update = (section, value) => edit({ ...draft, [section]: value });

  const updateProfile = (key, value) =>
    update("profile", { ...draft.profile, [key]: value });

  const updateItem = (section, index, patch) =>
    update(
      section,
      draft[section].map((item, i) => (i === index ? { ...item, ...patch } : item))
    );

  const addItem = (section, item) => update(section, [...draft[section], item]);

  const removeItem = (section, index) =>
    update(
      section,
      draft[section].filter((_, i) => i !== index)
    );

  const clean = () => {
    const next = clone(draft);
    next.hero.headline = next.hero.headline.map((line) => line.trim()).filter(Boolean);
    next.work = next.work.map((item) => ({
      ...item,
      stack: item.stack.map((tech) => tech.trim()).filter(Boolean),
      links: item.links
        .map((link) => ({ label: link.label.trim(), href: link.href.trim() }))
        .filter((link) => link.href),
    }));
    next.experience = next.experience.map((item) => ({
      ...item,
      points: item.points.map((point) => point.trim()).filter(Boolean),
    }));
    next.capabilities = next.capabilities.map((item) => ({
      ...item,
      items: item.items.map((entry) => entry.trim()).filter(Boolean),
    }));
    ["education", "certifications", "community"].forEach((section) => {
      next[section] = next[section].filter((item) => item.title.trim());
    });
    return next;
  };

  const save = async () => {
    setError("");
    if (!draft.profile.email.trim()) {
      setError("Profile email is required.");
      return;
    }
    setState("saving");
    try {
      await set(ref(database, "content"), clean());
      dirty.current = false;
      setState("saved");
      setTimeout(() => setState("idle"), 2500);
    } catch (err) {
      setState("error");
      setError(
        err?.code === "PERMISSION_DENIED" || err?.message?.includes("permission")
          ? "Firebase refused the write. Check the Realtime Database rules."
          : "Save failed. Check your connection and try again."
      );
    }
  };

  const resetToDefaults = () => {
    if (!window.confirm("Replace the form with the built-in content? Nothing is saved until you press Save.")) return;
    dirty.current = true;
    setDraft(clone(defaultContent));
  };

  return (
    <div className="admin">
      <header className="admin-bar">
        <div className="admin-bar-inner">
          <Link className="monogram" to="/">
            <span className="monogram-mark" aria-hidden="true">
              JD
            </span>
            <span>Admin</span>
          </Link>

          <div className="admin-bar-actions">
            <a className="admin-link" href="/" target="_blank" rel="noopener noreferrer">
              View site
            </a>
            <button type="button" className="admin-link" onClick={logout}>
              Sign out
            </button>
            <button
              type="button"
              className="btn btn-primary admin-save"
              onClick={save}
              disabled={state === "saving"}
            >
              {state === "saving" ? "Saving…" : "Save changes"}
            </button>
          </div>
        </div>
      </header>

      <div className="admin-shell">
        <nav className="admin-nav" aria-label="Content sections">
          {tabs.map((entry) => (
            <button
              key={entry.id}
              type="button"
              onClick={() => setTab(entry.id)}
              aria-current={tab === entry.id ? "true" : undefined}
            >
              {entry.label}
            </button>
          ))}
        </nav>

        <main className="admin-main">
          <div className="admin-head">
            <div>
              <h1>{tabs.find((entry) => entry.id === tab)?.label}</h1>
              <p>
                Signed in as {user?.email}. Content is stored in Realtime
                Database at <code>/content</code>.
              </p>
            </div>
            <span className={`admin-chip admin-chip-${status}`}>
              {status === "live" ? "Live" : status === "empty" ? "Not saved yet" : status === "loading" ? "Connecting" : "Local fallback"}
            </span>
          </div>

          {error && (
            <p className="form-error admin-error" role="alert">
              {error}
            </p>
          )}
          {state === "saved" && (
            <p className="admin-saved" role="status">
              Saved. The public site is updated.
            </p>
          )}

          {tab === "hero" && (
            <Panel title="Hero" description="The first screen. One sentence per headline line.">
              <div className="admin-span">
                <Lines
                  label="Headline lines"
                  value={draft.hero.headline}
                  onChange={(lines) => update("hero", { ...draft.hero, headline: lines })}
                  hint="Keep each line short enough to stay on one line."
                />
              </div>
              <div className="admin-span">
                <Field
                  label="Introduction"
                  value={draft.hero.lede}
                  onChange={(value) => update("hero", { ...draft.hero, lede: value })}
                  textarea
                />
              </div>
            </Panel>
          )}

          {tab === "profile" && (
            <Panel title="Profile" description="Used in the navigation, contact panel and footer.">
              <Field label="Display name" value={draft.profile.name} onChange={(v) => updateProfile("name", v)} />
              <Field label="Full name" value={draft.profile.fullName} onChange={(v) => updateProfile("fullName", v)} />
              <Field label="Role" value={draft.profile.role} onChange={(v) => updateProfile("role", v)} />
              <Field label="Availability" value={draft.profile.availability} onChange={(v) => updateProfile("availability", v)} />
              <Field label="Location" value={draft.profile.location} onChange={(v) => updateProfile("location", v)} />
              <Field label="Email" type="email" value={draft.profile.email} onChange={(v) => updateProfile("email", v)} />
              <Field label="Phone" value={draft.profile.phone} onChange={(v) => updateProfile("phone", v)} />
              <Field label="GitHub URL" value={draft.profile.github} onChange={(v) => updateProfile("github", v)} />
              <Field label="LinkedIn URL" value={draft.profile.linkedin} onChange={(v) => updateProfile("linkedin", v)} />
            </Panel>
          )}

          {tab === "work" && (
            <div className="admin-stack">
              {draft.work.map((item, index) => (
                <Panel
                  key={`work-${index}`}
                  title={item.title || `Project ${index + 1}`}
                  onRemove={() => removeItem("work", index)}
                >
                  <Field label="Kind" value={item.kind} onChange={(v) => updateItem("work", index, { kind: v })} />
                  <Field label="Title" value={item.title} onChange={(v) => updateItem("work", index, { title: v })} />
                  <div className="admin-span">
                    <Field label="Description" value={item.description} onChange={(v) => updateItem("work", index, { description: v })} textarea />
                  </div>
                  <div className="admin-span">
                    <CommaList label="Stack" value={item.stack} onChange={(v) => updateItem("work", index, { stack: v })} hint="Separate entries with commas." />
                  </div>
                  <div className="admin-span">
                    <Field
                      label="Image URL"
                      value={item.image || ""}
                      onChange={(v) => updateItem("work", index, { image: v })}
                      hint="Leave empty for no preview image."
                    />
                  </div>
                  {item.links.map((link, linkIndex) => (
                    <div className="admin-link-row" key={`link-${index}-${linkIndex}`}>
                      <Field
                        label="Link label"
                        value={link.label}
                        onChange={(v) =>
                          updateItem("work", index, {
                            links: item.links.map((l, i) => (i === linkIndex ? { ...l, label: v } : l)),
                          })
                        }
                      />
                      <Field
                        label="Link URL"
                        value={link.href}
                        onChange={(v) =>
                          updateItem("work", index, {
                            links: item.links.map((l, i) => (i === linkIndex ? { ...l, href: v } : l)),
                          })
                        }
                      />
                    </div>
                  ))}
                  <div className="admin-span">
                    <button
                      type="button"
                      className="admin-add"
                      onClick={() =>
                        updateItem("work", index, { links: [...item.links, { label: "", href: "" }] })
                      }
                    >
                      + Add a link
                    </button>
                  </div>
                </Panel>
              ))}
              <button
                type="button"
                className="admin-add admin-add-block"
                onClick={() =>
                  addItem("work", {
                    kind: "",
                    title: "New project",
                    description: "",
                    stack: [],
                    links: [],
                    image: "",
                  })
                }
              >
                + Add a project
              </button>
            </div>
          )}

          {tab === "experience" && (
            <div className="admin-stack">
              {draft.experience.map((item, index) => (
                <Panel
                  key={`exp-${index}`}
                  title={`${item.role || "Role"} — ${item.company || "Company"}`}
                  onRemove={() => removeItem("experience", index)}
                >
                  <Field label="Period" value={item.period} onChange={(v) => updateItem("experience", index, { period: v })} />
                  <Field label="Role" value={item.role} onChange={(v) => updateItem("experience", index, { role: v })} />
                  <Field label="Company" value={item.company} onChange={(v) => updateItem("experience", index, { company: v })} />
                  <Field label="Place / contract" value={item.place} onChange={(v) => updateItem("experience", index, { place: v })} />
                  <div className="admin-span">
                    <Field label="Summary" value={item.summary} onChange={(v) => updateItem("experience", index, { summary: v })} textarea />
                  </div>
                  <div className="admin-span">
                    <Lines label="Details" value={item.points} onChange={(v) => updateItem("experience", index, { points: v })} hint="One detail per line." />
                  </div>
                </Panel>
              ))}
              <button
                type="button"
                className="admin-add admin-add-block"
                onClick={() =>
                  addItem("experience", {
                    period: "",
                    role: "New role",
                    company: "",
                    place: "",
                    summary: "",
                    points: [],
                  })
                }
              >
                + Add a role
              </button>
            </div>
          )}

          {tab === "capabilities" && (
            <div className="admin-stack">
              {draft.capabilities.map((item, index) => (
                <Panel key={`cap-${index}`} title={item.title} onRemove={() => removeItem("capabilities", index)}>
                  <Field label="Title" value={item.title} onChange={(v) => updateItem("capabilities", index, { title: v })} />
                  <div className="admin-span">
                    <Field label="Description" value={item.description} onChange={(v) => updateItem("capabilities", index, { description: v })} textarea />
                  </div>
                  <div className="admin-span">
                    <CommaList label="Technologies" value={item.items} onChange={(v) => updateItem("capabilities", index, { items: v })} />
                  </div>
                </Panel>
              ))}
              <button
                type="button"
                className="admin-add admin-add-block"
                onClick={() => addItem("capabilities", { title: "New capability", description: "", items: [] })}
              >
                + Add a capability
              </button>
            </div>
          )}

          {tab === "stack" && (
            <div className="admin-stack">
              {draft.stack.map((group, index) => (
                <Panel key={`stack-${index}`} title={group.label || `Group ${index + 1}`} onRemove={() => removeItem("stack", index)}>
                  <Field label="Label" value={group.label} onChange={(v) => updateItem("stack", index, { label: v })} />
                  <Field label="Items" value={group.items} onChange={(v) => updateItem("stack", index, { items: v })} />
                </Panel>
              ))}
              <button
                type="button"
                className="admin-add admin-add-block"
                onClick={() => addItem("stack", { label: "New group", items: "" })}
              >
                + Add a group
              </button>
            </div>
          )}

          {tab === "background" && (
            <div className="admin-stack">
              {[
                { id: "education", label: "Education" },
                { id: "certifications", label: "Certifications" },
                { id: "community", label: "Community" },
              ].map((section) => (
                <Panel key={section.id} title={section.label}>
                  {draft[section.id].map((item, index) => (
                    <div className="admin-link-row" key={`${section.id}-${index}`}>
                      <Field
                        label={`${section.label} entry`}
                        value={item.title}
                        onChange={(v) => updateItem(section.id, index, { title: v })}
                      />
                      <Field
                        label="Details"
                        value={item.meta}
                        onChange={(v) => updateItem(section.id, index, { meta: v })}
                      />
                      <div className="admin-row-action">
                        <button type="button" className="admin-remove" onClick={() => removeItem(section.id, index)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="admin-span">
                    <button
                      type="button"
                      className="admin-add"
                      onClick={() => addItem(section.id, { title: "", meta: "" })}
                    >
                      + Add an entry
                    </button>
                  </div>
                </Panel>
              ))}
            </div>
          )}

          <div className="admin-footer">
            <button type="button" className="admin-reset" onClick={resetToDefaults}>
              Reset form to built-in content
            </button>
            <p>
              Writes replace the whole <code>/content</code> node. Database rules
              must allow authenticated writes.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
