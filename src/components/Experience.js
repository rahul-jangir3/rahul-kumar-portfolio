import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import '../App.css';

const experiences = [
  {
    role: 'Python Developer',
    company: 'Kanak Infosystems LLP',
    duration: 'March 2022 - May 2023',
    description:
      'Developed and deployed custom Odoo ERP applications, including Apple login integration, while streamlining development and testing through Docker-based environments. Implemented REST API communication between client systems and Odoo custom apps, and managed the complete deployment lifecycle — from module packaging and version control to production server deployment.'
  },
  {
    role: 'DevOps Engineer Intern',
    company: 'Shiwansh Solutions',
    duration: 'August 2025 - Present',
    description:
      'Working as a DevOps Engineer Intern focusing on AWS cloud services, CI/CD pipelines, automation using Ansible and Terraform, and containerization with Docker and Kubernetes. Gaining hands-on experience in deployment, monitoring, and infrastructure automation for real-world projects.'
  }
];
export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="experience-section section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container text-center">
        <h2 className="section-title mb-5">Experience</h2>
        <div className="row justify-content-center">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="col-md-5 mb-4"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 180 }}
            >
              <div className="experience-card p-4 h-100 text-start">
                <div className="icon-wrapper mb-3">
                  <FaBriefcase className="experience-icon" />
                </div>
                <h5 className="experience-role">{exp.role}</h5>
                <h6 className="experience-company">{exp.company}</h6>
                <p className="experience-duration">{exp.duration}</p>
                <p className="experience-desc">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
