export interface BlogPost {
  title: string;
  category: string;
  readTime: number;
  date: string;
  updatedDate: string;
  excerpt: string;
  content: string;
  relatedSlugs: string[];
  serviceLink: string;
  serviceLinkText: string;
  faqs: { q: string; a: string }[];
  /** Optional <title> override (keep under ~60 characters, keyword first). */
  metaTitle?: string;
  /** Optional meta description override (140–158 characters). */
  metaDescription?: string;
  /** Optional direct-answer paragraph shown at the top of the post (featured-snippet / AI-answer friendly). */
  quickAnswer?: string;
}
