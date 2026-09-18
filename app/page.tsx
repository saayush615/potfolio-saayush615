'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowUpRight,
  BookOpen,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  X,
  Youtube,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const ease = [0.22, 1, 0.36, 1] as const;

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/saayush615', icon: Github },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/saayush615',
    icon: Linkedin,
  },
  { label: 'X', href: 'https://x.com/saayush615', icon: X },
  { label: 'Email', href: 'mailto:saayush615@gmail.com', icon: Mail },
  { label: 'Phone', href: 'tel:+917482101020', icon: Phone },
  { label: 'Dev.to', href: 'https://dev.to/singhaayush', icon: BookOpen },
];

const skillGroups = [
  { label: 'Languages', items: ['JavaScript', 'TypeScript', 'Python'] },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'React Router', 'TanStack Query', 'Tailwind CSS', 'Vite', 'shadcn/ui'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT', 'OAuth 2.0'],
  },
  { label: 'Databases', items: ['MongoDB', 'PostgreSQL'] },
  {
    label: 'AI / GenAI',
    items: ['RAG', 'LangChain', 'LangGraph', 'Vector Databases', 'OpenAI APIs', 'Gemini APIs'],
  },
  {
    label: 'DevOps & Tools',
    items: ['Docker', 'AWS ECS Fargate', 'GitHub Actions', 'GitHub', 'Postman'],
  },
];

const projects = [
  {
    number: '01',
    name: 'EcoBazar',
    subtitle: 'Full Stack E-commerce Platform',
    description:
      'A role-based e-commerce marketplace with JWT authentication and RBAC, supporting separate buyer and seller workflows for product, order, and account operations.',
    stack: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    number: '02',
    name: 'DevDocs Copilot',
    subtitle: 'Internal Knowledge Assistant',
    description:
      'An AI-powered assistant that separates web, API gateway, and AI service layers, with secure document retrieval and grounded answers from source documents.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'FastAPI', 'Python'],
  },
];

function FadeIn({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease }}
    >
      {children}
    </motion.section>
  );
}

function UnderlineLink({
  children,
  href,
  external = false,
}: {
  children: React.ReactNode;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="underline-link"
    >
      {children}
    </a>
  );
}

function ResumeDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2, ease }}
          className="rail-button"
        >
          Resume
        </motion.button>
      </DialogTrigger>
      <DialogContent className="resume-dialog">
        <DialogHeader className="sr-only">
          <DialogTitle>Resume</DialogTitle>
          <DialogDescription>Embedded resume PDF viewer.</DialogDescription>
        </DialogHeader>
        <div className="resume-toolbar">
          <span className="mono text-[11px] uppercase tracking-[0.22em] text-white/50">Aayush_Singh.pdf</span>
          <a href="/Aayush_Full_Stack_intern.pdf" download className="icon-action" aria-label="Download resume">
            <Download size={16} />
          </a>
        </div>
        <iframe title="Aayush Singh resume" src="/Aayush_Full_Stack_intern.pdf" className="resume-frame" />
      </DialogContent>
    </Dialog>
  );
}

function AboutJsonDialog() {
  const lines = [
    '{',
    '  "name": "Aayush Singh",',
    '  "role": "Software Engineer",',
    '  "email": "saayush615@gmail.com",',
    '  "github": "github.com/saayush615",',
    '  "linkedin": "linkedin.com/in/saayush615",',
    '  "resume": "/Aayush_Full_Stack_intern.pdf",',
    '  "skills": [',
    '    "TypeScript", "React", "Node.js",',
    '    "Python", "RAG", "Docker"',
    '  ]',
    '}',
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2, ease }}
          className="rail-button"
        >
          No BS
        </motion.button>
      </DialogTrigger>
      <DialogContent className="json-dialog">
        <DialogHeader className="sr-only">
          <DialogTitle>About JSON</DialogTitle>
          <DialogDescription>Essential facts and links.</DialogDescription>
        </DialogHeader>
        <div className="editor-tab">
          <span className="editor-dot" />
          <span>about.json</span>
          <span className="ml-auto text-white/30">×</span>
        </div>
        <div className="editor-body">
          <div className="line-numbers" aria-hidden="true">
            {lines.map((_, index) => <span key={index}>{String(index + 1).padStart(2, '0')}</span>)}
          </div>
          <pre>{lines.join('\n')}</pre>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function SocialRail() {
  const reduceMotion = useReducedMotion();

  return (
    <aside className="social-rail">
      <div className="social-list">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
            aria-label={label}
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
            transition={{ duration: 0.3, ease }}
            className="social-link"
          >
            <Icon size={17} strokeWidth={1.5} />
            <span>{label}</span>
          </motion.a>
        ))}
      </div>
      <div className="rail-actions">
        <ResumeDialog />
        <AboutJsonDialog />
      </div>
    </aside>
  );
}

function ProfileColumn() {
  return (
    <section className="profile-column">
      <div>
        <div className="profile-heading">
          <div className="profile-image-wrap">
            <Image src="/images/Social_Profile_Pic_compressed.png" alt="Aayush Singh" fill priority sizes="96px" className="profile-image" />
          </div>
          <div>
            <p className="mono text-[clamp(1.05rem,1.6vw,1.45rem)] font-medium tracking-[-0.05em]">Aayush Singh</p>
            <p className="mt-1 text-[12px] text-white/55">Software Engineer</p>
          </div>
        </div>
        <div className="location-line"><MapPin size={13} /> Pune, Maharashtra, India</div>
        <p className="bio">Full Stack Developer building AI-powered and scalable applications.</p>
      </div>

      <div className="experience-block">
        <div className="hairline" />
        <div className="eyebrow">Experience</div>
        <div className="experience-top">
          <div>
            <p className="text-[13px] font-medium text-white/90">Instaplex Solution</p>
            <p className="mt-1 text-[11px] text-white/50">MERN Stack Intern</p>
          </div>
          <span className="mono text-[10px] text-white/40">Apr 2026 — Jul 2026</span>
        </div>
        <ul className="experience-list">
          <li>Implemented TanStack Query for server-state management and client-side caching.</li>
          <li>Optimized API responses and reduced unnecessary requests during user input.</li>
          <li>Created a configurable event-driven rules engine for CRM workflows.</li>
        </ul>
      </div>

      <div className="open-to-work">
        <span className="status-dot" />
        <span>Open to full-stack / AI intern roles</span>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
      transition={{ duration: 0.3, ease }}
      className="project-card"
    >
      <div className="project-card-top">
        <span className="mono text-[11px] text-white/35">{project.number}</span>
        <div className="project-links" aria-label={`${project.name} links`}>
          <a href="https://github.com/saayush615" target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub`}><Github size={15} /></a>
          <a href="#now" aria-label={`${project.name} live preview`}><ExternalLink size={15} /></a>
          <a href="#writing" aria-label={`${project.name} demo video`}><Youtube size={15} /></a>
        </div>
      </div>
      <h3 className="project-title">{project.name} <span>— {project.subtitle}</span></h3>
      <p className="project-description">{project.description}</p>
      <div className="tag-list">
        {project.stack.map((tag) => <span key={tag} className="tag">{tag}</span>)}
      </div>
    </motion.article>
  );
}

function ContentColumn() {
  return (
    <main className="content-column">
      <FadeIn>
        <div className="content-section" id="project">
          <div className="section-label"><span>#</span>project</div>
          <div className="project-grid">{projects.map((project) => <ProjectCard key={project.name} project={project} />)}</div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="content-section" id="skills">
          <div className="section-label"><span>#</span>skills</div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div key={group.label} className="skill-group">
                <p className="skill-label">{group.label}</p>
                <div className="tag-list">{group.items.map((skill) => <span key={skill} className="tag">{skill}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="content-section" id="writing">
          <div className="section-label"><span>#</span>writing</div>
          <div className="article-list">
            {[
              ['Building a Production-Ready RAG Pipeline', 'AI / GenAI'],
              ['A Practical Guide to Object-Oriented Programming', 'JavaScript'],
              ['Git & GitHub: The Workflow That Scales', 'Tools'],
            ].map(([title, tag]) => (
              <a href="https://dev.to/shingaayush" target="_blank" rel="noreferrer" key={title} className="article-link">
                <span>{title}</span><span className="article-tag">{tag}</span><ArrowUpRight size={14} />
              </a>
            ))}
          </div>
          <UnderlineLink href="https://dev.to/shingaayush" external>View all articles on dev.to <span aria-hidden="true">→</span></UnderlineLink>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="content-section now-section" id="now">
          <div className="section-label"><span>#</span>now</div>
          <p className="now-copy">Open to full-stack / AI intern roles · exploring agentic RAG systems, scalable APIs, and thoughtful developer tooling.</p>
          <UnderlineLink href="mailto:saayush615@gmail.com">Start a conversation <span aria-hidden="true">→</span></UnderlineLink>
        </div>
      </FadeIn>
      <footer className="content-footer"><span>© 2026 Aayush Singh</span><span className="mono">built with intent</span></footer>
    </main>
  );
}

export default function Home() {
  return (
    <div className="portfolio-shell">
      <SocialRail />
      <ProfileColumn />
      <ContentColumn />
      <a className="quick-call" href="https://cal.com" target="_blank" rel="noreferrer"><PhoneCall size={14} /> Quick Call?</a>
    </div>
  );
}
