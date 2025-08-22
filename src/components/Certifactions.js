import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import '../App.css';

const certifications = [
  {
    title: "AWS & DevOps Training", /* change the name of your certification */
    issuer: "Intellipaat", /* issued company/college/institute/university*/
    year: "2025",
    description:
      "Comprehensive training covering core AWS services (EC2, S3, RDS, IAM, VPC, Lambda, CloudFormation) and DevOps tools (Docker, Kubernetes, Terraform, Ansible, Jenkins). Gained hands-on experience through multiple real-world projects, focusing on cloud infrastructure automation, CI/CD pipelines, and deployment of scalable applications."
  },
  {
    title: "Gen AI for DevOps and DevSecOps Engineers",
    issuer: "Udemy",
    year: "2025",
    description:
      "Mastered Generative AI for DevOps and DevSecOps with hands-on projects, covering AI/ML fundamentals, prompt engineering, model integration, and real-world automation use cases"
  },
];

function Certification() {
  return (
    <motion.section
      id="certification"
      className="container certification-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-5">Certifications</h2>
      <div className="row justify-content-center">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="col-md-4 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="cert-card p-4 text-start h-100">
              <h5 className="fw-bold d-flex align-items-center">
                <FaCertificate className="me-2 text-info cert-icon" />
                {cert.title}
              </h5>
              <h6 className="text-light fst-italic">{cert.issuer}</h6>
              <p className="mb-1">
                <small className="text-muted fst-italic">{cert.year}</small>
              </p>
              <p className="cert-desc mt-2">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Certification;
