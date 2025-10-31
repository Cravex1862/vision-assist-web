export default function Hero(){
  return (
    <section className="section container hero" id="app" aria-labelledby="hero-heading">
      <div className="hero-card">
        <h1 id="hero-heading" className="h1">Let’s see the world together</h1>
<p className="p">Vision Assist uses AI to describe your surroundings instantly. Tap once to get a description; long‑press to ask follow‑up questions. No people involved — private, fast, and available 24/7. This website only showcases the app; no AI runs here.</p>
        <div style={{marginTop:20}}>
          <a className="btn btn-primary" href="#download">Download App</a>
        </div>
      </div>
      <div className="hero-media" aria-hidden="true">
        <img alt="Smiling person outdoors holding a white cane" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" />
      </div>
    </section>
  )
}
