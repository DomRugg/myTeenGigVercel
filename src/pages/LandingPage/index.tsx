import { useState } from "react";
import logoImage from "../../assets/logo.jpg";
import AbstractCards from "../../components/ui/AbstractCards/AbstractCards";
import Button from "../../components/ui/Button/Button";
import FlowChart from "../../components/ui/FlowChart/FlowChart";
import Header from "../../components/ui/Header/Header";
import { companyName } from "../../constants/constants";
import {
  audienceCards,
  disallowed,
  focusPoints,
  howItWorks,
  interestFormHighlights,
  interestFormUrl,
  limitedInHome,
  navItems,
  roleButtons,
} from "./constants";

const LandingPage = () => {
  const [selectedRole, setSelectedRole] = useState(roleButtons[0]);

  return (
    <div className="min-h-screen bg-myteengig-background">
      <Header
        sticky
        brand={
          <div className="flex items-center gap-2">
            <img src={logoImage} alt={`${companyName} logo`} className="h-8 w-8" />
            <span>{companyName}</span>
          </div>
        }
        navItems={navItems}
        navClassName="hidden md:flex"
        containerClassName="py-4"
        className="backdrop-blur supports-[backdrop-filter]:bg-myteengig-surface/90"
      />

      <main>
        <section className="relative overflow-hidden border-b border-myteengig-border bg-gradient-to-b from-white via-myteengig-background to-white px-6 py-20">
          <div className="pointer-events-none absolute -top-28 right-[-120px] h-80 w-80 rounded-full bg-myteengig-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-120px] left-[-100px] h-72 w-72 rounded-full bg-myteengig-secondary/60 blur-3xl" />
          <div className="relative mx-auto max-w-5xl text-center">
            <p className="mb-4 inline-block rounded-full border border-myteengig-border bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-myteengig-text-muted">
              Safe local jobs for ages 14 to 19
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-myteengig-text-primary md:text-6xl">
              Work made for teens. Built with parents in mind.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-myteengig-text-muted">
              {companyName} connects teens with safe, local job opportunities with parent awareness, clear expectations, and built-in safety standards.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {roleButtons.map((label) => (
                <Button
                  key={label}
                  variant={selectedRole === label ? "primary" : "outline"}
                  className="w-full"
                  aria-pressed={selectedRole === label}
                  onClick={() => setSelectedRole(label)}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-bold text-myteengig-text-primary">{`What Is ${companyName}?`}</h2>
          <p className="mt-4 text-lg text-myteengig-text-muted">
            {companyName} is currently a Long Island platform designed to help teens (ages 14 to 19) find real, age-appropriate work in their local communities.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {focusPoints.map((point) => (
              <li key={point} className="rounded-lg border border-myteengig-border bg-white p-4 text-myteengig-text-primary shadow-xs">
                <span className="mr-2 font-bold text-myteengig-primary">✓</span>
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-lg border border-myteengig-border bg-myteengig-secondary/40 p-4 text-sm text-myteengig-text-muted">
            {companyName} is a connection platform. Employers pay teens directly. We do not process wages or payroll.
          </p>
        </section>

        <section id="how-it-works" className="border-y border-myteengig-border bg-white px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-myteengig-text-primary">How It Works</h2>
            <FlowChart steps={howItWorks} className="mt-8" />
          </div>
        </section>

        <section id="safety" className="mx-auto grid max-w-5xl gap-6 px-6 py-16 lg:grid-cols-2">
          <article className="rounded-xl border border-red-200 bg-red-50 p-6">
            <h2 className="text-2xl font-bold text-myteengig-text-primary">Safety First</h2>
            <p className="mt-2 text-myteengig-text-muted">{companyName} is designed with boundaries. We do not allow:</p>
            <ul className="mt-4 space-y-2 text-myteengig-text-primary">
              {disallowed.map((item) => (
                <li key={item}>🚫 {item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-myteengig-border bg-white p-6 shadow-xs">
            <h3 className="text-xl font-semibold text-myteengig-text-primary">Limited In-Home Work</h3>
            <p className="mt-2 text-myteengig-text-muted">
              Tutoring and homework help must happen in public locations such as libraries or community centers.
            </p>
            <p className="mt-2 text-myteengig-text-muted">
              Limited in-home work is allowed only with adult presence and parent approval:
            </p>
            <ul className="mt-4 space-y-2 text-myteengig-text-primary">
              {limitedInHome.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="border-y border-myteengig-border bg-gradient-to-b from-white to-myteengig-secondary/40 px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-myteengig-text-primary">{`Why ${companyName}?`}</h2>
            <p className="mt-4 text-lg text-myteengig-text-muted">
              Because teens want experience. Parents want oversight. Communities need help.
            </p>
            <p className="mt-2 text-myteengig-text-muted">
              {companyName} brings structure to the informal teen jobs that already exist with added transparency and accountability.
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-myteengig-border bg-myteengig-text-primary px-6 py-16 text-white">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-myteengig-secondary/25 blur-3xl" />

          <div className="relative mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <div>
              <p className="inline-block rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                Early Access
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight">{`Join The ${companyName} Interest List`}</h2>
              <p className="mt-3 text-white/85">
                Want first access when we launch? Fill out our short interest form and we will keep you updated.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-white/90">
                {interestFormHighlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>

              <div className="mt-6">
                <Button variant="secondary" onClick={() => window.open(interestFormUrl, "_blank", "noopener,noreferrer")}>
                  Open Interest Form
                </Button>
              </div>
            </div>

            <div className="rounded-xl border border-white/20 bg-white p-2 shadow-xl">
              <iframe
                title={`${companyName} Interest Form`}
                src={`${interestFormUrl}&embedded=true`}
                className="h-[520px] w-full rounded-lg"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </section>

        <AbstractCards cards={audienceCards} />

        <section id="about" className="border-t border-myteengig-border bg-white px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-myteengig-text-primary">{`About ${companyName}`}</h2>
            <p className="mt-4 text-myteengig-text-muted">
              It started at my own kitchen table. As a parent of teens, I watched my kids want work for independence, responsibility, and pride.
              Traditional jobs often required rigid commitments that did not fit school, sports, and seasonal schedules.
            </p>
            <p className="mt-4 text-myteengig-text-muted">
              We saw a gap between teens who wanted flexible work and homeowners or small businesses that needed short-term help. So we built
              {` ${companyName} `}to create flexible, local opportunities with clear expectations, parent awareness, and structured safety guidelines.
            </p>
            <p className="mt-4 text-myteengig-text-muted">
              We intentionally do not allow babysitting, driving, overnight work, ladder work, or other higher-risk categories. {companyName} is
              designed to give teens independence without removing parents from the picture.
            </p>
            <p className="mt-4 text-myteengig-text-muted">
              Our hope is simple: help teens build confidence and responsibility while helping families and communities stay connected.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-myteengig-border bg-myteengig-text-primary px-6 py-8 text-sm text-white/90">
        <div className="mx-auto max-w-5xl">
          <p>
            {companyName} earns revenue from employer posting fees. Teens receive their full agreed-upon pay directly from the employer.
          </p>
          <p className="mt-2">{companyName} does not employ teens and does not process wages or payroll.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
