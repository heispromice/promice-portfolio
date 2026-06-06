import type { IconType } from "react-icons";
import { SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Systems", href: "#systems" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    title: "Financial Performance Dashboard",
    description:
      "Uchambuzi wa data za kifedha na hisa za mabenki nchini Tanzania ukitumia SQL na Tableau kuonyesha mabadiliko ya faida na ukuaji wa amana.",
    tags: ["SQL", "Tableau", "Data Modeling"],
  },
  {
    title: "EduRecord Digital System",
    description:
      "Mfumo wa tovuti na utunzaji wa kumbukumbu za kidijitali kwa ajili ya shule za sekondari Tanzania ili kupunguza upotevu wa data unaotokana na karatasi.",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL"],
  },
];

export const archiveCards = [
  { id: "v1", title: "V1_PORTFOLIO", tone: "from-emerald-500 via-teal-500 to-cyan-500" },
  { id: "v2", title: "OLD_DASHBOARD", tone: "from-fuchsia-500 via-pink-500 to-rose-500" },
  { id: "v3", title: "SYSTEM_V1", tone: "from-violet-500 via-purple-500 to-indigo-500" },
  { id: "v4", title: "ARCHIVE_UI", tone: "from-slate-500 via-slate-700 to-slate-900" },
];

export const socials: { label: string; href: string; icon: IconType }[] = [
  { label: "GitHub", href: "https://github.com", icon: SiGithub },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
  { label: "Instagram", href: "https://instagram.com", icon: SiInstagram },
];
