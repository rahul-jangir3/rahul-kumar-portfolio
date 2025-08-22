import React from 'react';
import '../App.css';
import profileImg from '../assets/IMG_3086.jpg';

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-primary">About Me</h2>

        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-circle shadow"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card shadow p-4 border-0 bg-white bg-opacity-75">
              <h4 className="text-dark mb-3">AWS & DevOps Engineer | Python Developer</h4>
              <p className="text-muted">
                I am a passionate <strong>AWS & DevOps Engineer</strong> with a strong background in
                <strong> Python development</strong> and hands-on experience in
                <strong> cloud computing, automation, and CI/CD pipelines</strong>.
              </p>
              <p className="text-muted">
                Starting my career as a Python | Odoo Developer, I transitioned into cloud and DevOps
                by upskilling in <strong>AWS services</strong> (EC2, S3, RDS, IAM, VPC, Lambda,
                CloudFormation) and <strong>DevOps tools</strong> (Docker, Kubernetes, Terraform,
                Ansible, Jenkins, GitHub Actions).
              </p>
              <p className="text-muted">
                I have implemented real-world projects like <strong>serverless deployments on AWS EKS</strong>,
                <strong> end-to-end CI/CD pipelines with Jenkins & ArgoCD</strong>, and
                <strong> infrastructure automation with Terraform and Ansible</strong>.
              </p>
              <p className="text-muted mb-0">
                My focus is on building <strong>scalable, secure, and automated cloud solutions</strong>
                while continuously learning and contributing to the DevOps community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

