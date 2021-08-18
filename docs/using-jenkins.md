---
layout: default
title: Using Jenkins with GitHub
---

# Using Jenkins with GitHub

## Basic Github Jenkins Integration

A basic integration means the ability for a Jenkins Job to build code from Github, by manual trigger, without any automatic triggers or webhooks.

- Add access to user **svc-jenkins-admin** to the repository with minimum `write` permissions, but keep in mind that for the triggering features described bellow svc-jenkins-admin will need `admin` permissions.
- Github Repository → Settings → Manage Access → Invite Teams or People
- Configure the Jenkins Job

1.  #### Manual Jenkins job push trigger configuration through Jenkins UI

    1.  Navigate to your jenkins Job and in **General** section check **GitHub Project** and add the path to your project.  
        Be careful to **not add .git** at the end of path, you can take the path from browser  
        ![Add project path](/docs/using-jenkins/ui-1.png)
    2.  Go to **Source Code Management** section and configure it like following ![Source Code Management](/docs/using-jenkins/ui-2.png)
    3.  Go to **Build Triggers** section and check **GitHub hook trigger for GITScm polling**  
        ![Build triggers](/docs/using-jenkins/ui-3.png)

    4.  Save the job.
    5.  A webhook should have been created in Github after saving the job with the endpoint https://jkm/github-webhook/, we don't need to edit it.  
        ![GitHub Webhook](/docs/using-jenkins/ui-4.png)

2.  #### Jenkins job push trigger using Jenkins Job Builder

    1.  Go to your **TLA_JOB.yml** file and add the following lines inside your job or template definition, with the name of your Github project instead of &lt;PROJECT_NAME&gt; (i.e.: github_jenkins).

            properties:
              - github_project:
                project_path: "<PROJECT_NAME>"
            scm:
              - clone_github_project:
                project_path: "<PROJECT_NAME>"
            triggers:
              - github

    2.  Run https://jenkins-prd/job/util_jenkins_job_builder/ for your jenkins job
    3.  A webhook should have been created in Github.  
        ![GitHub Webhook](/docs/using-jenkins/ui-4.png)

## Trigger Jenkins job on Github Pull Request

This enables Github to automatically trigger a Jenkins Job when a Pull Request (Merge Request) is created, using a webhook.

We don't need to configure the webhook, Jenkins will configure it automatically using svc-jenkins-admin user.

- Create the project in Github
- Add access to user **svc-jenkins-admin** to the project with `admin` permissions
  - Github Project → Settings → Manage Access → Invite Teams or People
- Configure the Jenkins Job

1.  #### Jenkins job Pull Request trigger using Jenkins Job Builder

    1.  Go to your TLA_JOB.yml file and add the following lines inside your job or template definition, with the name of your Github project instead of &lt;PROJECT_NAME&gt;. (i.e.: github_jenkins)

        ```

        properties:
        - github_project:
            project_path: "<PROJECT_NAME>"
        scm:
        - clone_github_pull_request:
            project_path: "<PROJECT_NAME>"
        triggers:
        - github_trigger_on_pull_requests

        ```

    2.  Run https://jenkins-prd/job/util_jenkins_job_builder/ for your jenkins job
    3.  A webhook should have been created in Github with the endpoint https://jkm/github-webhook/, we don't need to edit it.  
        ![GitHub Webhooks](/docs/using-jenkins/ui-5.png)

- Now, if we create a Pull Request in Github, the jenkins jobs corresponding to the Github project will be triggered and and you can see the status in Github  
  ![GitHub Pull Request](/docs/using-jenkins/ui-6.png)
- The same job is triggered also if the Pull Request is updated with a new commit.
- If we want, we can block the ability to merge, until the Jenkins job passes, by protecting master branch and adding a rule from Settings → Branches → Add Rule → Create → Save Changes like bellow:  
  ![Block ability to merge](/docs/using-jenkins/ui-7.png)  
  ![Block ability to merge](/docs/using-jenkins/ui-8.png)
