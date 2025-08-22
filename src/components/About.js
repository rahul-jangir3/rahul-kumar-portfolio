import React from 'react';
import '../App.css';
import profileImg from '../assets/Avi.jpg';

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
              <h4 className="text-dark mb-3"></h4>
              <p className="text-muted">
              {I am a passionate AWS & DevOps Engineer with a strong foundation in Python development and hands-on experience in cloud technologies. Transitioning from Python | Odoo development, I have upskilled in cloud computing, infrastructure automation, and DevOps practices to build scalable, secure, and efficient cloud solutions.
              🔹 Expertise in AWS Services – EC2, S3, RDS, IAM, Lambda, VPC, CloudFormation, and more.
              🔹 DevOps Tools & CI/CD – Docker, Kubernetes, Terraform, Ansible, Jenkins, GitHub Actions.
              🔹 Automation & Scripting – Python & Bash scripting for cloud and system automation.
              🔹 Infrastructure as Code (IaC) – Automating cloud infrastructure using Terraform & CloudFormation.
              🔹 Monitoring & Security – Implementing logging, monitoring, and security best practices in cloud environments.
              
              I am continuously learning and working on hands-on AWS DevOps projects, contributing to open-source, and staying updated with the latest cloud innovations. Open to collaboration, networking, and exciting opportunities in cloud & DevOps engineering!}
                {/* I'm an aspiring DevOps Engineer with a strong foundation in both development and operations. My journey began with Electronics & Communication Engineering, but my passion for technology led me to explore the dynamic world of DevOps and cloud computing. */}
              </p>
              <p className="text-muted">
                {/* Through comprehensive training at Emexo Technologies and hands-on internship experience, I've developed expertise in containerization, CI/CD pipelines, cloud platforms, and infrastructure automation. I believe in continuous learning and staying updated with the latest industry trends. */}
              </p>
              <p className="text-muted">
                {/* I'm also proficient with tools like <strong>Git</strong>, <strong>Amazon EC2</strong>, and <strong>Amazon S3</strong>, and have strong foundations in DevOps Tools like <strong>Kubernetes, Docker, Linux(Ubuntu), Jenkins CI/CD, GitHub, GitLab, GitHub Actions, Ansible, Terraform, SonarQube, NewRelic, Prometheus, Grafana, Python, Shell Scripting.</strong> */}
              </p>
              <p className="text-muted mb-0">
                {/* My goal is to build efficient, secure, and maintainable software that delivers value to users. I’m continuously learning, exploring new tech, and growing as a developer. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

