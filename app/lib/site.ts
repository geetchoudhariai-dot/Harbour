import {
  Activity,
  Aperture,
  Box,
  Camera,
  Cpu,
  Scan,
  ScanLine,
  Waves,
  Zap,
  type LucideIcon
} from "lucide-react";

export const SITE = {
  name: "Harbour View Dental",
  phone: "(250) 724-1314",
  phoneHref: "tel:+12507241314",
  email: "info@harbourviewdental.com",
  emailHref: "mailto:info@harbourviewdental.com",
  street: "Unit B, 4556 Gertrude St",
  city: "Port Alberni, BC V9Y 6K1",
  mapUrl:
    "https://www.google.com/maps/place/Harbourview+Dental/@49.2577946,-124.8136088,16z/data=!3m1!4b1!4m6!3m5!1s0x5488f702e3531a9f:0xd18a8ef79e2d8ad9!8m2!3d49.2577946!4d-124.8110339!16s%2Fg%2F11h75rypg5?entry=ttu",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Harbourview+Dental,+Unit+B,+4556+Gertrude+St,+Port+Alberni,+BC+V9Y+6K1",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Harbourview+Dental,+Unit+B,+4556+Gertrude+St,+Port+Alberni,+BC+V9Y+6K1&z=16&output=embed",
  facebook: "https://www.facebook.com/profile.php?id=100085677588209",
  googleReviews:
    "https://www.google.com/maps/place/Harbourview+Dental/@49.2577946,-124.8136088,16z/data=!3m1!4b1!4m6!3m5!1s0x5488f702e3531a9f:0xd18a8ef79e2d8ad9!8m2!3d49.2577946!4d-124.8110339!16s%2Fg%2F11h75rypg5?entry=ttu"
};

export const GEO = {
  latitude: 49.2577946,
  longitude: -124.8110339
} as const;

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "New Patients", href: "/new-patients" },
  { label: "About Us", href: "/about" },
  { label: "Technology", href: "/technology" },
  { label: "Contact", href: "/contact" }
];

export function serviceSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z]+/g, "-");
}

const TITLE_ABBREVIATIONS = /\b(Dr|Mr|Mrs|Ms|St|Jr|Sr)\.$/i;

export function serviceTagline(summary: string) {
  const sentenceEnd = /[.!?]/g;
  let match: RegExpExecArray | null;
  while ((match = sentenceEnd.exec(summary))) {
    const candidate = summary.slice(0, match.index + 1);
    if (!TITLE_ABBREVIATIONS.test(candidate)) return candidate;
  }
  return summary;
}

export const values = [
  "New patients welcome",
  "CDCP accepted",
  "Same-day crowns",
  "All ages",
  "Sedation available",
  "Emergency care"
];

export const stats = [
  { value: "9", label: "Caring team members, led by Dr. Gaurav" },
  { value: "1 visit", label: "Custom CEREC crowns, no second trip" },
  { value: "4.2", label: "Google rating from Port Alberni patients" },
  { value: "All ages", label: "Families, kids, adults, and seniors" }
];

export const hours = [
  { day: "Monday", time: "8:00 am - 5:00 pm" },
  { day: "Tuesday", time: "8:00 am - 5:00 pm" },
  { day: "Wednesday", time: "8:00 am - 5:00 pm" },
  { day: "Thursday", time: "8:00 am - 5:00 pm" },
  { day: "Friday", time: "8:00 am - 3:00 pm" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" }
];

export type DentalIconId =
  | "preventive"
  | "children"
  | "restorative"
  | "periodontics"
  | "endodontics"
  | "oral-surgery"
  | "sedation";

export type ServiceCategory = {
  title: string;
  dentalIcon: DentalIconId;
  summary: string;
  treatments: { name: string; note: string; slug: string }[];
};

export const serviceImages: Record<DentalIconId, { src: string; alt: string }> = {
  preventive: {
    src: "/images/services/service_preventive.png",
    alt: "Dental hygienist performing preventive teeth cleaning"
  },
  children: {
    src: "/images/services/Children Dentistry.png",
    alt: "Pediatric dentist providing gentle care for a child"
  },
  restorative: {
    src: "/images/services/Restorative.png",
    alt: "Modern restorative dentistry with same-day crown technology"
  },
  periodontics: {
    src: "/images/services/Periodontics.png",
    alt: "Periodontal gum health treatment in a modern clinic"
  },
  endodontics: {
    src: "/images/services/Endodontics.png",
    alt: "Endodontic root canal therapy with precision tools"
  },
  "oral-surgery": {
    src: "/images/services/Oral Surgery.png",
    alt: "Gentle oral surgery in a calm dental operatory"
  },
  sedation: {
    src: "/images/services/Sedation Dentistry.png",
    alt: "Relaxed patient receiving sedation dentistry care"
  }
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Preventive",
    dentalIcon: "preventive",
    summary:
      "Regular care that keeps your smile healthy and catches small problems before they become big, costly ones.",
    treatments: [
      { name: "Dental Cleanings", slug: "dental-cleanings", note: "A professional clean that removes plaque and tartar brushing can't reach." },
      { name: "Dental Hygiene", slug: "dental-hygiene", note: "Routine visits that keep your gums healthy and your teeth strong." },
      { name: "Mouth Guards", slug: "mouth-guards", note: "Custom-fit guards that protect your teeth during sports." },
      { name: "Night Guards", slug: "night-guards", note: "Custom guards that protect against grinding and clenching while you sleep." },
      { name: "Fluoride Treatment", slug: "fluoride-treatment", note: "A simple treatment that strengthens enamel and helps prevent cavities." }
    ]
  },
  {
    title: "Children's Dentistry",
    dentalIcon: "children",
    summary:
      "Gentle, friendly care that helps kids build healthy habits and feel relaxed at the dentist. We recommend a first visit within six months of the first tooth or by age one.",
    treatments: [
      { name: "Children's Dentistry", slug: "childrens-dentistry", note: "Gentle checkups, cleanings, fluoride, and sealants for kids of all ages." }
    ]
  },
  {
    title: "Restorative",
    dentalIcon: "restorative",
    summary:
      "Repair damaged teeth and replace missing ones so you can eat, speak, and smile comfortably again.",
    treatments: [
      { name: "Dental Implants", slug: "dental-implants", note: "A permanent replacement for a missing tooth that looks and works like your own." },
      { name: "Dentures", slug: "dentures", note: "Removable replacements for several or all of your missing teeth." },
      { name: "Composite Fillings", slug: "composite-fillings", note: "Tooth-coloured fillings that repair cavities and blend right in." },
      { name: "Inlays & Onlays", slug: "inlays-onlays", note: "Custom restorations for teeth too damaged for a filling but not needing a full crown." },
      { name: "CEREC Same-Day Crowns", slug: "cerec-same-day-crowns", note: "A custom crown designed and placed in a single visit, with no temporary and no second trip." },
      { name: "Bridges", slug: "bridges", note: "A fixed replacement that 'bridges' the gap left by a missing tooth." }
    ]
  },
  {
    title: "Periodontics",
    dentalIcon: "periodontics",
    summary: "Care for the gums and bone that support your teeth, the foundation of a healthy smile.",
    treatments: [
      { name: "Deep Cleaning", slug: "deep-cleaning", note: "Removes bacteria below the gumline to treat and prevent gum disease." }
    ]
  },
  {
    title: "Endodontics",
    dentalIcon: "endodontics",
    summary: "Saving teeth from the inside out when decay or infection reaches the nerve.",
    treatments: [
      { name: "Root Canal Therapy", slug: "root-canal-therapy", note: "Relieves pain by removing infection inside a tooth so it can be saved." },
      { name: "Rotary Endodontics", slug: "rotary-endodontics", note: "Modern tools that make root canals faster and more comfortable." }
    ]
  },
  {
    title: "Oral Surgery",
    dentalIcon: "oral-surgery",
    summary: "Safe, gentle procedures for the times a tooth simply needs to come out.",
    treatments: [
      {
        name: "Tooth Extractions",
        slug: "extractions",
        note: "Careful removal when a tooth can't be saved, including wisdom teeth when recommended, with your comfort first."
      }
    ]
  },
  {
    title: "Sedation Dentistry",
    dentalIcon: "sedation",
    summary:
      "Medication to help you relax for a better dental experience, closely monitored by Dr. Gary for your safety and comfort.",
    treatments: [
      {
        name: "Oral Conscious Sedation",
        slug: "sedation-dentistry-services",
        note: "A deeper level of relaxation while you're still awake, ideal for dental anxiety or longer appointments."
      }
    ]
  }
];

export type Tech = { title: string; icon: LucideIcon; copy: string };

export const technology: Tech[] = [
  {
    title: "CEREC Same-Day Crowns",
    icon: Zap,
    copy: "We scan your tooth, design your crown on screen, and mill it from a ceramic block right here, usually in under two hours. You leave with your permanent crown the same day, with no temporary and no second appointment."
  },
  {
    title: "CAD/CAM Restorations",
    icon: Cpu,
    copy: "Computer-aided design and milling let us craft precise, metal-free restorations in minutes instead of waiting on an outside lab. That means fewer visits and a comfortable, natural fit."
  },
  {
    title: "Digital X-rays",
    icon: ScanLine,
    copy: "Digital X-rays produce clear, detailed images instantly while using far less radiation than old film. We can show them to you on screen, so it's easy to see exactly what we see."
  },
  {
    title: "Cone Beam 3D Imaging",
    icon: Box,
    copy: "One quick scan creates a detailed 3D view of your teeth, jaw, and bone. It helps us plan treatments like implants accurately, with low radiation and no discomfort."
  },
  {
    title: "Panoramic X-rays",
    icon: Scan,
    copy: "A panoramic X-ray captures a wide, 360° view of your teeth, sinuses, and jaw in a single image. It is useful for spotting things a standard X-ray might miss."
  },
  {
    title: "Intra-oral Camera",
    icon: Camera,
    copy: "A small pen-sized camera takes clear pictures inside your mouth and shows them to you, so it's easy to understand what's going on. A fresh, disposable cover is used every time."
  },
  {
    title: "Intra-oral Scanner",
    icon: Aperture,
    copy: "Instead of messy putty impressions, a handheld scanner takes accurate 3D digital impressions. It's more comfortable, reduces gagging, and speeds up your treatment."
  },
  {
    title: "Cavitron",
    icon: Waves,
    copy: "An ultrasonic cleaner that gently removes hardened plaque and tartar, making cleanings quicker and more comfortable than scraping alone."
  },
  {
    title: "Rotary Endodontics",
    icon: Activity,
    copy: "Quiet, efficient instruments that make root canal treatment noticeably faster and more comfortable than traditional hand tools."
  }
];

export const features = [
  "Comfort-first care",
  "Modern tools, real benefits",
  "Rooted in the Alberni Valley",
  "New patients welcome"
];

export type TeamMember = {
  name: string;
  role: string;
  image?: string;
  lead?: boolean;
};

export const team: TeamMember[] = [
  { name: "Dr. Gary", role: "Owner & General Dentist", image: "/images/dr-gaurav.jpg", lead: true },
  { name: "Carly Dalziel", role: "Registered Dental Hygienist", image: "/images/carly-dalziel.jpg" },
  { name: "Tatiana Tordoya", role: "Treatment Coordinator", image: "/images/tatiana-tordoya.jpg" },
  { name: "Lisa Rozwadowski", role: "Treatment Coordinator", image: "/images/lisa-rozwadowski.jpg" },
  { name: "Kathy Porcher", role: "Hygiene Coordinator", image: "/images/kathy-porcher.jpg" },
  { name: "Pankti Desai", role: "Certified Dental Assistant", image: "/images/pankti-desai.jpg" },
  { name: "Gloria Martens", role: "Certified Dental Assistant", image: "/images/gloria-martens.jpg" },
  { name: "Sakshi Ganguli", role: "Certified Dental Assistant", image: "/images/sakshi-ganguli.jpg" },
  { name: "Joan Erickson", role: "Dental Receptionist" }
];

export const careScenes = {
  digital: {
    src: "/images/care-digital.jpg",
    alt: "Digital intraoral scanning for comfortable, precise dental care"
  }
};

export const visitFlow = [
  {
    title: "Say hello",
    copy: "A warm welcome, a quick chat about your history, and any questions or worries you want to share."
  },
  {
    title: "Gentle exam",
    copy: "A comprehensive oral exam with full-mouth digital X-rays, all explained clearly on screen."
  },
  {
    title: "Talk it through",
    copy: "Dr. Gary walks you through what he found in plain language, with no pressure and no jargon."
  },
  {
    title: "Plan your care",
    copy: "Together we build a plan around your goals, timeline, and budget, then book what comes next."
  }
] as const;

export const firstVisit = [
  "Comprehensive oral examination",
  "Full-mouth digital X-rays",
  "Oral hygiene instruction",
  "Professional teeth cleaning",
  "One-on-one consultation with Dr. Gary"
];

export const bring = [
  "Photo ID",
  "Dental insurance or CDCP details",
  "A list of any medications you take",
  "Recent X-rays, if you have them"
];

export const testimonials = [
  {
    quote:
      "Best dentist I've ever had. Dr. Gary explains what he's going to do and even gives options on the procedure. Easy to talk to, he's fantastic.",
    name: "Herpreet Forrest",
    role: "Google review"
  },
  {
    quote:
      "Plenty of availability for appointments, pain-free freezing, and quick, professional service.",
    name: "Amanda Allen",
    role: "Google review"
  },
  {
    quote: "Very friendly staff and a very good dentist. Great staff, location, and clinical care.",
    name: "Terry MacDonald",
    role: "Google review"
  },
  {
    quote:
      "Dr. Gary is very professional. I was a little leery changing dentists but he put the worries to rest on the first visit. Staff front to back are awesome.",
    name: "Robert Knighton",
    role: "Google review"
  },
  {
    quote:
      "Wow, what a great doctor. Gentle, very communicative, and gone above and beyond for me. I'm very grateful for Dr. Gary.",
    name: "Dion Joe",
    role: "Google review"
  },
  {
    quote:
      "I've been coming here for regular checkups and cleanings and always have a great experience. Friendly, professional, and appointments run on time.",
    name: "Dhaval Patel",
    role: "Google review"
  }
];

export const faqs = [
  {
    question: "Are you accepting new patients?",
    answer:
      "Yes. Harbour View Dental welcomes new patients of all ages, including families, newcomers to Port Alberni, and patients returning after time away from dental care."
  },
  {
    question: "What does my first visit include?",
    answer:
      "Your first visit usually includes a comprehensive oral exam, full-mouth digital X-rays, hygiene instruction, a cleaning, and a one-on-one consultation with Dr. Gary to discuss your goals and options."
  },
  {
    question: "Do you accept dental insurance and the CDCP?",
    answer:
      "We accept most major dental insurances and file most claims for you as a courtesy, and we welcome Canadian Dental Care Plan (CDCP) patients. Share your details before your visit and we'll verify your benefits. Financing options are also available."
  },
  {
    question: "Do you offer sedation or care for anxious patients?",
    answer:
      "Yes. Sedation dentistry is a safe, effective way to stay relaxed during treatment, especially for dental anxiety, longer appointments, or multiple procedures."
  },
  {
    question: "Do you offer same-day crowns?",
    answer:
      "Yes. CEREC technology lets us design and place a custom, metal-free ceramic crown in a single appointment for many patients, with no temporary and no second visit."
  },
  {
    question: "Can I book for a dental emergency?",
    answer:
      "If you have pain, swelling, a broken tooth, or a lost filling, call us directly at (250) 724-1314 so the team can guide you quickly."
  },
  {
    question: "Do you see children?",
    answer:
      "Absolutely. We provide kind, patient children's dentistry with gentle exams, cleanings, fluoride, and checkups for kids of all ages."
  },
  {
    question: "How often should I visit the dentist?",
    answer:
      "The American Dental Association recommends checkups and cleanings about every six months for most people. If you have specific needs, Dr. Gary will recommend a schedule that fits your oral health."
  },
  {
    question: "Where is the clinic located?",
    answer:
      "We're at Unit B, 4556 Gertrude St in Port Alberni, BC, close to Harbour Quay and the heart of the Alberni Valley."
  }
];
