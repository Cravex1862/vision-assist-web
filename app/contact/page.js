import Link from 'next/link'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Contact Us — Vision Assist',
}

export default function ContactPage(){
  return (
    <main>
      <NavBar />

      <section className="container contact-intro section" style={{paddingTop:32}}>
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">›</span>
          <span aria-current="page">Contact Us</span>
        </nav>
        <h1 className="h1">We’re ready to help</h1>
        <p className="p">Our team is here to answer your questions, provide support, or guide you through anything Vision Assist–related.</p>

        <div className="contact-tiles" style={{marginTop:28}}>
          <div className="tile">
            <div className="icon" aria-hidden="true">✉️</div>
            <h3>Email Us</h3>
            <p className="p">Got a question or feedback? Send us an email, and we’ll get back to you as soon as we can.</p>
            <a className="btn btn-primary" href="mailto:support@visionassist.app">Email Us</a>
          </div>
          <div className="tile">
            <div className="icon" aria-hidden="true">❓</div>
            <h3>Help Center</h3>
            <p className="p">Looking for quick answers? Visit our Help Center for FAQs, guides, and all the information you need.</p>
            <a className="btn btn-primary" href="#help-center">Visit Help Center</a>
          </div>
        </div>

        <form className="form-box" method="post" action="#">
          <div className="form-grid">
            <div className="field">
              <label htmlFor="firstName">First name*</label>
              <input id="firstName" name="firstName" required className="input" />
            </div>
            <div className="field">
              <label htmlFor="lastName">Last name*</label>
              <input id="lastName" name="lastName" required className="input" />
            </div>
            <div className="field" style={{gridColumn:'1 / -1'}}>
              <label htmlFor="jobTitle">Job title*</label>
              <input id="jobTitle" name="jobTitle" required className="input" />
            </div>
            <div className="field" style={{gridColumn:'1 / -1'}}>
              <label htmlFor="email">Business Email*</label>
              <input id="email" type="email" name="email" required className="input" />
            </div>
            <div className="field" style={{gridColumn:'1 / -1'}}>
              <label htmlFor="phone">Phone number*</label>
              <input id="phone" name="phone" required className="input" />
            </div>
            <div className="field" style={{gridColumn:'1 / -1'}}>
              <label htmlFor="company">Company name*</label>
              <input id="company" name="company" required className="input" />
            </div>
            <div className="field" style={{gridColumn:'1 / -1'}}>
              <label htmlFor="message">How can we help?*</label>
              <textarea id="message" name="message" required className="textarea" />
            </div>
          </div>
          <p className="helptext" style={{marginTop:10}}>
            Vision Assist needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, check out our Privacy Policy.
          </p>
          <div style={{marginTop:18}}>
            <button type="submit" className="btn btn-primary">Start the conversation</button>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  )
}
