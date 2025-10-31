export default function Footer(){
  return (
    <footer className="footer" id="contact">
      <div className="container inner">
        <div>
          <strong>Vision Assist</strong> · © {new Date().getFullYear()}
        </div>
        <div style={{display:'flex',gap:16}}>
          <a href="#privacy" style={{color:'inherit',textDecoration:'none'}}>Privacy</a>
          <a href="#terms" style={{color:'inherit',textDecoration:'none'}}>Terms</a>
          <a href="#download" className="btn btn-primary">Download App</a>
        </div>
      </div>
    </footer>
  )
}
