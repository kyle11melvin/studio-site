import { projectForm, site } from "@/content/site";

// The main call to action (Kyle, 2026-10-17): a "what are you looking for" form with ideas,
// examples and a wishlist, sent to Kyle's email so he can reply with a quote. No prices on
// the site. A plain HTML form with no JavaScript, so the page stays static: it posts to a
// hosted form service (site.formEndpoint, e.g. Formspree) that emails each submission. Until
// that endpoint is set, it falls back to opening the visitor's mail app addressed to
// site.email.
const field =
  "w-full rounded-2xl border border-line bg-white px-4 py-3 text-[17px] text-ink placeholder:text-muted focus-visible:outline-accent";
const label = "flex flex-col gap-2 text-left text-[15px] font-semibold text-ink";
const chip =
  "group/chip flex min-h-[50px] cursor-pointer items-center gap-1.5 rounded-full border-2 border-line bg-white px-5 text-[17px] text-ink transition-colors has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-white has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-accent";

export function ProjectForm() {
  const action = site.formEndpoint || `mailto:${site.email}`;
  const mailFallback = !site.formEndpoint;
  return (
    <form
      action={action}
      method="POST"
      encType={mailFallback ? "text/plain" : undefined}
      className="reveal flex w-full max-w-[720px] flex-col gap-5 rounded-[32px] border border-white/60 bg-white/55 p-6 text-left shadow-[0_30px_70px_-40px_rgba(60,64,120,0.5)] backdrop-blur-md sm:p-9"
    >
      <input type="hidden" name="_subject" value={projectForm.subject} />
      {!mailFallback && (
        <>
          <input type="hidden" name="_next" value={site.formThanksUrl} />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          {/* Spam trap: hidden from people, filled in by bots, and FormSubmit drops those. */}
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        </>
      )}

      {/* Only three things are required: name, email, and what's slowing them down. The
          rest sits behind "Add more detail", a native <details>, so the form starts short
          (cro playbook: every field costs completions) and still needs no JavaScript. */}
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>
          {projectForm.name}
          <input className={field} name="name" autoComplete="name" required />
        </label>
        <label className={label}>
          {projectForm.email}
          <input className={field} name="email" type="email" autoComplete="email" placeholder={projectForm.emailHint} required />
        </label>
      </div>

      <label className={label}>
        {projectForm.problem}
        <textarea className={`${field} min-h-[120px]`} name="slowing_you_down" placeholder={projectForm.problemHint} required />
      </label>

      <fieldset className="flex flex-col">
        <legend className="mb-3 text-[15px] font-semibold text-ink">{projectForm.kindLabel}</legend>
        <div className="flex flex-wrap gap-2.5">
          {projectForm.kinds.map((k) => (
            <label key={k} className={chip}>
              <input type="checkbox" name="looking_for" value={k} className="sr-only" />
              <span aria-hidden="true" className="hidden group-has-[:checked]/chip:inline">&#10003;</span>
              {k}
            </label>
          ))}
        </div>
      </fieldset>

      <details className="group rounded-2xl border border-line bg-white/60 px-5 py-4">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
          {projectForm.more}
          <span aria-hidden="true" className="text-xl font-normal text-muted transition-transform group-open:rotate-45">
            +
          </span>
        </summary>
        <div className="mt-5 flex flex-col gap-5">
          <label className={label}>
            {projectForm.wishlist}
            <textarea className={`${field} min-h-[110px]`} name="wishlist" placeholder={projectForm.wishlistHint} />
          </label>
          <label className={label}>
            {projectForm.examples}
            <textarea className={`${field} min-h-[90px]`} name="examples_and_visuals" placeholder={projectForm.examplesHint} />
          </label>
          <fieldset className="flex flex-col">
            <legend className="mb-3 text-[15px] font-semibold text-ink">{projectForm.timeline}</legend>
            <div className="flex flex-wrap gap-2.5">
              {projectForm.timelines.map((t) => (
                <label key={t} className={chip}>
                  <input type="radio" name="timeline" value={t} className="sr-only" />
                  <span aria-hidden="true" className="hidden group-has-[:checked]/chip:inline">&#10003;</span>
                  {t}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className={label}>
              {projectForm.business}
              <input className={field} name="business" autoComplete="organization" />
            </label>
            <label className={label}>
              {projectForm.phone}
              <input className={field} name="phone" type="tel" autoComplete="tel" />
            </label>
          </div>
        </div>
      </details>

      <button
        type="submit"
        className="mt-2 inline-flex min-h-[54px] items-center justify-center self-start rounded-full bg-ink px-8 text-[18px] font-semibold text-white hover:bg-black"
      >
        {projectForm.submit}
      </button>
      <p className="text-[15px] text-ink-soft">{projectForm.after}</p>
      <p className="text-[14px] text-muted">{projectForm.privacy}</p>
    </form>
  );
}
