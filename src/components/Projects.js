import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const projectList = [
  {
    title: 'Deployment of 2048 Game on AWS EKS using Fargate',
    description:
      'Deployed a fully serverless 2048 Game App on AWS EKS using Fargate, configured Kubernetes deployments, services, ingress controller, and exposed with ALB for auto-scaling.',
    tools:
      'Implemented pod-level security with OIDC and IAM Roles. Tools & Technologies: **Docker, DockerHub, Kubernetes, EKS, Fargate, ALB, OIDC, IAM**'
  },
  {
    title: 'Jenkins CI/CD Pipeline for Java Application with SonarQube, Helm, and Argo CD',
    description:
      'Implemented an end-to-end CI/CD pipeline for a Java-based web application automating build, test, quality checks, and deployment.',
    tools:
      'Integrated **Jenkins, DockerHub, SonarQube, Helm, Argo CD, and Kubernetes** for automation and deployments. Tools & Technologies: **AWS, Git, Jenkins, Java, SonarQube, Docker, Argo CD, Helm, Kubernetes**'
  },
  {
    title: 'CI/CD Pipeline for Django Application using Jenkins and Argo CD on Kubernetes',
    description:
      'Deployed a Django-based To-Do application with a complete end-to-end CI/CD pipeline.',
    tools:
      'Used **Jenkins** for automation, and **Argo CD** for self-healing deployments in **Kubernetes**. Tools & Technologies: **Django, Jenkins, Argo CD, Kubernetes, Docker**'
  }
];
/*  u can add more projects after line 41 or else u want to delete from { to } u need to delete*/
function Projects() {
  return (
    <motion.section
      id="projects"
      className="container-fluid projects-section text-center my-5 py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title mb-5">Projects</h2>
      <div className="row justify-content-center px-3">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <div className="project-card p-4 text-start w-100 bg-dark bg-opacity-75 border border-light-subtle rounded-4 shadow-lg">
              <h4 className="project-title text-info mb-2">{project.title}</h4>
              <p className="text-muted mb-1">
                <small>{project.company} • {project.duration}</small>
              </p>
              <p className="project-desc mb-2 text-light">{project.description}</p>
              <p className="project-responsibilities text-white-50">
                <strong>Responsibilities:</strong> {project.responsibilities}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
