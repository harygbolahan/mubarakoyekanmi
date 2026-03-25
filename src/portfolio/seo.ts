// SEO utility functions for dynamic meta tag updates

export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const DEFAULT_SEO: SEOConfig = {
  title: "Mubarak Oyekanmi - Full Stack Engineer | React & TypeScript Specialist",
  description: "Full Stack Engineer specializing in React, TypeScript, and React Native. Building scalable fintech solutions, mobile apps, and modern web applications.",
  keywords: "Full Stack Developer, React Developer, TypeScript, React Native, Frontend Engineer, Mobile App Developer, Fintech Developer, Web Developer Nigeria",
  image: "https://mubarakoyekanmi.vercel.app/hero.png",
  url: "https://mubarakoyekanmi.vercel.app/",
  type: "website",
};

export function updateSEO(config: SEOConfig = {}) {
  const seo = { ...DEFAULT_SEO, ...config };

  // Update title
  if (seo.title) {
    document.title = seo.title;
  }

  // Update or create meta tags
  updateMetaTag("name", "description", seo.description);
  updateMetaTag("name", "keywords", seo.keywords);
  
  // Open Graph
  updateMetaTag("property", "og:title", seo.title);
  updateMetaTag("property", "og:description", seo.description);
  updateMetaTag("property", "og:image", seo.image);
  updateMetaTag("property", "og:url", seo.url);
  updateMetaTag("property", "og:type", seo.type);
  
  // Twitter
  updateMetaTag("property", "twitter:title", seo.title);
  updateMetaTag("property", "twitter:description", seo.description);
  updateMetaTag("property", "twitter:image", seo.image);
  updateMetaTag("property", "twitter:url", seo.url);
}

function updateMetaTag(
  attr: "name" | "property",
  key: string,
  content?: string
) {
  if (!content) return;

  let element = document.querySelector(`meta[${attr}="${key}"]`);
  
  if (element) {
    element.setAttribute("content", content);
  } else {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    element.setAttribute("content", content);
    document.head.appendChild(element);
  }
}

// Section-specific SEO configurations
export const SECTION_SEO = {
  home: {
    title: "Mubarak Oyekanmi - Full Stack Engineer | React & TypeScript Specialist",
    description: "Full Stack Engineer specializing in React, TypeScript, and React Native. Building scalable fintech solutions, mobile apps, and modern web applications.",
  },
  about: {
    title: "About Mubarak Oyekanmi - Full Stack Engineer",
    description: "Learn about my journey as a Full Stack Engineer, my passion for building scalable applications, and my expertise in React, TypeScript, and modern web technologies.",
  },
  projects: {
    title: "Projects - Mubarak Oyekanmi Portfolio",
    description: "Explore my portfolio of fintech applications, mobile apps, and web platforms built with React, TypeScript, React Native, and modern technologies.",
  },
  skills: {
    title: "Skills & Technologies - Mubarak Oyekanmi",
    description: "My technical expertise includes React, Next.js, TypeScript, React Native, Node.js, Python, and modern DevOps tools for building scalable applications.",
  },
  contact: {
    title: "Contact Mubarak Oyekanmi - Let's Build Something Great",
    description: "Get in touch to discuss your next project. Available for full-time opportunities and freelance work in web and mobile development.",
  },
};
