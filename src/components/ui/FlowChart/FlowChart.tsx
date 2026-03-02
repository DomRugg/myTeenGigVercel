import React from "react";
import clsx from "clsx";

export type FlowChartStep = {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
};

export type FlowChartProps = React.ComponentPropsWithoutRef<"div"> & {
  steps: FlowChartStep[];
  stepClassName?: string;
};

const FlowChart: React.FC<FlowChartProps> = ({ steps, className, stepClassName, ...props }) => {
  return (
    <div
      className={clsx("grid gap-4", className)}
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
      {...props}
    >
      {steps.map((step, index) => (
        <div key={step.title} className="relative">
          <article
            className={clsx(
              "aspect-square rounded-xl border border-myteengig-border bg-myteengig-background p-5 shadow-xs",
              "grid grid-rows-[auto_auto_1fr] items-start justify-items-center text-center",
              stepClassName,
            )}
          >
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-myteengig-primary/20 bg-myteengig-primary">
              <img src={step.imageSrc} alt={step.imageAlt} className="h-10 w-10 object-contain" />
            </div>
            <h3 className="min-h-14 text-lg font-semibold text-myteengig-text-primary">{step.title}</h3>
            <p className="mt-2 min-h-20 text-myteengig-text-muted">{step.body}</p>
          </article>

          {index < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-[-18px] top-1/2 hidden -translate-y-1/2 text-4xl leading-none font-bold text-myteengig-primary lg:block"
            >
              →
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default FlowChart;
