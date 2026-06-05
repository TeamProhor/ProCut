export const homeTranslations = {
  en: {
    hero: {
      title: "The open source",
      subtitle: "Video editor",
      description:
        "A simple but powerful video editor that gets the job done. Works on any platform.",
      cta: "Try early beta",
    },
    header: {
      roadmap: "Roadmap",
      contributors: "Contributors",
      sponsors: "Sponsors",
      blog: "Blog",
      projects: "Projects",
      copySvg: "Copy SVG",
      downloadSvg: "Download SVG",
      brandAssets: "Brand assets",
    },
    footer: {
      description: "The privacy-first video editor that feels simple to use.",
      resources: "Resources",
      company: "Company",
      roadmap: "Roadmap",
      changelog: "Changelog",
      blog: "Blog",
      privacy: "Privacy",
      terms: "Terms of use",
      contributors: "Contributors",
      sponsors: "Sponsors",
      brand: "Brand",
      about: "About",
      allRightsReserved: "All Rights Reserved",
    },
  },
  bn: {
    hero: {
      title: "একটি ওপেন সোর্স",
      subtitle: "ভিডিও এডিটর",
      description:
        "একটি সহজ কিন্তু শক্তিশালী ভিডিও এডিটর যা আপনার কাজ শেষ করে দেয়। সব প্লাটফর্মে কাজ করে।",
      cta: "বেটা সংস্করণ চেষ্টা করুন",
    },
    header: {
      roadmap: "রোডম্যাপ",
      contributors: "অবদানকারী",
      sponsors: "স্পনসর",
      blog: "ব্লগ",
      projects: "প্রজেক্টসমূহ",
      copySvg: "SVG কপি করুন",
      downloadSvg: "SVG ডাউনলোড করুন",
      brandAssets: "ব্র্যান্ড অ্যাসেটস",
    },
    footer: {
      description: "গোপনীয়তা-প্রথম ভিডিও এডিটর যা ব্যবহার করা সহজ মনে হয়।",
      resources: "অ্যাসেটস",
      company: "কোম্পানি",
      roadmap: "রোডম্যাপ",
      changelog: "চেঞ্জলগ",
      blog: "ব্লগ",
      privacy: "গোপনীয়তা",
      terms: "ব্যবহারের শর্তাবলী",
      contributors: "অবদানকারী",
      sponsors: "স্পনসর",
      brand: "ব্র্যান্ড",
      about: "সম্পর্কে",
      allRightsReserved: "সর্বস্বত্ব সংরক্ষিত",
    },
  },
} as const;

export type HomeTranslations = typeof homeTranslations.en;
