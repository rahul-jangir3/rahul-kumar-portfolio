import React from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp
} from 'react-icons/fa';
import '../App.css';

function Contact() {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container text-center text-white">
        <h2 className="section-title text-warning mb-4">Contact Me</h2>
        <p className="mb-5 text-light">
          I'd love to hear from you! Feel free to reach out via email or social media.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card contact-card p-4 shadow border-0 bg-dark bg-opacity-75">
              <div className="card-body text-start">
                <p className="contact-info mb-3">
                  <FaEnvelope className="me-2 icon-warning" />
                  <a href="mailto:avijitgorai8250@gmail.com">j.rahuljangir6@gmail.com</a>
                </p>
                <p className="contact-info mb-3">
                  <FaPhoneAlt className="me-2 icon-warning" />
                  <a href="tel:+91 9391934987">+91 6377399913</a>
                </p>
                <p className="contact-info mb-3">
                  <FaMapMarkerAlt className="me-2 icon-warning" />
                  Delhi, India
                </p>
                <p className="contact-info mb-3">
                  <FaLinkedin className="me-2 icon-warning" />
                  <a
                    href="https://www.linkedin.com/in/rahul-jangir-devops/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/rahul-jangir-devops
                  </a>
                </p>
		<p className="contact-info mb-3">
                  <FaGithub className="me-2 icon-warning" />
                  <a
                    href="https://github.com/rahul-jangir3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </p>
                <p className="contact-info">
                  <FaWhatsapp className="me-2 icon-warning" />
                  <a
                    href="https://wa.me/918696979378"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
