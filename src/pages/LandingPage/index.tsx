import { useState } from "react";
import logoImage from "../../assets/logo.svg";
import AbstractCards from "../../components/ui/AbstractCards/AbstractCards";
import Button from "../../components/ui/Button/Button";
import FlowChart from "../../components/ui/FlowChart/FlowChart";
import Header from "../../components/ui/Header/Header";
import { companyName } from "../../constants/constants";
import {
  audienceCards,
  howItWorks,
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
              Safe local opportunities for ages 14 to 19
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-myteengig-text-primary md:text-6xl">Find Local Teens for Everyday Help</h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg font-medium text-myteengig-text-primary">
              Work made for teens. Built with parents/guardians in mind.
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-myteengig-text-muted">
              Explore local opportunities like yard work, dog walking, tech help, and snow shoveling.
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

        <section id="how-it-works" className="border-y border-myteengig-border bg-white px-6 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold text-myteengig-text-primary">How It Works</h2>
            <FlowChart steps={howItWorks} className="mt-8" />
          </div>
        </section>

        <section className="border-y border-myteengig-border bg-gradient-to-b from-white to-myteengig-secondary/40 px-6 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold text-myteengig-text-primary">{`Why ${companyName}?`}</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-myteengig-text-muted">
              Because teens want experience. Parents/guardians want oversight. Communities need help.
            </p>
            <p className="mx-auto mt-2 max-w-3xl text-myteengig-text-muted">
              The platform brings structure to the informal teen jobs that already exist with added transparency and accountability.
            </p>
          </div>
        </section>

        <AbstractCards cards={audienceCards} />

        <section id="about" className="border-t border-myteengig-border bg-white px-6 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-myteengig-text-primary">{`About ${companyName}`}</h2>
            <p className="mx-auto mt-4 max-w-3xl text-myteengig-text-muted">
              As a parent/guardian of teens, I watched my kids want work for independence, responsibility, and pride.
              Traditional jobs often required rigid commitments that did not fit school, sports, and seasonal schedules.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-myteengig-text-muted">
              We saw a gap between teens who wanted flexible work and homeowners or small businesses that needed short-term help. So we built
              the platform to create flexible, local opportunities with clear expectations, parent/guardian awareness, and structured safety
              guidelines.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-myteengig-text-muted">
              We intentionally do not allow babysitting, driving, overnight work, ladder work, or other higher-risk categories. It is designed to
              give teens independence without removing parents/guardians from the picture.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-myteengig-text-muted">
              Our hope is simple: help teens build confidence and responsibility while helping families and communities stay connected.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-myteengig-border bg-myteengig-text-primary px-6 py-8 text-sm text-white/90">
        <div className="mx-auto max-w-5xl text-center">
          <p>
            We earn revenue from employer posting fees. Teens receive their full agreed-upon pay directly from the employer.
          </p>
          <p className="mt-2">We do not employ teens and do not process wages or payroll.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
