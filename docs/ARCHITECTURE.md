# System Architecture Documentation

## Overview

This document describes the architecture of the StartTech frontend deployment.

---

## Architecture Flow

User Browser  
→ CloudFront CDN  
→ S3 Bucket  
→ Static React Application  

API requests:  
Frontend → CloudFront → ALB → Backend API  

---

## Components

### Frontend

- Built with React  
- Hosted on S3  
- Served through CloudFront  

### Backend

- Behind Application Load Balancer  
- Handles API routes  

### Infrastructure

- Managed using Terraform  
- Deployed using GitHub Actions  

---

## Security

- S3 bucket is private  
- Access only via CloudFront  
- IAM credentials stored as GitHub Secrets  
- HTTPS enforced  

---

## Scalability

- CloudFront provides global caching  
- S3 scales automatically  
- Backend scalable via ALB  

---

## Automation

All deployments happen automatically through:

.github/workflows/frontend-ci-cd.yml

---

## Summary

This architecture ensures:

- Fast performance  
- Secure hosting  
- Automated deployment  
- Reliable infrastructure  
