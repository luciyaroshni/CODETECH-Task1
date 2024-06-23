# CODETECH-Task1

**NAME:** ROSHNI THADEVUS  
**COMPANY:** CODETECH IT SOLUTIONS  
**ID:** CT8CC1289  
**DOMAIN:** CLOUD COMPUTING  
**DURATION:** JUNE - AUGUST 2024  
**MENTOR:**   

# **Overview of the TASK**  

DEPLOYING A WEB APPLICATION ON AWS 
  
Learn how to deploy a simple web application using Amazon Web Services (AWS). This project will teach the basics of cloud deployment, including setting up a server and configuring the web application.

**Key Activities:**  

- Create an AWS Account:
    - Sign up for an AWS account.
    - Activate your account and familiarize yourself with the AWS Management Console.

- Set Up an EC2 Instance:
  - Access the EC2 Dashboard in the AWS Management Console.
  - Launch a new EC2 instance.
  - Choose an Amazon Machine Image (AMI), such as Amazon Linux 2.
  - Select an instance type, like t2.micro (eligible for free tier).
  - Configure instance details, storage, and tags.
  - Create and configure a security group to allow HTTP (port 80) and SSH (port 22) traffic.
  - Launch the instance and download the key pair for SSH access.

- Connect to Your EC2 Instance:
  - Use SSH to connect to your EC2 instance with the downloaded key pair.

- Set Up the Web Server: Update the package list on the EC2 instance.
  - Install a web server, such as Apache.
  - Start and enable the web server.

- Deploy Your Web Application:
  - Create and upload a simple web application.  
  
**Technologies Used:**  

- Amazon Web Services (AWS):
  - EC2 (Elastic Compute Cloud): A web service that provides resizable compute capacity in the cloud. Used to launch and manage virtual servers.

- Operating System:
  - Amazon Linux 2023.4.20240611: A Linux server operating system provided by AWS, optimized for use on EC2 instances.

- Web Server:
  - Apache HTTP Server: An open-source HTTP server for modern operating systems, including UNIX and Windows.

- Secure Shell (SSH):
  - SSH: A protocol used to securely connect to remote servers over an unsecured network.  
  
**Key Insights:**  

- Cloud Infrastructure Setup:
  AWS EC2: Learn how to launch and manage virtual servers in the cloud. This includes choosing the right instance type, configuring security groups, and managing instance lifecycles.
Operating System:

- Amazon Linux 2023:
  Get familiar with Amazon Linux, which is optimized for use on AWS. Understand package management, system updates, and basic Linux commands.
  
- Apache HTTP Server:
  Gain experience installing and configuring a web server. This includes starting the server, ensuring it runs on boot, and deploying web application code to the server directory.
Secure Server Access:

- SSH:
  Establish secure connections to remote servers using SSH. This is essential for securely managing and interacting with cloud-based servers.
  
- Application Deployment:
  Deploy existing web application code by copying it to the appropriate directory on the server (e.g., /var/www/html for Apache).

Based on the deployment of a simple web application using AWS, the project provides hands-on experience in setting up cloud infrastructure, deploying web applications securely, and understanding basic server management in a cloud environment. It focuses on practical skills in utilizing AWS services like EC2, Apache, and SSH for hosting and managing web applications.
