import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

function Summary() {
  return (
    <motion.section
      id="summary"
      className="container summary-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-4">Summary</h2>
      <p className="summary-text lead">
       Passionate AWS & DevOps Engineer with a strong foundation in Python development and hands-on expertise in cloud computing, automation, and CI/CD pipelines. Experienced in working with AWS services (EC2, S3, RDS, IAM, VPC, Lambda, CloudFormation) and DevOps tools (Docker, Kubernetes, Terraform, Ansible, Jenkins, GitHub Actions) to design scalable, secure, and efficient cloud solutions. Proven ability to automate infrastructure using IaC, streamline deployments with CI/CD pipelines, and monitor systems with modern observability tools. Transitioned from Python | Odoo development into cloud and DevOps, backed by real-world projects in containerization, Kubernetes, and automation pipelines. Continuously learning, contributing to projects, and eager to leverage expertise in driving cloud-native transformations.
      </p>
    </motion.section>
  );
}

export default Summary;
