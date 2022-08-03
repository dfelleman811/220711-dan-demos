# DevOps

## What is it? 
- DevOps is a methodology that combines Development (writing code) and Operations (mainting infrastructure)
- The goal is to more efficiently produce high quality code that can seamlessly integrate into a production state. 
    - The goal of DevOps is not strictly about learning how to deploy an application. But how to integrate the process of deployment and application management into the regular day-to-day process of developing applications. 


- DevOps is centered around the concep of CI/CD/CD (often written CI/CD)

- Continuous Integration
    - The process of continually checking code into a central repository and checking to make sure it integrates into the code base
    - Make frequent changes to the code; make frequent pushes to a repository (GitHub, GitLab)
    - There are tools that will aid us in the process of building our pushed code and testing it to make sure it integrates into the current code base:
        - Example Technologies: Jenkins, Travis, GitHub Actions

- Continuous Delivery
    - The ability to have code ready for production in a way that is often automated.
    - Release of the application to customers/production is often ready at the press of a button. (Tests have passed - and code is ready to go)

- Continuous Deployment
    - This is similar to Continuous Delivery, except that the code is constantly being deployed to the customer/production. (If all tests pass, the code is deployed.)


- DevOps Pipeline
    - Is an automated set of processes that use tools to compile, build, test, and deploy our application.


- Amazon Web Services - AWS (or any Cloud Computing Technology - GCP, Azure)
    - Cloud Computing
        - important part is that we are accessing infrastructure over the internet
        - nothing is stored/managed locally, except perhaps some interfaces to access those cloud resources. 
        - this is beneficial because you're only paying for what you need AND you don't need to manage or mantain any of the needed infrastructure. 

    - Elastic Cloud Compute (EC2)
        - Virtual Server - a computer running somewhere else, owned by Amazon, accessed virtually/remotely.
        - This allows us to maintain an ongoing server (an application running on a server) 24/7 without having to use our own resources.
            - this computer (ec2) can operate at its own speeds, not yours 

    - Simple Storage Service (S3)
        - highly scalable file storage
        - you only pay for what you use
        - Static Website Hosting
            - uses a file storage as a means to access those pages (HTML files)
            - this behaves in the same way as accessing them as static files

- Jenkins
    - Continuous Integration Tool
    - Open Source Automation Server
    - Build automation tool
        - provides support for automating the process of building, testing, and even potentially deploying applications
    - Help achieve CI, and can assist with CD/CD
    - Can include plugins to integrate with other technologies as well
        - GitHub, Slack, Trello/Jira

# Aside
**Development** - where we design and program applications.

**Production** - the environemnt where the app is deployed and being used live by end users