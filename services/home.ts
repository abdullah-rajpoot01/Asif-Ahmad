import fs from 'fs-extra';
import path from 'path';

interface HeroSection {
  heading: string;
  subheading: string;
  badge:string;
  phone: string;
  whatsapp: string;
  image: string;
  cardTitle: string;
  cardDescription: string;
}

/** 
 * Reads and automatically parses the hero section configuration from a JSON file
 * @returns Promise with the parsed hero section data or null if error occurs
 */
export async function readHeroSection(): Promise<HeroSection | null> {
  // Use path.join to ensure correct pathing relative to project root
  const filePath = path.join(process.cwd(), 'data', 'home', 'hero_section.json');
  
  try {
    // readJson handles both reading the file and JSON.parse() internally
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading hero section:", error);
    return null;
  }
}



interface PracticeArea {
  title: string;
  description: string;
  link: string;
}

interface PracticeAreasSection {
  heading: string;
  subheading: string;
  badge: string;
  areas: PracticeArea[];
}

/** 
 * Reads and automatically parses the practice areas section configuration from a JSON file
 * @returns Promise with the parsed practice areas section data or null if error occurs
 */
export async function readPracticeAreasSection(): Promise<PracticeAreasSection | null> {
  // Use path.join to ensure correct pathing relative to project root
  const filePath = path.join(process.cwd(), 'data', 'home', 'practice_areas_section.json');
  
  try {
    // readJson handles both reading the file and JSON.parse() internally
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading practice areas section:", error);
    return null;
  }
}


interface Stat {
  label: string;
  value: string;
}

interface Cta {
  label: string;
  link: string;
}

interface AboutSection {
  heading: string;
  subheading: string;
  badge: string;
  description: string;
  stats: Stat[];
  cta: Cta;
  highlights: string[];
}

/** 
 * Reads and automatically parses the about section configuration from a JSON file
 * @returns Promise with the parsed about section data or null if error occurs
 */
export async function readAboutSection(): Promise<AboutSection | null> {
  // Use path.join to ensure correct pathing relative to project root
  const filePath = path.join(process.cwd(), 'data', 'home', 'about_section.json');
  
  try {
    // readJson handles both reading the file and JSON.parse() internally
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading about section:", error);
    return null;
  }
}


interface Point {
  title: string;
  description: string;
}

interface WhyChooseUsSection {
  heading: string;
  subheading: string;
  badge: string;
  points: Point[];
}

/** 
 * Reads and automatically parses the why choose us section configuration from a JSON file
 * @returns Promise with the parsed why choose us section data or null if error occurs
 */
export async function readWhyChooseUsSection(): Promise<WhyChooseUsSection | null> {
  // Use path.join to ensure correct pathing relative to project root
  const filePath = path.join(process.cwd(), 'data', 'home', 'why_choose_us_section.json');
  
  try {
    // readJson handles both reading the file and JSON.parse() internally
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading why choose us section:", error);
    return null;
  }
}


interface Testimonial {
  name: string;
  feedback: string;
  rating: number;
}

interface TestimonialsSection {
  heading: string;
  subheading: string;
  badge: string;
  testimonials: Testimonial[];
}

/** 
 * Reads and automatically parses the testimonials section configuration from a JSON file
 * @returns Promise with the parsed testimonials section data or null if error occurs
 */
export async function readTestimonialsSection(): Promise<TestimonialsSection | null> {
  // Use path.join to ensure correct pathing relative to project root
  const filePath = path.join(process.cwd(), 'data', 'home', 'testimonials_section.json');
  
  try {
    // readJson handles both reading the file and JSON.parse() internally
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading testimonials section:", error);
    return null;
  }
}


interface Cta {
  label: string;
  link: string;
}

interface CtaSection {
  heading: string;
  subheading: string;
  cta: Cta;
}

/** 
 * Reads and automatically parses the CTA section configuration from a JSON file
 * @returns Promise with the parsed CTA section data or null if error occurs
 */
export async function readCtaSection(): Promise<CtaSection | null> {
  // Use path.join to ensure correct pathing relative to project root
  const filePath = path.join(process.cwd(), 'data', 'home', 'cta_section.json');
  
  try {
    // readJson handles both reading the file and JSON.parse() internally
    return await fs.readJson(filePath);
  } catch (error) {
    console.error("Error reading CTA section:", error);
    return null;
  }
}