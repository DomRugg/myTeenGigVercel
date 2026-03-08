import bellIcon from "../../assets/icons/bell.svg";
import briefcaseIcon from "../../assets/icons/briefcase.svg";
import clipboardIcon from "../../assets/icons/clipboard.svg";
import magnifierIcon from "../../assets/icons/magnifier.svg";
import type { AbstractCard } from "../../components/ui/AbstractCards/AbstractCards";
import type { FlowChartStep } from "../../components/ui/FlowChart/FlowChart";
import { companyName } from "../../constants/constants";

export const roleButtons = [
  "I'm a Teen",
  "I'm a Parent/Guardian",
  "I'm Looking to Post Opportunities",
  "I'm a Business",
];

export const focusPoints = [
  "Clear gig expectations",
  "Parent/Guardian awareness and approval",
  "Public and low-risk gig categories",
  "Transparent pay terms",
];

export const howItWorks: FlowChartStep[] = [
  {
    title: "1. Employers Post a Gig",
    body: "Homeowners and businesses post a gig.",
    imageSrc: clipboardIcon,
    imageAlt: "Post a gig step",
  },
  {
    title: "2. Teens Apply",
    body: "Teens browse by distance and category, then apply.",
    imageSrc: magnifierIcon,
    imageAlt: "Teens apply step",
  },
  {
    title: "3. Parent/Guardian Awareness",
    body: "Parents/guardians are notified and may be required to approve certain gigs.",
    imageSrc: bellIcon,
    imageAlt: "Parent awareness step",
  },
  {
    title: "4. Work Happens",
    body: "Employers pay teens directly. Teens gain experience and build a work history.",
    imageSrc: briefcaseIcon,
    imageAlt: "Work happens step",
  },
];

export const navItems = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#about", label: "About" },
];

export const audienceCards: AbstractCard[] = [
  {
    title: "For Teens",
    items: [
      "Build real-world experience",
      "Earn money locally",
      "Choose gigs that fit your schedule",
      "Stay within safe, approved categories",
    ],
    ctaLabel: "Explore Teen Gigs",
    ctaVariant: "primary",
  },
  {
    title: "For Parents/Guardians",
    items: [
      "Receive notifications",
      "Approve certain gigs",
      "Understand details before participation",
      "Feel confident in safety guidelines",
    ],
    ctaLabel: "Learn About Parent/Guardian Controls",
    ctaVariant: "secondary",
  },
  {
    title: "For Homeowners and Businesses",
    items: [
      "Access motivated local teens",
      "Fill short-term help needs",
      "Post clearly defined gigs",
    ],
    ctaLabel: "Post a Gig",
    ctaVariant: "outline",
  },
];

export const interestFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSclogS8u2ougHJ5j_en6lD73Bx6VymtYwAHQ48ZezPSgU7dgQ/viewform?usp=dialog";

export const interestFormHighlights = [
  `Get launch updates for ${companyName}`,
  "Tell us if you're a teen, parent, or employer",
  "Help shape early features and safety tools",
];
