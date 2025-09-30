import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    // Required fields
    title: z.string(),
    description: z.string().max(160),
    date: z.coerce.date(),
    
    // Project status
    status: z.enum(['active', 'complete', 'archived']).default('complete'),
    featured: z.boolean().default(false),
    
    // Technical details
    tech: z.array(z.string()),
    tools: z.array(z.string()).optional(),
    category: z.enum(['hardware', 'software', 'embedded', 'web']).default('hardware'),
    
    // Links
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    video: z.string().url().optional(),
    paper: z.string().url().optional(),
    comingSoon: z.boolean().default(false), // Mark projects with coming soon features
    
    // Images
    image: z.string().default('/images/projects/default.jpg'),
    gallery: z.array(z.string()).optional(),
    
    // Metadata
    duration: z.string().optional(), // "3 months", "2 weeks"
    team: z.array(z.string()).optional(), // ["Solo"] or ["John Doe", "Jane Smith"]
    role: z.string().optional(), // "Lead Developer"
    company: z.string().optional(), // "Warcola Honey Farms"
    
    // Outcomes
    impact: z.string().optional(), // Business impact or key metric
    lessons: z.array(z.string()).optional(), // Key learnings
    awards: z.array(z.string()).optional(), // Any recognition
  })
});

export const collections = {
  projects: work, // Collection named 'projects' to match page expectations
};