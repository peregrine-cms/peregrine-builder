# Notes for Merging with Sling Starter

## POM

Beside the different groupId and artifactId the Builder also creates a FAR for Oak Segment Nodestore and
File  Datastore (fds). Also the tests for Slingshot URLs is removed.

## Slingshot

The app/slingshot-repoinit.txt and app/slingshot.json are not copied to Peregrine Builder

## Auth and Distribution

Both app/auth.json and app/distribution.json are Peregrine specific Feature Models

## Boot

The boot.json Feature Model sets both **sling.run.mode.install.options** and **sling.run.modes**.

## Healthcheck

The **responseTextFor503** setting is adjusted to Peregrine's own Startup Index page.

## Scripting

As of 7/21/2022 the following dependencies have been removed from Peregrine Builder Feature Model script:
**scripting.json** as they are not needed in Peregrine:

* Framemaker
* Thymeleaf
* Attoparser
* Unbescape
* Javasssist
