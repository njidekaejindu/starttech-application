# Deployment Documentation

## Purpose

This document explains how the frontend application is deployed to AWS using GitHub Actions.

---

## Tools Used

- GitHub Actions
- AWS S3
- AWS CloudFront
- Terraform

---

## Deployment Workflow

The deployment process is automated using:

.github/workflows/frontend-ci-cd.yml

### Trigger Conditions

The workflow runs when:

- Code is pushed to master branch  
- Changes are made inside frontend directory  
- Workflow file is updated  

---

## Pipeline Steps

The GitHub Action performs the following steps:

1. Checkout repository  
2. Setup Node.js  
3. Install dependencies with npm ci  
4. Build React application  
5. Configure AWS credentials  
6. Deploy build folder to S3  
7. Invalidate CloudFront cache  

---

## AWS Resources

- S3 Bucket: starttech-dev-frontend  
- CloudFront Distribution: configured via Terraform  
- IAM User: terraform-user  

---

## Troubleshooting

### npm ci fails

Solution:
- Run npm install locally  
- Commit updated package-lock.json  

### AWS credential errors

- Ensure GitHub Secrets are correct  
- Verify IAM permissions  

### CloudFront not updating

- Check invalidation step  
- Manually invalidate if needed  

---

## Conclusion

The deployment process is:

- Automated  
- Repeatable  
- Reliable  
- Fully managed through code  
