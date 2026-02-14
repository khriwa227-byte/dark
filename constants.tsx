
import { FAQItem, PricingPlan } from './types';

export const FAQS: FAQItem[] = [
  {
    question: "Hoe snel ontvang ik mijn toegang?",
    answer: "Direct na betaling ontvang je binnen 5 minuten je logingegevens via WhatsApp. Setup duurt nog eens 5 minuten. Je kunt binnen 10 minuten al kijken."
  },
  {
    question: "Hoe werkt de onboarding?",
    answer: "Abonneer op een pakket en we sturen je direct je logingegevens via WhatsApp. Dit proces duurt ongeveer 5 minuten vanaf het moment dat je betaalt. Je krijgt ook een setup-handleiding meegestuurd."
  },
  {
    question: "Is IPTV legaal in Nederland?",
    answer: "Ja, het gebruik van IPTV-diensten is legaal in Nederland. IPTVKopen is een legitieme IPTV-aanbieder met premium infrastructuur en 24/7 support."
  },
  {
    question: "Zijn er beperkingen op aanvragen?",
    answer: "Nee! Met je abonnement krijg je onbeperkte toegang tot alle 65.000+ kanalen en 175.000+ films & series. Stream zoveel je wilt."
  },
  {
    question: "Hoe werkt de pauze-functie?",
    answer: "We begrijpen dat je niet altijd actief kijkt. Als je je abonnement pauzeert, wordt de factureringsperiode bevroren. Bijvoorbeeld: gebruik je 21 dagen en pauzeer je daarna, dan heb je nog 10 dagen over voor later."
  },
  {
    question: "Krijg ik een gratis proefperiode?",
    answer: "We bieden geen gratis proefperiodes aan. In plaats daarvan krijg je een 15-dagen geld-terug-garantie. Dit is beter omdat je volledige toegang hebt (niet beperkt) en meer tijd om alles grondig te testen."
  },
  {
    question: "Welke apparaten worden ondersteund?",
    answer: "IPTVKopen werkt op vrijwel alle apparaten: Smart TV's (Samsung, LG, Sony), Fire Stick, Apple TV, Android/iOS telefoons en tablets, PC/Mac, Android TV boxes, en meer."
  },
  {
    question: "Buffer de stream?",
    answer: "Nee! We gebruiken premium servers met 99.9% uptime garantie. Geen buffering, geen lag, geen onderbrekingen. Prime kwaliteit, altijd."
  },
  {
    question: "Krijg ik Nederlandse kanalen?",
    answer: "Ja! Alle Nederlandse kanalen zijn inbegrepen: NPO 1/2/3, RTL 4/5/7/8, SBS6/9, Veronica, NET5, en meer. Plus Belgische en internationale kanalen."
  }
];

export interface DevicePricing {
  devices: number;
  price: string;
  monthlyPrice: string;
}

export interface SubscriptionTier {
  tier: "Basis" | "Premium";
  price: string;
  monthlyPrice: string;
  savings?: string;
  devicePricing: DevicePricing[];
  features: string[];
}

export interface PeriodPlan {
  months: number;
  label: string;
  description: string;
  tiers: SubscriptionTier[];
}

export const PERIOD_PLANS: PeriodPlan[] = [
  {
    months: 3,
    label: "3 Maanden",
    description: "3 MAANDEN TOEGANG",
    tiers: [
      {
        tier: "Basis",
        price: "€34,99",
        monthlyPrice: "€10,00",
        devicePricing: [
          { devices: 1, price: "€24,99", monthlyPrice: "€7,66" },
          { devices: 2, price: "€39,99", monthlyPrice: "€13,33" },
          { devices: 3, price: "€49,99", monthlyPrice: "€16,66" },
          { devices: 4, price: "€59,99", monthlyPrice: "€20,00" }
        ],
        features: [
          "SD/HD/FULL HD/UHD/4K Kwaliteit",
          "+80.000 Kanalen + Netflix",
          "RTL, NPO, ZIGGO, SBS, ESPN",
          "+140.000 Films & Series",
          "Wekelijkse Updates",
          "24/7 Support NL & BE",
          "100% Anoniem",
          "AntiFreeze Technologie",
          "Alle Apparaten",
          "VPN Inbegrepen",
          "Exclusieve NL & BE Content",
          "Netflix, Amazon, HBO, Apple TV, Hulu"
        ]
      },
      {
        tier: "Premium",
        price: "€45,99",
        monthlyPrice: "€15,00",
        devicePricing: [
          { devices: 1, price: "€34,99", monthlyPrice: "€11,67" },
          { devices: 2, price: "€45,99", monthlyPrice: "€15,00" },
          { devices: 3, price: "€74,99", monthlyPrice: "€21,67" },
          { devices: 4, price: "€89,99", monthlyPrice: "€26,67" }
        ],
        features: [
          "SD/HD/FULL HD/4K/8K/HDR-VR",
          "+80.000 Kanalen + Netflix",
          "RTL, NPO, ZIGGO, SBS, ESPN, VTM",
          "+200.000 Films & Series",
          "Dagelijkse Updates",
          "Alle Sport PPV Events",
          "VIP 24/7 Support",
          "Enterprise Anti-Freeze PRO",
          "Persoonlijke VIP Manager",
          "Alle Apparaten",
          "VPN Inbegrepen",
          "Exclusieve VIP Content",
          "Netflix, Amazon, HBO, Apple TV, Hulu"
        ]
      }
    ]
  },
  {
    months: 6,
    label: "6 Maanden",
    description: "6 MAANDEN TOEGANG",
    tiers: [
      {
        tier: "Basis",
        price: "€49,99",
        monthlyPrice: "€6,67",
        devicePricing: [
          { devices: 1, price: "€34,99", monthlyPrice: "€5,00" },
          { devices: 2, price: "€49,99", monthlyPrice: "€6,67" },
          { devices: 3, price: "€69,99", monthlyPrice: "€10,00" },
          { devices: 4, price: "€89,99", monthlyPrice: "€12,50" }
        ],
        features: [
          "SD/HD/FULL HD/UHD/4K Kwaliteit",
          "+80.000 Kanalen + Netflix",
          "RTL, NPO, ZIGGO, SBS, ESPN",
          "+140.000 Films & Series",
          "Wekelijkse Updates",
          "24/7 Support NL & BE",
          "100% Anoniem",
          "AntiFreeze Technologie",
          "Alle Apparaten",
          "VPN Inbegrepen",
          "Exclusieve NL & BE Content",
          "Netflix, Amazon, HBO, Apple TV, Hulu"
        ]
      },
      {
        tier: "Premium",
        price: "€79,99",
        monthlyPrice: "€10,00",
        savings: "Bespaar 35%",
        devicePricing: [
          { devices: 1, price: "€44,99", monthlyPrice: "€7,50" },
          { devices: 2, price: "€79,99", monthlyPrice: "€10,00" },
          { devices: 3, price: "€99,99", monthlyPrice: "€15,00" },
          { devices: 4, price: "€139,99", monthlyPrice: "€19,17" }
        ],
        features: [
          "SD/HD/FULL HD/4K/8K/HDR-VR",
          "+80.000 Kanalen + Netflix",
          "RTL, NPO, ZIGGO, SBS, ESPN, VTM",
          "+200.000 Films & Series",
          "Dagelijkse Updates",
          "Alle Sport PPV Events",
          "VIP 24/7 Support",
          "Enterprise Anti-Freeze PRO",
          "Persoonlijke VIP Manager",
          "Alle Apparaten",
          "VPN Inbegrepen",
          "Exclusieve VIP Content",
          "Netflix, Amazon, HBO, Apple TV, Hulu"
        ]
      }
    ]
  },
  {
    months: 12,
    label: "12+3 Maanden",
    description: "12+3 MAANDEN TOEGANG",
    tiers: [
      {
        tier: "Basis",
        price: "€88,99",
        monthlyPrice: "€5,00",
        devicePricing: [
          { devices: 1, price: "€59,99", monthlyPrice: "€4,00" },
          { devices: 2, price: "€88,99", monthlyPrice: "€5,00" },
          { devices: 3, price: "€139,99", monthlyPrice: "€7,50" },
          { devices: 4, price: "€179,99", monthlyPrice: "€9,17" }
        ],
        features: [
          "SD/HD/FULL HD/UHD/4K Kwaliteit",
          "+80.000 Kanalen + Netflix",
          "RTL, NPO, ZIGGO, SBS, ESPN",
          "+140.000 Films & Series",
          "Wekelijkse Updates",
          "24/7 Support NL & BE",
          "100% Anoniem",
          "AntiFreeze Technologie",
          "Alle Apparaten",
          "VPN Inbegrepen",
          "Exclusieve NL & BE Content",
          "Netflix, Amazon, HBO, Apple TV, Hulu"
        ]
      },
      {
        tier: "Premium",
        price: "€125,99",
        monthlyPrice: "€8,33",
        savings: "Bespaar 50%",
        devicePricing: [
          { devices: 1, price: "€78,99", monthlyPrice: "€5,83" },
          { devices: 2, price: "€125,99", monthlyPrice: "€8,33" },
          { devices: 3, price: "€159,99", monthlyPrice: "€12,50" },
          { devices: 4, price: "€199,99", monthlyPrice: "€15,00" }
        ],
        features: [
          "SD/HD/FULL HD/4K/8K/HDR-VR",
          "+80.000 Kanalen + Netflix",
          "RTL, NPO, ZIGGO, SBS, ESPN, VTM",
          "+200.000 Films & Series",
          "Dagelijkse Updates",
          "Alle Sport PPV Events",
          "VIP 24/7 Support",
          "Enterprise Anti-Freeze PRO",
          "Persoonlijke VIP Manager",
          "Alle Apparaten",
          "VPN Inbegrepen",
          "Exclusieve VIP Content",
          "Netflix, Amazon, HBO, Apple TV, Hulu"
        ]
      }
    ]
  }
];

export const SERVICES = [
  "Nederlandse kanalen", "Belgische kanalen", "Sport live", "Films & Series", "Internationale kanalen", 
  "VOD", "Catch-up TV", "EPG", "Multi-screen", "99.9% uptime", "HD & 4K", "Formule 1", "Eredivisie"
];

export const CHANNEL_LOGOS = [
  { name: "ESPN", logo: "/assets/channels/espn.png" },
  { name: "Viaplay", logo: "/assets/channels/viaplay.png" },
  { name: "Ziggo Sport", logo: "/assets/channels/ziggo-sport.png" },
  { name: "Eurosport", logo: "/assets/channels/eurosport.png" },
  { name: "Sky Sports", logo: "/assets/channels/sky-sports.png" },
  { name: "DAZN", logo: "/assets/channels/dazn.png" },
  { name: "F1", logo: "/assets/channels/f1.png" }
];

export const TOP_FILMS = [
  { title: "Gladiator II", posterUrl: "/assets/posters/gladiator-2.jpg" },
  { title: "Wicked", posterUrl: "/assets/posters/wicked.jpg" },
  { title: "Moana 2", posterUrl: "/assets/posters/moana-2.jpg" },
  { title: "Red One", posterUrl: "/assets/posters/red-one.jpg" },
  { title: "Dune: Part Two", posterUrl: "/assets/posters/dune-2.jpg" },
  { title: "Deadpool & Wolverine", posterUrl: "/assets/posters/deadpool-wolverine.jpg" },
  { title: "The Substance", posterUrl: "/assets/posters/the-substance.jpg" },
  { title: "Inside Out 2", posterUrl: "/assets/posters/inside-out-2.jpg" },
  { title: "Joker: Folie à Deux", posterUrl: "/assets/posters/joker-folie-a-deux.jpg" },
  { title: "Beetlejuice Beetlejuice", posterUrl: "/assets/posters/beetlejuice-2.jpg" },
  { title: "Alien: Romulus", posterUrl: "/assets/posters/alien-romulus.jpg" },
  { title: "Despicable Me 4", posterUrl: "/assets/posters/despicable-me-4.jpg" },
  { title: "Conclave", posterUrl: "/assets/posters/conclave.jpg" },
  { title: "Heretic", posterUrl: "/assets/posters/heretic.jpg" },
  { title: "F1", posterUrl: "/assets/posters/f1.jpg" }
];

export const TOP_TVSHOWS_NL = [
  { title: "Mocro Maffia", posterUrl: "/assets/tvshows/mocro-maffia.jpg" },
  { title: "Gooische Vrouwen", posterUrl: "/assets/tvshows/gooische-vrouwen.jpg" },
  { title: "LOL: Last One Laughing", posterUrl: "/assets/tvshows/lol-last-one-laughing.jpg" },
  { title: "Vandaag Inside", posterUrl: "/assets/tvshows/vandaag-inside.jpg" },
  { title: "Winter Vol Liefde", posterUrl: "/assets/tvshows/winter-vol-liefde.jpg" },
  { title: "Pandora", posterUrl: "/assets/tvshows/pandora.jpg" },
  { title: "Sprekend Nederland", posterUrl: "/assets/tvshows/sprekend-nederland.jpg" }
];

export const TOP_TVSHOWS_INTL = [
  { title: "Squid Game", posterUrl: "/assets/tvshows-intl/squid-game.jpg" },
  { title: "Wednesday", posterUrl: "/assets/tvshows-intl/wednesday.jpg" },
  { title: "The Last of Us", posterUrl: "/assets/tvshows-intl/the-last-of-us.jpg" },
  { title: "Stranger Things", posterUrl: "/assets/tvshows-intl/stranger-things.jpg" },
  { title: "Breaking Bad", posterUrl: "/assets/tvshows-intl/breaking-bad.jpg" },
  { title: "House of the Dragon", posterUrl: "/assets/tvshows-intl/house-of-the-dragon.jpg" },
  { title: "The Bear", posterUrl: "/assets/tvshows-intl/the-bear.jpg" },
  { title: "Severance", posterUrl: "/assets/tvshows-intl/severance.jpg" },
  { title: "Shōgun", posterUrl: "/assets/tvshows-intl/shogun.jpg" },
  { title: "Reacher", posterUrl: "/assets/tvshows-intl/reacher.jpg" }
];
