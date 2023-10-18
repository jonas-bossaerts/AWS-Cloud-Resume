# AWS-Cloud-Resume
Cloud Resume Project

## Description

The goal of this project was to leverage the power of the Cloud and some of it's key services to create a fully functioning serverless web application that serves as a resume or portfolio.
In summary, I setup an S3 bucket that stores all of my HTML, CSS, and JavaScript files for the website, and linked it as an origin to my CloudFront distribution to host the website. I set this up to be a secure site by reddirecting traffic to HTTPS and using AWS Certificate Manager (ACM) for the SSL certs.

Environments Used 

AWS Route 53
AWS CloudFront
AWS Certificate Manager
Amazon S3
AWS Lambda
AWS DynamoDB
