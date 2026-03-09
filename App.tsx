import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { TerminalTypewriter } from './components/TerminalTypewriter';

export default function App() {
  const education = [
    {
      school: 'Johns Hopkins University',
      location: 'Baltimore, MD',
      degree: 'Master of Science in Engineering, Electrical and Computer Engineering',
      period: 'Aug 2025 - May 2027 (Expected)',
    },
    {
      school: 'University of California, Davis',
      location: 'Davis, CA',
      degree: 'Bachelor of Science, Computer Science',
      period: 'Sep 2021 - Mar 2025',
    },
  ];

  const skillGroups = [
    {
      title: 'Technical',
      items: [
        'Python (pandas, NumPy, scikit-learn, PyTorch, TensorFlow)',
        'Java',
        'C++',
        'C',
        'SQL (basic)',
        'JavaScript',
        'HTML',
        'JSON',
      ],
    },
    {
      title: 'Developer Tools',
      items: [
        'Linux/Bash',
        'Git',
        'Jupyter',
        'Conda',
        'Data preprocessing pipelines',
        'Experimental evaluation',
        'Debugging',
      ],
    },
    {
      title: 'AI / ML',
      items: [
        'Machine learning',
        'Deep learning',
        'Computer vision',
        'Model training and evaluation',
        'Segmentation',
        'Multimodal registration',
        'Medical image analysis',
      ],
    },
    {
      title: 'Relevant Coursework',
      items: ['Machine Learning', 'Deep Learning', 'Computer Vision'],
    },
    {
      title: 'Current Coursework',
      items: [
        'Machine Learning for Signal Processing (EN.520.612)',
        'Audio Signal Processing (EN.520.645)',
        'Random Signal Analysis (EN.520.651)',
      ],
    },
    {
      title: 'Languages',
      items: ['English', 'Mandarin'],
    },
  ];

  const researchProjects = [
    {
      title: 'Multimodal MRI-MRA Registration for Trigeminal Neuralgia',
      organization: 'Johns Hopkins University',
      bullets: [
        'Developed a multimodal neuroimaging pipeline for MRI-MRA registration to support vessel localization in trigeminal neuralgia studies.',
        'Designed ROI-focused evaluation using overlap, intensity-similarity, and distance-based metrics to assess alignment quality beyond whole-brain registration scores.',
        'Investigated failure cases where global registration appeared acceptable but vessel-level alignment remained poor, and explored strategies using manual labels, pseudo-labels, and vessel-aware priors.',
      ],
    },
    {
      title: '3D Neurovascular Segmentation and Preprocessing Pipeline',
      organization: 'Johns Hopkins University',
      bullets: [
        'Built preprocessing workflows for 3D medical images, including masking, label conversion, cropping, image-space standardization, and quality control across heterogeneous scans.',
        'Integrated vessel segmentation outputs into downstream analysis to identify vascular structures corresponding to expert-annotated regions.',
        'Automated evaluation and data-processing scripts to improve reproducibility and efficiency in neuroimaging experiments.',
      ],
    },
    {
      title: 'Fine-Tuning LLMs on a Traditional Chinese Medicine Dataset',
      organization: 'Research Project',
      bullets: [
        'Led a team of five in a research-style project exploring large language model fine-tuning for specialized medical language applications.',
        'Curated and adapted a domain-specific Traditional Chinese Medicine dataset for supervised model training and evaluation.',
        'Fine-tuned multiple open-source LLMs, including LLaMA, Mistral, and Phi, and evaluated performance using perplexity, BLEU, and task-based comparison metrics.',
        'Authored a research manuscript comparing model performance and domain adaptation strategies.',
      ],
    },
    {
      title: 'Medical Imaging Data Preprocessing (TCGA and fastMRI)',
      organization: 'Research Project',
      bullets: [
        'Preprocessed clinical and genomic data from TCGA COADREAD Pan-Cancer Atlas using Python for downstream statistical and machine learning analysis.',
        'Cleaned metadata, standardized survival variables, and built exploratory analysis workflows including Kaplan-Meier analysis and Cox regression preparation.',
        'Processed fastMRI data for organization, format handling, and downstream model-ready usage.',
      ],
    },
    {
      title: 'Human Action Prediction from Skeletons',
      organization: 'Research Project',
      bullets: [
        'Built a temporal prediction pipeline to forecast future skeleton motion from prior sequential frames in video data.',
        'Designed preprocessing workflows to extract, align, and structure pose keypoints for downstream modeling.',
        'Developed a framework to predict 5 future frames of skeleton movement from the previous 30 frames using sequence-based modeling ideas.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3ED]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F3ED] border-b border-black/10">
        <div className="max-w-screen-2xl mx-auto px-8 py-6 flex items-center justify-between gap-8">
          <a href="#" className="flex items-center gap-1 group shrink-0">
            <span className="tracking-tight transition-transform duration-300 group-hover:scale-110">{'<'}X</span>
            <span className="text-purple-600 transition-transform duration-300 group-hover:rotate-180 inline-block">_</span>
            <span className="tracking-tight transition-transform duration-300 group-hover:scale-110">Z{'>'}</span>
          </a>
          <div className="flex items-center gap-6 md:gap-10 text-xs md:text-sm">
            <a href="#about" className="tracking-wider relative group">
              ABOUT
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#resume" className="tracking-wider relative group">
              RESUME
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#skills" className="tracking-wider relative group">
              SKILLS
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/projects/index.html" className="tracking-wider relative group">
              PROJECTS
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/photos.html" className="tracking-wider relative group">
              PHOTOS
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="tracking-wider relative group">
              CONTACT
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-24 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16 ml-8 flex justify-start">
            <div className="text-sm" style={{ fontFamily: "'Ubuntu Mono', monospace" }}>
              <TerminalTypewriter
                prompt="Dlwlx05:~/home$"
                actions={[
                  { type: 'pause' as const, duration: 800 },
                  { type: 'type' as const, text: 'cd UCD_Undergraduate' },
                  { type: 'pause' as const, duration: 1200 },
                  { type: 'delete' as const, count: 20 },
                  { type: 'pause' as const, duration: 500 },
                  { type: 'type' as const, text: 'cd JHU_Master' },
                  { type: 'pause' as const, duration: 1200 },
                  { type: 'delete' as const, count: 13 },
                  { type: 'pause' as const, duration: 500 },
                  { type: 'type' as const, text: 'sjhafhkofhashdfkjh', speed: 40 },
                  { type: 'pause' as const, duration: 400 },
                  { type: 'type' as const, text: 'asdfghjkl', speed: 35 },
                  { type: 'pause' as const, duration: 300 },
                  { type: 'type' as const, text: '???', speed: 30 },
                  { type: 'pause' as const, duration: 1000 },
                  { type: 'delete' as const, count: 31 },
                  { type: 'pause' as const, duration: 800 },
                ]}
                typeSpeed={80}
                deleteSpeed={50}
                loop={true}
                loopDelay={2000}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-3">
              <div className="w-full max-w-[600px] mx-auto lg:ml-auto lg:mr-0">
                <ImageWithFallback
                  src="/photos/IMG_0086.jpg"
                  alt="Portrait"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-3 flex items-center justify-center order-2">
              <div className="text-center space-y-3">
                <p className="text-xs tracking-[0.2em] text-black/50">ECE @ JOHNS HOPKINS UNIVERSITY</p>
                <h1 className="tracking-wider text-center">XUPENG (ZACK) ZHANG</h1>
                <p className="text-sm text-black/70">Machine Learning | Signal Processing | Computer Vision</p>
              </div>
            </div>

            <div className="lg:col-span-3 lg:col-start-1 order-3 lg:order-1">
              <div className="w-full max-w-[280px] mx-auto">
                <ImageWithFallback
                  src="/photos/IMG_2685_jpg.jpg"
                  alt="Portrait"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="tracking-wider mb-8">ABOUT</h2>
          <div className="space-y-6 text-black/70">
            <p>
              Graduate student in Electrical and Computer Engineering at Johns Hopkins University,
              with a Computer Science background from UC Davis. My focus is building robust ML systems
              for real-world signal and imaging problems.
            </p>
            <p>
              Current work includes multimodal MRI-MRA registration, neurovascular segmentation pipelines,
              and NIAM-based speech enhancement. I am actively exploring audio signal processing and random
              signal analysis in coursework and research.
            </p>
          </div>
        </div>
      </section>

      <section id="resume" className="py-24 px-8 bg-white/40 border-y border-black/10">
        <div className="max-w-screen-2xl mx-auto space-y-14">
          <div className="text-center">
            <h2 className="tracking-wider">RESUME HIGHLIGHTS</h2>
            <p className="mt-4 text-black/60 max-w-3xl mx-auto">
              Education, publication, and selected research projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 p-6 border border-black/10 bg-[#F5F3ED]">
              <p className="text-xs tracking-[0.2em] text-black/50 mb-3">CONTACT</p>
              <div className="space-y-3 text-sm">
                <p>
                  <span className="text-black/50">Phone</span>
                  <br />
                  <span>+1 (530) 407-8216</span>
                </p>
                <p>
                  <span className="text-black/50">Email</span>
                  <br />
                  <a href="mailto:xzhan419@jh.edu" className="relative group inline-block">
                    xzhan419@jh.edu
                    <span className="absolute -bottom-0.5 left-0 w-full h-px bg-black transition-all duration-300 group-hover:w-0"></span>
                  </a>
                </p>
                <p>
                  <span className="text-black/50">GitHub</span>
                  <br />
                  <a href="https://github.com/TXiaoxz" target="_blank" rel="noopener noreferrer" className="relative group inline-block">
                    github.com/TXiaoxz
                    <span className="absolute -bottom-0.5 left-0 w-full h-px bg-black transition-all duration-300 group-hover:w-0"></span>
                  </a>
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {education.map((item) => (
                <article key={item.school} className="p-6 border border-black/10 bg-[#F5F3ED] transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h3 className="tracking-wide">{item.school}</h3>
                      <p className="text-black/60 mt-1">{item.location}</p>
                    </div>
                    <p className="text-sm text-black/60">{item.period}</p>
                  </div>
                  <p className="mt-4">{item.degree}</p>
                </article>
              ))}
            </div>
          </div>

          <article className="p-6 border border-black/10 bg-[#F5F3ED]">
            <p className="text-xs tracking-[0.2em] text-black/50 mb-4">PUBLICATION</p>
            <h3 className="tracking-wide">Trajectory of Mobile Grasping Robot in Reinforcement Learning Application</h3>
            <p className="text-black/70 mt-3">
              X. Zhang, China Science and Technology, ISSN 1671-2064; CN11-4650/N, Jul 2024.
            </p>
          </article>

          <div className="space-y-6">
            <p className="text-xs tracking-[0.2em] text-black/50 text-center">SELECTED RESEARCH PROJECTS</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {researchProjects.map((project) => (
                <article key={project.title} className="p-6 border border-black/10 bg-[#F5F3ED] transition-transform duration-300 hover:-translate-y-1">
                  <h3 className="tracking-wide">{project.title}</h3>
                  <p className="text-sm text-black/60 mt-2">{project.organization}</p>
                  <ul className="mt-4 space-y-3 text-black/80 list-disc pl-5">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="tracking-wider mb-16 text-center">SKILLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {skillGroups.map((group) => (
              <article key={group.title} className="p-6 border border-black/10 bg-white/50">
                <h3 className="text-sm tracking-[0.18em] text-black/50 mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="px-3 py-1.5 border border-black/15 bg-[#F5F3ED] text-sm tracking-wide">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-8 bg-white/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="tracking-wider mb-8">GET IN TOUCH</h2>
          <div className="space-y-4">
            <p className="tracking-wide text-black/70">+1 (530) 407-8216</p>
            <p className="tracking-wide">
              <a href="mailto:xzhan419@jh.edu" className="relative group inline-block">
                xzhan419@jh.edu
                <span className="absolute -bottom-0.5 left-0 w-full h-px bg-black transition-all duration-300 group-hover:w-0"></span>
              </a>
            </p>
            <div className="flex items-center justify-center gap-8 mt-8">
              <a href="https://github.com/TXiaoxz" target="_blank" rel="noopener noreferrer" className="tracking-wide relative group">
                GITHUB
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 py-8 px-8">
        <div className="max-w-screen-2xl mx-auto text-center text-black/50">
          <p>© 2026 Xupeng Zhang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
