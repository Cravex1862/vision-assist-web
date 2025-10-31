function Card({title, children, cta}){
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{children}</p>
      <a className="btn btn-primary" href="#download">{cta}</a>
    </div>
  )
}

export default function Cards(){
  return (
    <section className="section container" aria-labelledby="who">
      <h2 id="who" className="h1" style={{fontSize:36}}>How Vision Assist helps</h2>
      <div className="cards" style={{marginTop:20}}>
        <Card title="Instant Describe" cta="Download App">
          Tap once and our AI immediately describes what’s in front of your camera — objects, text, people around, colors, and more.
        </Card>
        <Card title="Ask Questions" cta="Download App">
          Long‑press to ask follow‑up questions about your scene. Have a conversation to get exactly the details you need.
        </Card>
        <Card title="For Business" cta="Learn More for Business">
          Integrate Vision Assist into your customer support or workplace accessibility. No human agents required.
        </Card>
      </div>
    </section>
  )
}
