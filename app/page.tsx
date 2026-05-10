import { Github, Mail, Linkedin, ExternalLink, Code2, Terminal, Cpu } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 dark:bg-blue-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 dark:bg-purple-600/20 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 py-20 lg:py-32 relative z-10">
        
        {/* Hero Section */}
        <section className="animate-fade-in-up space-y-8 mb-32">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4 glass">
            👋 Welcome to my portfolio
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Developer</span>.<br />
            Building digital experiences.
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            I specialize in crafting elegant, scalable, and user-centric web applications. 
            Passionate about clean code, modern architecture, and solving complex problems.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-all active:scale-95 shadow-lg shadow-slate-900/20 dark:shadow-white/10 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <a href="https://github.com/hello-vibe-web" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 font-medium transition-all active:scale-95 glass flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section className="animate-fade-in-up [animation-delay:200ms] mb-32">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-2">
            <Cpu className="w-6 h-6 text-blue-500" />
            Core Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'GraphQL', 'AWS'].map((skill) => (
              <div key={skill} className="glass p-4 rounded-2xl flex items-center justify-center font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 transition-all cursor-default">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="animate-fade-in-up [animation-delay:400ms] mb-32">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-2">
            <Code2 className="w-6 h-6 text-purple-500" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "E-Commerce Platform", desc: "A full-stack headless commerce solution built with Next.js and Stripe.", tag: "Next.js" },
              { title: "AI Analytics Dashboard", desc: "Real-time data visualization tool for AI model monitoring.", tag: "React" },
              { title: "Task Management API", desc: "High-performance REST API built with Node.js and PostgreSQL.", tag: "Backend" },
              { title: "Vibe UI Component Library", desc: "An open-source, accessible React component library.", tag: "Open Source" }
            ].map((project, i) => (
              <div key={i} className="group glass p-8 rounded-3xl hover:-translate-y-1 transition-all duration-300">
                <div className="mb-4 flex justify-between items-start">
                  <div className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {project.tag}
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer/Contact */}
        <footer id="contact" className="animate-fade-in-up [animation-delay:600ms] border-t border-slate-200 dark:border-slate-800 pt-12 mt-32 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
            <Terminal className="w-6 h-6 text-blue-500" />
            Hello Vibe
          </div>
          <div className="flex gap-4">
            <a href="#" className="p-3 rounded-full glass text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full glass text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full glass text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </footer>

      </div>
    </main>
  );
}
