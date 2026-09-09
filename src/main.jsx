import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import heroPhoto from '../assets/00_Additive_manufacturing-05_1_5-366.png';
import missionPhoto from '../assets/sant_1_5-381.png';
import missionAccent from '../assets/tower_1_5-380.png';
import originPhoto from '../assets/storytelling_1_5-853.png';
import timelineFeature from '../assets/powai_1_5-894.png';
import timelinePhotoA from '../assets/pbl_1_5-850.png';
import timelinePhotoB from '../assets/dd_1_5-898.png';

const publicAsset = (name) => `/${name}`;

const milestones = [
  ['2018', 'MakerGhat launches its first makerspace in Powai, Mumbai', 'Our first community workshops brought students together to experiment, build, and share.'],
  ['2019', 'A growing community of makers begins to form', 'More classrooms, tools, and mentors helped learners find confidence through making.'],
  ['2020', 'Learning stays active through uncertainty', 'The community adapted and created new ways to learn, collaborate, and stay connected.'],
  ['2021', 'Maker learning reaches new geographies', 'Partnerships with schools and organisations expanded access to hands-on STEM learning.'],
  ['2022', 'A stronger support ecosystem emerges', 'Teachers, students, and mentors built a shared language around curiosity and creation.'],
  ['2023', 'Ideas become real community solutions', 'Young makers started solving meaningful local challenges with design and technology.'],
  ['2024', 'The people behind the progress are celebrated', 'A larger team and volunteer network deepened MakerGhat\'s community impact.'],
  ['2025', 'Making becomes a pathway to leadership', 'Fellowships and peer-learning opportunities unlocked new youth-led initiatives.'],
  ['2026', 'The story is still being written.', 'And the next chapter belongs to everyone who chooses to make it with us.'],
];

function SafeImage({ src, alt, className }) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) return <div className={`${className} placeholder-image`} role="img" aria-label={`${alt} placeholder`}><span>Image placeholder</span></div>;
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}

function Logo() {
  return <a className="maker-logo" href="#top" aria-label="MakerGhat home"><span className="maker-mark">♥</span><span>Maker<br />Ghat</span></a>;
}

function PartnerPage() {
  return <main className="partner-page" id="top">
    <header className="site-header"><Logo /><nav aria-label="Main navigation"><a href="/">About us</a><a href="/#space">Space⌄</a><a href="/#curriculum">Curriculum</a><a href="/#training">Training</a><a href="/#evidence">Evidence⌄</a><a href="/#programs">Programs</a><a href="/#involved">Get involved⌄</a></nav></header>
    <div className="partner-shell">
      <div className="partner-tabs"><a href="#careers">Careers</a><a href="#volunteer">Volunteer</a><a href="#donate">Donate</a><a className="selected" href="#partner">Partner</a></div>
      <section className="partner-hero" id="partner"><div><h1>Partnerships that<br />Make Making<br />Possible!</h1><p>Our partners are co-creators of change, bringing possibility into every learning space.</p></div><div className="hands-art" aria-hidden="true"><span>✦</span><b>♢</b></div></section>
      <section className="partner-form-section"><div className="form-heading"><h2>We’d love to learn more<br />about you!</h2><p>Tell us a little about yourself and how we can make something meaningful together.</p></div><form className="partner-form" onSubmit={(event) => event.preventDefault()}><label>I am a<input required placeholder="Enter profession" /></label><label>looking forward to<select defaultValue=""><option value="" disabled>Select your interest</option><option>Partnering with MakerGhat</option><option>Supporting a maker space</option><option>Building a program</option></select></label><label>My name<input required placeholder="Enter name" /></label><label>Phone number<input type="tel" placeholder="Enter phone number" /></label><label>Email Id<input type="email" required placeholder="Enter email address" /></label><label className="check-row"><input type="checkbox" defaultChecked />Receive updates via email</label><label>Optional<textarea placeholder="Type to convey something" /></label><button type="submit">Submit</button></form><div className="partner-photo"><SafeImage src={publicAsset('MG(Our Story) (Copy).png')} alt="MakerGhat community partners" className="partner-photo-image" /><div>Partnering with STEM<br />organisations across India by<br />anchoring Shikshagraha STEM<br />Collective</div></div></section>
    </div>
    <footer className="site-footer partner-footer"><div className="footer-silhouette" /><div className="footer-grid"><div><h2>Connect<br />with Us</h2><a href="/">About Us</a><p>◉ +91 9447756484<br />◉ info@makerghat.org</p></div><div><strong>Resources</strong><a>Blueprint to our makerspaces</a><a>IGNITE Incubation Program</a><a>Maker Ghaon Fellowship</a><a>Curriculum Resources</a><a>Dashboard</a><a>Reports</a></div><div><strong>FAQs</strong><a>Space</a><a>Curriculum</a><a>Training</a><a>Evidence</a></div><div className="footer-brand"><Logo /><button>Subscribe to our newsletter</button><small>◉ ◉ ◉ ◉</small><p>MakerGhat and its assets are licensed<br />under CC BY-SA 4.0.</p></div></div></footer>
  </main>;
}

function App() {
  const [activeYear, setActiveYear] = useState('2018');
  const active = milestones.find(([year]) => year === activeYear);
  if (window.location.pathname === '/partner') return <PartnerPage />;

  return <main id="top">
    <header className="site-header"><Logo /><nav aria-label="Main navigation"><a href="#about">About us</a><a href="#space">Space⌄</a><a href="#curriculum">Curriculum</a><a href="#training">Training</a><a href="#evidence">Evidence⌄</a><a href="#programs">Programs</a><a href="/partner">Get involved⌄</a></nav></header>
    <div className="story-shell">
      <div className="story-tabs" role="tablist" aria-label="Story sections"><a className="selected" href="#about">MakerGhat story</a><a href="#team">MakerGhat team</a><a href="#support">Support system</a><a href="#alumni">Volunteers &amp; Alumni</a></div>
      <h1>The story that built MakerGhat</h1>
      <div className="hero-image"><SafeImage src={heroPhoto} alt="A MakerGhat 3D printer creating a bright yellow part" className="hero-photo-img" /></div>

      <section className="mission" id="about">
        <div className="mission-copy"><h2>Our mission</h2><p>Our mission is to make hands-on, maker-centered learning accessible across India, empowering young people to think critically, build confidently, and solve real-world problems beyond traditional classrooms.</p></div>
        <div className="mission-art"><SafeImage src={missionPhoto} alt="MakerGhat community at work" className="photo-cutout students" /><SafeImage src={missionAccent} alt="MakerGhat makerspace tower" className="photo-cutout mission-accent" /><span className="spark">✦</span></div>
        <div className="why-copy"><h2>Why making?</h2><p>Making bridges the gap between knowledge and application through experiential learning. It builds 21st-century skills that empowers our youth to become confident job-seekers and entrepreneurs.</p></div>
        <div className="idea-mark">💡</div>
        <div className="route route-top" />
      </section>

      <section className="origin" id="team"><div className="origin-copy"><h2>How did MG<br />start</h2><p>MG origin story featuring founders, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p><span className="question">?</span></div><div className="origin-photo"><SafeImage src={originPhoto} alt="MakerGhat founding team story" className="team-photo" /></div><div className="route route-origin" /><span className="scissors">✂</span></section>

      <section className="timeline" id="evidence"><div className="timeline-intro"><p>Our journey, one<br />year at a time</p><span>Click a year to explore</span></div><div className="year-grid">{milestones.map(([year]) => <button key={year} className={activeYear === year ? 'active' : ''} onClick={() => setActiveYear(year)}>{year} <small>⌄</small></button>)}</div><div className="timeline-detail"><span className="detail-year">{active[0]}</span><h2>{active[1]}</h2><p>{active[2]}</p></div><div className="timeline-media"><SafeImage src={timelineFeature} alt="Makerspace launch in Powai" className="timeline-feature" /><SafeImage src={timelinePhotoA} alt="Project based learning snapshot" className="timeline-thumb thumb-a" /><SafeImage src={timelinePhotoB} alt="MakerGhat workshop snapshot" className="timeline-thumb thumb-b" /></div><div className="route route-timeline" /><img className="timeline-art art-one" src={publicAsset('Group 225.svg')} alt="" /><img className="timeline-art art-two" src={publicAsset('Group 226.svg')} alt="" /></section>
    </div>

    <footer className="site-footer" id="involved"><div className="footer-silhouette" /><div className="footer-grid"><div><h2>Connect<br />with Us</h2><a href="#about">About Us</a><p>◉ +91 9447756484<br />◉ info@makerghat.org</p></div><div><strong>Resources</strong><a>Blueprint to our makerspaces</a><a>IGNITE Incubation Program</a><a>Maker Ghaon Fellowship</a><a>Curriculum Resources</a><a>Dashboard</a><a>Reports</a></div><div><strong>FAQs</strong><a>Space</a><a>Curriculum</a><a>Training</a><a>Evidence</a></div><div className="footer-brand"><Logo /><button>Subscribe to our newsletter</button><small>◉ ◉ ◉ ◉</small><p>MakerGhat and its assets are licensed<br />under CC BY-SA 4.0.</p></div></div></footer>
  </main>;
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
