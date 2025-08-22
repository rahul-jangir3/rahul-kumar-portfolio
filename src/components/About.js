import React from 'react';
import '../App.css';
import profileImg from '../assets/1000103114.jpg';

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
              <h4 className="text-dark mb-3">.....</h4>
              <p className="text-muted">
                {I'm Passionate AWS & DevOps Engineer with a solid background in Python development and hands-on expertise in cloud technologies.}
              </p>
              <p className="text-muted">
                {Skilled in AWS services (EC2, S3, RDS, IAM, Lambda, VPC and DevOps) tools like Docker, Kubernetes, Terraform, Ansible, and Jenkins.}
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

