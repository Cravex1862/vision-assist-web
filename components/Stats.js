import Link from 'next/link'

export default function Stats(){
  return (
    <section className="section container stats" id="about">
      <div className="panel">
        <h2 className="h1">Every day, we’re making the world more accessible to more people</h2>
        <div style={{marginTop:18}}>
          <Link className="btn btn-primary" href="/about">More About Us</Link>
        </div>
      </div>
      <div className="stat-grid">
        <div className="stat">
          <div className="label">Live</div>
          <div className="value">9,439,850</div>
          <div className="label">Descriptions served</div>
        </div>
        <div className="stat">
          <div className="label">Live</div>
          <div className="value">920,856</div>
          <div className="label">Active users</div>
        </div>
        <div className="stat">
          <div className="value">150+</div>
          <div className="label">Countries</div>
        </div>
        <div className="stat">
          <div className="value">180+</div>
          <div className="label">Languages</div>
        </div>
      </div>
    </section>
  )
}
