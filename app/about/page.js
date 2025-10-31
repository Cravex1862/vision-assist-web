import Link from 'next/link'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'About Us — Vision Assist',
}

function Value({icon, title, children}){
  return (
    <div className="value-item">
      <span className="value-icon" aria-hidden="true">{icon}</span>
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  )
}

export default function AboutPage(){
  return (
    <main>
      <NavBar />

      {/* Breadcrumb */}
      <section className="container section" style={{paddingTop:16}}>
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">›</span>
          <span aria-current="page">About Us</span>
        </nav>
      </section>

      {/* Top hero-like section */}
      <section className="container section hero">
        <div className="hero-card">
          <h1 className="h1">Making the world more accessible</h1>
          <p className="p">Vision Assist connects people who are blind or have low vision with volunteers and companies worldwide through live video and description. Our goal is to make everyday tasks simpler through the power of connection.</p>
        </div>
<div className="hero-media">
          <img alt="Person with vision loss crossing a street" src="https://www.ncoa.org/_next/image/?url=https%3A%2F%2Fassets-us-01.kc-usercontent.com%3A443%2Fffacfe7d-10b6-0083-2632-604077fd4eca%2Fc243c428-1681-4c8e-839e-6cf0156ec5db%2FSenior-man-with-vision-loss-crossing-street_Hero_iStock-1292075242_2021-05_1336x614.jpg&w=1200&q=75"/>
        </div>
      </section>

      {/* Values */}
      <section className="container section" aria-labelledby="values">
        <h2 id="values" className="h1" style={{fontSize:44}}>Our community of blind and low‑vision people first</h2>
        <p className="p">We develop our products with and not for our community. Our North Star is to serve the needs of that community as we discover them together — even if it means changing our assumptions, thinking and business model.</p>
        <div className="values-grid" style={{marginTop:24}}>
          <Value icon="💸" title="Free for end‑users">We’re committed to providing our tools and services to the blind and low‑vision community without charging them.</Value>
          <Value icon="🤝" title="Impact for business">True and equal accessibility means good business too. That’s why we strive for great outcomes.</Value>
          <Value icon="🧭" title="We’re builders and owners">We operate fast and efficiently, pay attention to details, and take responsibility for everything we do.</Value>
          <Value icon="🏆" title="We like to lead">We push boundaries because the community we serve deserves it.</Value>
          <Value icon="🧪" title="Failure is necessary">Mistakes are part of learning and growing. No risk means no progress.</Value>
          <Value icon="💜" title="A positive environment">We’re serious about being kind, and fun and laughter are always part of the mix.</Value>
        </div>
      </section>

      {/* Story */}
      <section className="container section story-grid" aria-labelledby="story">
        <div className="panel">
          <div className="p" style={{fontWeight:700, color:'var(--muted)'}}>Our Story</div>
          <h2 id="story" className="h1" style={{fontSize:44}}>The Vision Assist story</h2>
          <p className="p">Vision Assist started with a simple idea: make the world more accessible for people who are blind or have low vision through the power of connection.</p>
          <p className="p">The idea came from seeing how often people needed just a little visual assistance for everyday tasks. What if people who are blind or have low vision could connect with a global network of volunteers ready to lend their sight?</p>
          <p className="p">Today, millions of volunteers support users in many languages — proving that a little help goes a long way.</p>
        </div>
        <div className="media-box">
          <img alt="Founder smiling and holding a phone" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop"/>
        </div>
      </section>

      <Footer />
    </main>
  )
}
