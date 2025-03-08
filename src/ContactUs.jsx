const ContactUs = ()=> {
    return (
        <>
        <div>
            <div className="contact-us">
  <h2>Contact Us</h2>
  <p>Have questions? We're here to help!</p>

  <form>
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your Email" required />
    <textarea placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
  </form>

  <p>Email: support@yourwebsite.com</p>
  <p>Phone: +91 9876543210</p>

  <div className="social-links">
    <a href="https://twitter.com/yourhandle">Twitter</a>
    <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
  </div>
</div>

        </div>
        </>
    );
}
export default ContactUs;