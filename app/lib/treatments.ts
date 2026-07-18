export type TreatmentSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Treatment = {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  metaDescription: string;
  intro: string;
  sections: TreatmentSection[];
};

export const treatments: Treatment[] = [
  {
    slug: "dental-cleanings",
    title: "Dental Cleanings",
    category: "Preventive",
    categorySlug: "preventive",
    metaDescription:
      "Professional dental cleanings in Port Alberni, BC. Remove plaque and tartar, prevent decay and gum disease, and keep your smile healthy with Dr. Gary.",
    intro:
      "The American Dental Association recommends dental visits at least twice per year. Regular exams and professional cleanings help ensure optimal oral health. At Harbour View Dental, our team works with you to keep every visit comfortable and thorough.",
    sections: [
      {
        paragraphs: [
          "Professional cleanings remove harmful plaque and tartar that brushing and flossing alone can't reach. This helps prevent tooth decay, periodontal disease, and other oral health issues before they become bigger problems.",
          "During your cleaning and exam, we also evaluate your overall oral health, discuss hygiene habits, check your bite and jaw, assess your risk of decay and gum disease, and review any existing restorations."
        ]
      },
      {
        heading: "What to expect",
        paragraphs: ["A typical cleaning visit includes:"],
        bullets: [
          "Gentle removal of plaque and tartar above and below the gumline",
          "Polishing to smooth tooth surfaces and reduce future buildup",
          "A full exam with Dr. Gary to catch issues early",
          "Plain-language guidance on keeping your smile healthy at home"
        ]
      }
    ]
  },
  {
    slug: "dental-hygiene",
    title: "Dental Hygiene",
    category: "Preventive",
    categorySlug: "preventive",
    metaDescription:
      "Dental hygiene tips and professional care in Port Alberni. Harbour View Dental helps you build strong at-home habits between visits.",
    intro:
      "Professional cleanings are essential, but great oral health also depends on what you do at home every day. Dr. Gary recommends brushing at least twice daily and flossing once a day to help prevent tooth decay and gum disease.",
    sections: [
      {
        paragraphs: [
          "There are additional ways to keep teeth strong between visits: use fluoride toothpaste and rinses where appropriate, eat a balanced diet, and limit sugary snacks. When you can, drink water after meals to help wash away sugars. If you've had something acidic, like soda or citrus, wait about 30 minutes before brushing so enamel has time to recover."
        ]
      },
      {
        heading: "We're here to help",
        paragraphs: [
          "Healthy habits make a real difference over time. If you have questions about your current routine, sensitivity, or which products to use, ask us at your next visit. We'll tailor advice to your mouth, not generic tips off the internet."
        ]
      }
    ]
  },
  {
    slug: "mouth-guards",
    title: "Mouth Guards",
    category: "Preventive",
    categorySlug: "preventive",
    metaDescription:
      "Custom sports mouth guards in Port Alberni, BC. Protect your teeth during athletics with a comfortable, dentist-fitted guard.",
    intro:
      "You wouldn't hit the field without a helmet. Your teeth deserve the same protection. Each year, a significant share of dental injuries happen during sports, and custom mouth guards dramatically reduce that risk.",
    sections: [
      {
        paragraphs: [
          "Contact sports aren't the only concern. Basketball, soccer, and other activities also carry a real risk of facial and dental injury. A custom-fitted sports mouth guard from Dr. Gary protects your teeth far better than a store-bought boil-and-bite option.",
          "Because it's made for your mouth, a custom guard stays in place, feels comfortable, and makes it easier to breathe and communicate while you play."
        ]
      }
    ]
  },
  {
    slug: "night-guards",
    title: "Night Guards",
    category: "Preventive",
    categorySlug: "preventive",
    metaDescription:
      "Custom night guards for teeth grinding (bruxism) in Port Alberni. Protect enamel, reduce jaw pain, and sleep more comfortably.",
    intro:
      "Unconscious grinding or clenching during sleep (bruxism) can wear down enamel, irritate gums, and cause jaw pain. If you wake with sore teeth or headaches, a custom night guard may help.",
    sections: [
      {
        paragraphs: [
          "A night guard is a removable appliance that creates a barrier between your upper and lower teeth while you sleep. Dr. Gary custom-fits yours for comfort and effective protection.",
          "We may also discuss lifestyle changes that reduce grinding, including limiting caffeine and alcohol, avoiding chewing gum, and managing stress. If you suspect you're grinding, contact us for an evaluation."
        ]
      }
    ]
  },
  {
    slug: "fluoride-treatment",
    title: "Fluoride Treatment",
    category: "Preventive",
    categorySlug: "preventive",
    metaDescription:
      "Professional fluoride treatment in Port Alberni to strengthen enamel and prevent cavities. Safe for children and adults at Harbour View Dental.",
    intro:
      "Fluoride helps teeth resist decay by strengthening enamel and aiding re-mineralization. The ADA often recommends fluoride for children and adults at higher risk of cavities. We offer professional fluoride treatment right in our Port Alberni office.",
    sections: [
      {
        paragraphs: [
          "Fluoride is applied as a varnish using a small brush, making it quick and comfortable. Between visits, fluoride toothpaste and appropriate rinses support your daily care. We'll recommend what's right for you or your child based on age and risk level."
        ]
      }
    ]
  },
  {
    slug: "childrens-dentistry",
    title: "Children's Dentistry",
    category: "Children's Dentistry",
    categorySlug: "children-s-dentistry",
    metaDescription:
      "Gentle children's dentistry in Port Alberni with exams, cleanings, fluoride, and kid-friendly visits. A first visit by age one is recommended.",
    intro:
      "Dental care for children is about more than teeth. It's about building healthy habits for life. The American Academy of Pediatric Dentistry recommends a first visit within six months of the first tooth or by age one.",
    sections: [
      {
        paragraphs: [
          "At Harbour View Dental, we focus on prevention, education, and a calm experience so kids feel safe and even look forward to coming back."
        ]
      },
      {
        heading: "What we offer for kids",
        bullets: [
          "Gentle exams and cleanings sized for little smiles",
          "Fluoride treatments and sealants for extra cavity protection",
          "Kid-friendly explanations so children understand why care matters",
          "Guidance for parents on brushing, diet, and home care"
        ]
      }
    ]
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    category: "Restorative",
    categorySlug: "restorative",
    metaDescription:
      "Dental implants in Port Alberni, BC. Permanent tooth replacement that looks, feels, and functions like your natural teeth.",
    intro:
      "Dental implants are a safe, durable replacement for missing teeth. They function and appear like natural teeth, and can anchor crowns or help stabilize dentures, depending on your needs.",
    sections: [
      {
        heading: "Benefits of implants",
        bullets: [
          "Restore your smile and confidence",
          "Improve chewing and speech",
          "Protect jawbone health where teeth are missing",
          "Don't rely on neighbouring teeth the way bridges do",
          "Long-lasting with proper care"
        ]
      },
      {
        paragraphs: [
          "Dr. Gary uses modern imaging, including 3D cone beam scans when needed, to plan implant placement accurately. We'll walk you through every step so you know what to expect before treatment begins."
        ]
      }
    ]
  },
  {
    slug: "dentures",
    title: "Dentures",
    category: "Restorative",
    categorySlug: "restorative",
    metaDescription:
      "Full and partial dentures in Port Alberni. Custom-fit replacements to restore your smile, chewing, and confidence.",
    intro:
      "Dentures are removable replacements for one or more missing teeth, custom-made to fit your mouth and match your natural appearance.",
    sections: [
      {
        paragraphs: [
          "Complete dentures replace a full upper or lower arch. Partial dentures fill gaps when some natural teeth remain, helping prevent remaining teeth from shifting out of place."
        ]
      },
      {
        heading: "Caring for your dentures",
        bullets: [
          "Clean daily with a soft brush and non-abrasive cleanser",
          "Keep up with regular dental checkups",
          "Expect to replace dentures every 5-10 years as your mouth changes",
          "Ask us about implant-supported options for added stability"
        ]
      }
    ]
  },
  {
    slug: "composite-fillings",
    title: "Composite Fillings",
    category: "Restorative",
    categorySlug: "restorative",
    metaDescription:
      "Tooth-coloured composite fillings in Port Alberni. Repair cavities with strong, natural-looking restorations at Harbour View Dental.",
    intro:
      "When bacteria cause decay, a filling stops damage from spreading. Composite fillings use tooth-coloured resin that's strong, durable, and blends with your natural enamel.",
    sections: [
      {
        paragraphs: [
          "We gently remove decayed tissue, clean the area, and place your filling to restore strength and protect the tooth. Because composite bonds directly to the tooth, less healthy structure needs to be removed compared with older metal fillings.",
          "Untreated decay can lead to pain or infection, so if you suspect a cavity, don't wait. Early treatment is simpler, faster, and less costly."
        ]
      }
    ]
  },
  {
    slug: "inlays-onlays",
    title: "Inlays & Onlays",
    category: "Restorative",
    categorySlug: "restorative",
    metaDescription:
      "Dental inlays and onlays in Port Alberni. Conservative, custom restorations when a filling isn't enough but a full crown isn't needed.",
    intro:
      "Inlays and onlays are custom restorations used when a tooth is too damaged for a simple filling but doesn't yet need a full crown, preserving as much healthy tooth as possible.",
    sections: [
      {
        paragraphs: [
          "An inlay fits within the centre of the tooth. An onlay covers one or more cusps when damage extends further. Both are precisely crafted for a tight, durable fit."
        ]
      },
      {
        heading: "Advantages",
        bullets: [
          "Conservative, with more natural tooth structure preserved",
          "Strong, long-lasting materials",
          "Resistant to discolouration over time",
          "Custom fit seals the tooth against bacteria"
        ]
      }
    ]
  },
  {
    slug: "cerec-same-day-crowns",
    title: "CEREC Same-Day Crowns",
    category: "Restorative",
    categorySlug: "restorative",
    metaDescription:
      "CEREC same-day crowns in Port Alberni. Walk out with your permanent crown in one visit, with no temporary and no second appointment.",
    intro:
      "Over time, teeth can weaken from decay, cracks, or wear. A crown renews strength and appearance. With CEREC technology at Harbour View Dental, many patients receive a permanent crown the same day.",
    sections: [
      {
        heading: "Crowns can",
        bullets: [
          "Protect a weak tooth from breaking",
          "Hold a cracked tooth together",
          "Restore a heavily decayed or worn tooth",
          "Cover severe discolouration",
          "Complete root canal therapy or anchor a bridge"
        ]
      },
      {
        paragraphs: [
          "We scan your tooth digitally, design the crown on screen, and mill it from a ceramic block right here, usually in under two hours. No messy impressions, no temporary crown, and no second trip."
        ]
      }
    ]
  },
  {
    slug: "bridges",
    title: "Dental Bridges",
    category: "Restorative",
    categorySlug: "restorative",
    metaDescription:
      "Dental bridges in Port Alberni, BC. Fixed tooth replacement that closes gaps and prevents surrounding teeth from shifting.",
    intro:
      "A dental bridge replaces one or more missing teeth by anchoring to neighbouring teeth (or implants). It restores chewing, speech, and the natural shape of your smile.",
    sections: [
      {
        paragraphs: [
          "Leaving a gap untreated allows surrounding teeth to drift, which can change your bite and lead to further problems. A bridge is custom-made to match your natural teeth in colour, size, and shape.",
          "With good home care and regular checkups, a well-made bridge can serve you for many years."
        ]
      }
    ]
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    category: "Periodontics",
    categorySlug: "periodontics",
    metaDescription:
      "Scaling and root planing (deep cleaning) in Port Alberni. Treat gum disease below the gumline with gentle, thorough care.",
    intro:
      "A dental deep cleaning (scaling and root planing) goes beyond a routine cleaning. It's recommended when gum disease or heavy buildup below the gumline needs targeted treatment.",
    sections: [
      {
        paragraphs: [
          "Gum disease develops when plaque and bacteria accumulate on teeth and gums. Signs can include bleeding, swelling, persistent bad breath, or gums pulling away from teeth.",
          "Deep cleaning removes bacteria from below the gumline, helps prevent disease from progressing, and supports healthier gums and fresher breath."
        ]
      },
      {
        heading: "Why it matters",
        bullets: [
          "Treats gum disease at the source",
          "Reduces risk of tooth loss",
          "Supports overall health because gum disease is linked to heart disease, diabetes, and more",
          "Often paired with more frequent maintenance visits afterward"
        ]
      }
    ]
  },
  {
    slug: "root-canal-therapy",
    title: "Root Canal Therapy",
    category: "Endodontics",
    categorySlug: "endodontics",
    metaDescription:
      "Root canal therapy in Port Alberni, BC. Relieve tooth pain, remove infection, and save your natural tooth with Dr. Gary.",
    intro:
      "Root canal therapy treats infection in the soft tissue inside a tooth (the pulp) so the tooth can be saved instead of extracted. Modern techniques make treatment far more comfortable than its reputation suggests.",
    sections: [
      {
        heading: "Signs you may need a root canal",
        bullets: [
          "Persistent toothache or sensitivity to hot and cold",
          "Swelling around a tooth or in the gums",
          "Discolouration of a tooth",
          "Pain when chewing or biting"
        ]
      },
      {
        paragraphs: [
          "Treatment removes infected pulp, cleans and shapes the canals, and seals the tooth. A crown is often placed afterward to protect and strengthen the tooth long-term. With rotary endodontic tools, many procedures are faster and quieter than ever."
        ]
      }
    ]
  },
  {
    slug: "rotary-endodontics",
    title: "Rotary Endodontics",
    category: "Endodontics",
    categorySlug: "endodontics",
    metaDescription:
      "Rotary endodontics for faster, more comfortable root canals in Port Alberni at Harbour View Dental.",
    intro:
      "Rotary endodontics uses electric handpieces with nickel-titanium instruments to clean and shape root canals more efficiently than traditional manual files. This means quicker appointments and a more comfortable experience.",
    sections: [
      {
        paragraphs: [
          "These instruments are flexible enough to follow curved canals accurately while removing infected tissue thoroughly. For patients, that often means less time in the chair and less post-treatment soreness.",
          "Rotary endodontics is one of several technologies we use to make root canal therapy as smooth as possible."
        ]
      }
    ]
  },
  {
    slug: "extractions",
    title: "Tooth Extractions",
    category: "Oral Surgery",
    categorySlug: "oral-surgery",
    metaDescription:
      "Gentle tooth extractions and wisdom teeth removal in Port Alberni. Comfortable care when a tooth can't be saved.",
    intro:
      "When a tooth is too damaged to save, or wisdom teeth are impacted or causing crowding, extraction may be the best path forward. Our team prioritizes your comfort and explains every step before we begin.",
    sections: [
      {
        heading: "Reasons for extraction",
        bullets: [
          "Severe decay or infection that can't be treated with a filling or root canal",
          "Impacted wisdom teeth trapped beneath bone or gums",
          "Crowding when there isn't enough room for teeth to align properly",
          "Advanced gum disease affecting tooth stability"
        ]
      },
      {
        heading: "After your extraction",
        bullets: [
          "Rest and keep your head elevated for the first day",
          "Change gauze as directed and use ice or pain medication as we recommend",
          "Avoid straws and smoking while healing",
          "Call us right away if bleeding persists or pain worsens"
        ]
      }
    ]
  },
  {
    slug: "sedation-dentistry-services",
    title: "Sedation Dentistry",
    category: "Sedation Dentistry",
    categorySlug: "sedation-dentistry",
    metaDescription:
      "Sedation dentistry in Port Alberni for dental anxiety. Oral conscious sedation monitored by Dr. Gary for safe, relaxed visits.",
    intro:
      "Sedation dentistry uses medication to help you relax for a better dental experience, especially if you feel anxious, need multiple procedures, or simply want longer appointments to feel shorter.",
    sections: [
      {
        paragraphs: [
          "Sedation helps your body relax more completely, which can improve the effectiveness of local anesthesia. It's closely monitored by Dr. Gary and our team throughout your visit."
        ]
      },
      {
        heading: "Oral conscious sedation",
        paragraphs: [
          "Many patients choose oral conscious sedation for deeper relaxation. You remain awake and able to respond, but in a calm, drowsy state, and many remember little about the procedure afterward. It's a popular option for dental anxiety or complex treatment plans."
        ]
      }
    ]
  }
];

const treatmentMap = new Map(treatments.map((t) => [t.slug, t]));

export function getTreatment(slug: string) {
  return treatmentMap.get(slug);
}

export function getAllTreatmentSlugs() {
  return treatments.map((t) => t.slug);
}

export function getTreatmentsForCategory(categorySlug: string) {
  return treatments.filter((t) => t.categorySlug === categorySlug);
}

export function treatmentHref(slug: string) {
  return `/services/${slug}`;
}
