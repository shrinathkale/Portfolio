import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa"

import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"

function Contact() {

  const form = useRef()
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")

  const sendEmail = (e) => {

    e.preventDefault()

    emailjs.sendForm(
      "service_tsozzdg",
      "template_lmqkql6",
      form.current,
      "BK4WqkXU136vhbZTj"
    )

      .then(() => {

        alert("Message Sent Successfully!")

        form.current.reset()
        setUserName("")
        setUserEmail("")

      })

      .catch((error) => {

        console.log(error)

        alert("Failed to send message")

      })

  }

  return (

    <div id="contact" className="page-section">

      <div className="container">

        <h1 className="section-title text-center mb-5">
          Contact Me
        </h1>

        <div className="glass-card p-5">

          <div className="row g-5 align-items-center">

            {/* Left Side - Contact Form */}
            <div className="col-lg-7">

              <h2 className="contact-heading mb-4">
                Get In Touch
              </h2>

              <form ref={form} onSubmit={sendEmail}>

                {/* Name */}
                <div className="mb-4">

                  <input
                    type="text"
                    name="from_name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="form-control contact-input"
                    placeholder="Enter Your Name"
                    required
                  />

                  <input
                    type="hidden"
                    name="user_name"
                    value={userName}
                  />

                </div>

                {/* Email */}
                <div className="mb-4">

                  <input
                    type="email"
                    name="reply_to"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="form-control contact-input"
                    placeholder="Enter Your Email"
                    required
                  />

                  <input
                    type="hidden"
                    name="user_email"
                    value={userEmail}
                  />

                  <input
                    type="hidden"
                    name="from_email"
                    value={userEmail}
                  />

                </div>

                {/* Subject */}
                <div className="mb-4">

                  <input
                    type="text"
                    name="subject"
                    className="form-control contact-input"
                    placeholder="Enter Subject"
                    required
                  />

                </div>

                {/* Message */}
                <div className="mb-4">

                  <textarea
                    rows="5"
                    name="message"
                    className="form-control contact-input"
                    placeholder="Enter Your Message"
                    required
                  ></textarea>

                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="btn custom-btn px-4 py-2"
                >
                  Send Message
                </button>

              </form>

            </div>

            {/* Right Side - Contact Details */}
            <div className="col-lg-5">

              <div className="contact-details">

                <h2 className="contact-heading mb-4">
                  Contact Information
                </h2>

                {/* Email */}
                <div className="contact-item">

                  <FaEnvelope className="contact-icon" />

                  <div>
                    <h5>Email</h5>
                    <p>
                      shrinath.kale05@gmail.com
                    </p>
                  </div>

                </div>

                {/* Phone */}
                <div className="contact-item">

                  <FaPhone className="contact-icon" />

                  <div>
                    <h5>Phone</h5>
                    <p>
                      +91 9284651290
                    </p>
                  </div>

                </div>

                {/* Location */}
                <div className="contact-item">

                  <FaMapMarkerAlt className="contact-icon" />

                  <div>
                    <h5>Location</h5>
                    <p>
                      Maharashtra, India
                    </p>
                  </div>

                </div>

                {/* Social Links */}
                <div className="social-links mt-4">

                  {/* GitHub */}
                  <a
                    href="https://github.com/shrinathkale"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/shrinath-kale-082950318"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/shrinath_kale_16"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919284651290"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact