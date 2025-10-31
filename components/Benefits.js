function Benefit({icon, title, children}){
  return (
    <div className="benefit">
      <div className="icon" aria-hidden="true">{icon}</div>
      <h4>{title}</h4>
      <p className="p" style={{margin:0}}>{children}</p>
    </div>
  )
}

export default function Benefits(){
  return (
    <section className="section container" aria-labelledby="benefits">
      <h2 id="benefits" className="h1" style={{fontSize:40}}>Fast. Private. Always on.</h2>
      <div className="benefits" style={{marginTop:20}}>
        <Benefit icon="📞" title="Free and unlimited use">Use it as often as you need without worrying about costs.</Benefit>
        <Benefit icon="🕘" title="Available day and night">AI‑powered assistance is available 24/7.</Benefit>
        <Benefit icon="🔒" title="100% private">No volunteers or call centers — your camera feed stays between you and the app.</Benefit>
        <Benefit icon="🌍" title="Worldwide support">Works wherever you are.</Benefit>
        <Benefit icon="⚡" title="Real‑time results">Get instant descriptions and quick answers.</Benefit>
        <Benefit icon="♿" title="Accessibility for all">Designed for blind and low‑vision users first.</Benefit>
      </div>
    </section>
  )
}
