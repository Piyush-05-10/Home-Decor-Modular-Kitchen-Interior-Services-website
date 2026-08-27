import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
import {ArrowUpRight, Menu, X} from "lucide-react";
import "./styles.css";

const projects = [
  {id:"014", slug:"walnut-residence", name:"Walnut Residence", location:"Greater Noida", type:"Private Residence", area:"4,800 sq ft", year:"2026", style:"Warm Contemporary", image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85"},
  {id:"021", slug:"quiet-courtyard", name:"Quiet Courtyard", location:"Noida", type:"Villa", area:"6,200 sq ft", year:"2026", style:"Contemporary Indian", image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=85"},
  {id:"009", slug:"stone-house", name:"Stone House", location:"Gurgaon", type:"Private Residence", area:"3,200 sq ft", year:"2025", style:"Japandi", image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85"},
  {id:"027", slug:"brass-and-olive", name:"Brass & Olive", location:"Delhi", type:"Apartment", area:"2,700 sq ft", year:"2025", style:"Modern Classic", image:"https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1800&q=85"},
  {id:"031", slug:"monsoon-light", name:"Monsoon Light", location:"Ghaziabad", type:"Apartment", area:"2,150 sq ft", year:"2025", style:"Soft Minimal", image:"https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1800&q=85"},
  {id:"034", slug:"the-atelier", name:"The Atelier", location:"Noida", type:"Home Office", area:"1,200 sq ft", year:"2024", style:"Craft Modern", image:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85"}
];

const services = [
  ["01","Modular Kitchens","Bespoke kitchens designed around your rituals, storage needs and material palette.","/modular-kitchen","https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=85"],
  ["02","Interior Design","Layered residential interiors where architecture, furniture, light and art speak together.","/interior-design","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"],
  ["03","Wardrobes & Storage","Quietly engineered storage with considered proportions, hardware and finishes.","/wardrobes","https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"],
  ["04","Custom Furniture","One-off pieces developed around your space, posture, materials and everyday life.","/home-decor","https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"]
];

const extendedServices = [
  {
    id: "01",
    title: "Space Planning",
    desc: "Optimising spatial flow and functionality to ensure your environment works seamlessly with your daily life.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "02",
    title: "Concept Design",
    desc: "Developing a cohesive visual language through moodboards, material palettes, and 3D visualizations.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "03",
    title: "Bespoke Furniture",
    desc: "Designing and crafting custom furniture pieces that perfectly match the proportions and style of your space.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "04",
    title: "Modular Kitchens",
    desc: "Engineered kitchen systems that blend high-performance functionality with refined aesthetics.",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "05",
    title: "Turnkey Execution",
    desc: "End-to-end project management, overseeing contractors, vendors, and precise on-site installation.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85"
  }
];

const journalPosts = [
  { id: "j1", title: "The Art of Restraint in Modern Design", date: "August 2026", category: "Philosophy", image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=85" },
  { id: "j2", title: "Material Focus: Patinated Brass", date: "July 2026", category: "Materials", image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=85" },
  { id: "j3", title: "Integrating Natural Light in Urban Homes", date: "June 2026", category: "Architecture", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1200&q=85" },
];

function useRoute(){
  const [path,setPath]=useState(location.pathname);
  useEffect(()=>{const f=()=>setPath(location.pathname); addEventListener("popstate",f); return()=>removeEventListener("popstate",f)},[]);
  return path;
}
function go(path){ history.pushState({}, "", path); dispatchEvent(new PopStateEvent("popstate")); window.scrollTo({top:0,behavior:"instant"}); }

function ImageReveal({src,alt="",className=""}){return <div className={"image-reveal "+className}><img src={src} alt={alt} loading="lazy"/></div>}
function Label({children}){return <span className="eyebrow">{children}</span>}

function Header(){
  const [open,setOpen]=useState(false);
  const links=[["Projects","/portfolio"],["Services","/interior-design"],["About","/about"],["Journal","/blog"],["Contact","/contact"]];
  
  return (
    <>
      <header className="header">
        <button className="brand" onClick={()=>go("/")}>
          Atelier <em>Noir</em>
        </button>
        <nav>
          {links.map(([name, path]) => (
            <button key={name} onClick={()=>go(path)}>{name}</button>
          ))}
        </nav>
        <button className="header-cta" onClick={()=>go("/consultation")}>
          Consultation <ArrowUpRight size={14}/>
        </button>
        <button className="menu-btn" onClick={()=>setOpen(true)}><Menu/></button>
      </header>
      
      {open && (
        <div className="mobile-menu">
          <button className="mobile-menu-close" onClick={()=>setOpen(false)}><X size={32}/></button>
          <div className="mobile-nav">
            {links.concat([["Consultation","/consultation"]]).map(([name, path]) => (
              <button key={name} onClick={()=>{setOpen(false); go(path);}}>
                {name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function Footer(){
  return (
    <footer className="footer section-dark">
      <div className="footer-top">
        <div className="footer-brand">
          Designed for<br/>
          <em>considered living.</em>
        </div>
        <div className="footer-col">
          <span className="eyebrow">Explore</span>
          <button onClick={()=>go("/portfolio")}>Projects</button>
          <button onClick={()=>go("/interior-design")}>Services</button>
          <button onClick={()=>go("/about")}>The Studio</button>
          <button onClick={()=>go("/blog")}>Journal</button>
        </div>
        <div className="footer-col">
          <span className="eyebrow">Connect</span>
          <a href="mailto:studio@ateliernoir.in">studio@ateliernoir.in</a>
          <a href="tel:+919999999999">+91 99999 99999</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Atelier Noir</span>
        <span>Delhi NCR</span>
      </div>
    </footer>
  );
}

function Home(){
  return (
    <main>
      <section className="section-light hero">
        <div className="hero-copy">
          <h1 className="hero-title">
            <div className="text-reveal"><span>Intentionally</span></div><br/>
            <div className="text-reveal"><span><em>designed</em></span></div><br/>
            <div className="text-reveal"><span>spaces.</span></div>
          </h1>
          <p className="hero-desc">
            We build environments that feel tactile, calm, and tailored to your everyday rituals.
          </p>
          <button className="btn-text" onClick={()=>go("/consultation")}>
            Discuss your project <ArrowUpRight size={16}/>
          </button>
        </div>
        <div className="hero-image-wrap">
          <img src={projects[0].image} alt="Featured residence" />
        </div>
      </section>

      <section className="section-muted statement">
        <h2>We care about proportion, light, and <em>materiality.</em></h2>
        <ImageReveal src={projects[1].image} alt="Material detail" className="statement-img" />
        <div className="statement-text">
          <Label>Our Philosophy</Label>
          <p>The smallest decisions often make the biggest impact in a room. Our work is warm rather than loud, and contemporary without feeling disposable.</p>
          <button className="btn-text" onClick={()=>go("/about")}>About the studio <ArrowUpRight size={16}/></button>
        </div>
      </section>

      <section className="section-light projects-section">
        <div className="projects-intro">
          <h2>Selected Work</h2>
          <button className="btn-text" onClick={()=>go("/portfolio")}>View Archive <ArrowUpRight size={16}/></button>
        </div>
        
        <div className="projects-masonry">
          <button className="project-card p-large" onClick={()=>go(`/portfolio/${projects[2].slug}`)}>
            <ImageReveal src={projects[2].image} />
            <div className="project-meta">
              <h3>{projects[2].name}</h3>
              <span>{projects[2].location}</span>
            </div>
          </button>
          
          <button className="project-card p-tall" onClick={()=>go(`/portfolio/${projects[3].slug}`)}>
            <ImageReveal src={projects[3].image} />
            <div className="project-meta">
              <h3>{projects[3].name}</h3>
              <span>{projects[3].location}</span>
            </div>
          </button>
          
          <button className="project-card p-wide" onClick={()=>go(`/portfolio/${projects[4].slug}`)}>
            <ImageReveal src={projects[4].image} />
            <div className="project-meta">
              <h3>{projects[4].name}</h3>
              <span>{projects[4].location}</span>
            </div>
          </button>
        </div>
      </section>

      <section className="section-muted services-section">
        <Label>Expertise</Label>
        <div className="service-list">
          {services.map(([num, title, desc, path, img]) => (
            <button key={num} className="service-row" onClick={()=>go(path)}>
              <Label>{num}</Label>
              <h3>{title}</h3>
              <p className="service-desc">{desc}</p>
              <ArrowUpRight className="service-arrow" size={24}/>
              <img src={img} className="service-hover-img" alt={title}/>
            </button>
          ))}
        </div>
      </section>

      <section className="section-dark testimonial-section">
        <div>
          <Label>Client Perspective</Label>
          <blockquote className="testimonial-quote">
            "The team understood how we actually live, and translated that into a home that feels completely ours."
          </blockquote>
          <div className="testimonial-author">
            <strong>Ananya Mehta</strong>
            Walnut Residence
          </div>
        </div>
      </section>
    </main>
  );
}

function InnerPageTemplate({ eyebrow, title, subtitle, children }) {
  return (
    <main className="section-light" style={{ padding: "calc(80px + var(--space-12)) var(--space-8) var(--space-16)", minHeight: "100vh" }}>
      <div style={{ maxWidth: "800px", marginBottom: "var(--space-12)" }}>
        <Label>{eyebrow}</Label>
        <h1 style={{ fontSize: "clamp(3rem, 6vw, 6rem)", marginBottom: "var(--space-4)", lineHeight: "1" }}>{title}</h1>
        {subtitle && <p style={{ fontSize: "1.25rem", color: "var(--text-secondary)", maxWidth: "500px" }}>{subtitle}</p>}
      </div>
      {children}
    </main>
  );
}

function Portfolio(){
  return (
    <InnerPageTemplate eyebrow="Archive" title={<>A portfolio of <br/><em>considered spaces.</em></>} subtitle="Residential interiors shaped by proportion, material and the rhythms of everyday life.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-8)' }}>
        {projects.map((p) => (
          <button key={p.id} className="project-card" onClick={()=>go("/portfolio/"+p.slug)}>
            <ImageReveal src={p.image}/>
            <div className="project-meta">
              <h3>{p.name}</h3>
              <span>{p.type}</span>
            </div>
          </button>
        ))}
      </div>
    </InnerPageTemplate>
  );
}

function ProjectDetail({slug}){
  const p = projects.find(x=>x.slug===slug) || projects[0];
  return (
    <main>
      <section className="section-light hero" style={{ paddingBottom: 0 }}>
        <div className="hero-copy">
          <Label>{p.location}</Label>
          <h1 className="hero-title">{p.name}</h1>
          <p className="hero-desc">{p.type} &middot; {p.area} &middot; {p.year}</p>
        </div>
        <div className="hero-image-wrap" style={{ height: "90vh" }}>
          <img src={p.image} alt={p.name} />
        </div>
      </section>

      <section className="section-muted statement">
        <h2>A home that feels calm, tactile and <em>quietly expressive.</em></h2>
        <div className="statement-text" style={{ gridColumn: "1 / -1", maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <p>The brief was simple: create a refined backdrop for everyday life without losing warmth. We paired architectural restraint with natural textures, custom furniture and carefully controlled lighting.</p>
        </div>
      </section>

      <section className="section-light projects-section" style={{ background: "transparent" }}>
        <div className="projects-masonry">
          <div className="project-card p-large"><ImageReveal src={projects[(projects.indexOf(p)+1)%projects.length].image}/></div>
          <div className="project-card p-tall"><ImageReveal src={projects[(projects.indexOf(p)+2)%projects.length].image}/></div>
        </div>
      </section>
      
      <section className="section-dark testimonial-section" style={{ margin: "var(--space-8)", borderRadius: "24px" }}>
        <div>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", marginBottom: "var(--space-6)" }}>Let's discuss<br/><em>your space.</em></h2>
          <button className="btn-primary" onClick={()=>go("/consultation")}>Start your project</button>
        </div>
      </section>
    </main>
  );
}

function ServicesPage(){
  return (
    <InnerPageTemplate eyebrow="Expertise" title={<>Comprehensive <br/><em>Services.</em></>} subtitle="From initial spatial planning to final installation, we offer end-to-end design solutions tailored to your lifestyle.">
      <div className="service-detail-list">
        {extendedServices.map((srv) => (
          <div key={srv.id} className="service-detail-row">
            <div className="service-detail-content">
              <Label>{srv.id}</Label>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'var(--space-4)' }}>{srv.title}</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7 }}>{srv.desc}</p>
            </div>
            <div className="service-detail-image">
              <ImageReveal src={srv.image} alt={srv.title} />
            </div>
          </div>
        ))}
      </div>
    </InnerPageTemplate>
  );
}

function AboutPage(){
  return (
    <InnerPageTemplate eyebrow="The Studio" title={<>Designed with<br/><em>intention.</em></>} subtitle="Atelier Noir is a multidisciplinary design studio focused on crafting spaces that elevate the everyday.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-12)', alignItems: 'center' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-4)' }}>Our Approach</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
            Atelier Noir was founded on a simple premise: spaces should not just look beautiful; they should feel instinctively right. We approach every project as an ongoing dialogue between architecture, proportion, light, and the unique rituals of our clients' daily lives.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Our aesthetic is anchored in quiet luxury and structural restraint. By carefully selecting honest materials—natural woods, raw stone, and patinated metals—we create environments that age gracefully and offer a calm, tactile respite from the outside world.
          </p>
        </div>
        <div>
          <ImageReveal src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85" alt="Studio space" />
        </div>
      </div>
      
      <div style={{ marginTop: 'var(--space-16)', paddingTop: 'var(--space-12)', borderTop: '1px solid var(--border-subtle)' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: 'var(--space-8)', textAlign: 'center' }}>The Team</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-8)' }}>
          <div>
            <ImageReveal src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85" alt="Founder" />
            <div style={{ marginTop: 'var(--space-4)' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-1)' }}>Sarah Noir</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Principal Designer</p>
            </div>
          </div>
          <div>
            <ImageReveal src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=85" alt="Architect" />
            <div style={{ marginTop: 'var(--space-4)' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-1)' }}>David Chen</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Lead Architect</p>
            </div>
          </div>
          <div>
            <ImageReveal src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85" alt="Designer" />
            <div style={{ marginTop: 'var(--space-4)' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-1)' }}>Elena Rostova</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Interior Designer</p>
            </div>
          </div>
        </div>
      </div>
    </InnerPageTemplate>
  );
}

function JournalPage(){
  return (
    <InnerPageTemplate eyebrow="Journal" title={<>Thoughts on<br/><em>design & living.</em></>} subtitle="Insights, studio updates, and deep dives into our process.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)' }}>
        {journalPosts.map((post) => (
          <button key={post.id} className="project-card journal-card" onClick={() => {}}>
            <ImageReveal src={post.image} alt={post.title} />
            <div className="project-meta">
              <h3>{post.title}</h3>
              <span>{post.category} &middot; {post.date}</span>
            </div>
          </button>
        ))}
      </div>
    </InnerPageTemplate>
  );
}

function ContactPage(){
  return (
    <InnerPageTemplate eyebrow="Contact" title={<>Start a<br/><em>conversation.</em></>} subtitle="We are currently accepting new residential and boutique commercial projects for 2026-2027.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-16)' }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-6)' }}>Project Inquiry</h3>
          <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted successfully!'); }}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-input" placeholder="Jane Doe" required />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" placeholder="jane@example.com" required />
            </div>
            <div className="form-group">
              <label className="form-label">Project Type</label>
              <select className="form-select">
                <option>Private Residence</option>
                <option>Apartment Renovation</option>
                <option>Boutique Commercial</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Project Details</label>
              <textarea className="form-textarea" placeholder="Tell us about your space, timeline, and vision..." required></textarea>
            </div>
            <button type="submit" className="btn-primary">Submit Inquiry</button>
          </form>
        </div>
        
        <div>
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <Label>Studio</Label>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Atelier Noir<br/>
              Level 4, The Crescent<br/>
              New Delhi, 110017
            </p>
          </div>
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <Label>Direct</Label>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              <a href="mailto:studio@ateliernoir.in" style={{ display: 'block', marginBottom: 'var(--space-1)' }}>studio@ateliernoir.in</a>
              <a href="tel:+919999999999">+91 99999 99999</a>
            </p>
          </div>
          <div>
            <Label>Follow</Label>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ display: 'block', marginBottom: 'var(--space-1)' }}>Instagram</a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest</a>
            </p>
          </div>
        </div>
      </div>
    </InnerPageTemplate>
  );
}

function GenericPage({title}){
  return (
    <InnerPageTemplate eyebrow="Page" title={title}>
      <p style={{ color: "var(--text-secondary)" }}>Content for this section goes here.</p>
    </InnerPageTemplate>
  );
}

function App(){
  const path = useRoute();
  let content;
  
  window.scrollTo({top: 0, behavior: 'instant'});

  if(path==="/") content=<Home/>;
  else if(path==="/portfolio") content=<Portfolio/>;
  else if(path.startsWith("/portfolio/")) content=<ProjectDetail slug={path.split("/")[2]}/>;
  else if(path==="/consultation" || path==="/contact") content=<ContactPage/>;
  else if(path==="/about") content=<AboutPage/>;
  else if(path==="/interior-design") content=<ServicesPage/>;
  else if(path==="/blog") content=<JournalPage/>;
  else content=<GenericPage title={path.replace("/", "").replace("-", " ")}/>;
  
  return (
    <>
      <Header/>
      {content}
      <Footer/>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App/>);
