import React from "react";
import clsx from "clsx";
import Button, { type ButtonProps } from "../Button/Button";

export type AbstractCard = {
  title: string;
  items: string[];
  ctaLabel: string;
  ctaVariant?: ButtonProps["variant"];
};

export type AbstractCardsProps = React.ComponentPropsWithoutRef<"section"> & {
  cards: AbstractCard[];
};

const AbstractCards: React.FC<AbstractCardsProps> = ({ cards, className, ...props }) => {
  return (
    <section className={clsx("mx-auto grid max-w-5xl gap-4 px-6 py-16 lg:grid-cols-3", className)} {...props}>
      {cards.map((card) => (
        <article key={card.title} className="rounded-xl border border-myteengig-border bg-white p-6 text-center shadow-xs">
          <h3 className="text-xl font-semibold text-myteengig-text-primary">{card.title}</h3>
          <ul className="mt-4 space-y-2 text-myteengig-text-muted">
            {card.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Button variant={card.ctaVariant} className="mt-6 w-full">
            {card.ctaLabel}
          </Button>
        </article>
      ))}
    </section>
  );
};

export default AbstractCards;
