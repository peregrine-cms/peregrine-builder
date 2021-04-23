peregrine-builder
====

This project creates a feature archive containing all sling features peregrine-cms requires. It is a customized version of [sling-org-apache-sling-starter](https://github.com/apache/sling-org-apache-sling-starter)

the latest version of the launcher for peregrine-cms and the corresponding feature archive is available in the [releases section of this github repository](https://github.com/peregrine-cms/peregrine-builder/releases).

If this is your first time working with peregrine-cms we highly recommend to either use the peregrine-cms cli tool (percli) or a peregrine-cms docker image to start your experience with peregrine right.

build your own feature archive
-

to build your own feature archives please execure the following commands:

```shell
cd builder
mvn clean install
```

sync this project with the sling-starter
-

We try to keep the dependencies in the feature models up to date with the sling starter. An easy way to do this efficiently is to clone the sling-starter git repo and diff our `builder/src` folder with the `sling-starter/src` folder

Expected differences are:

files that only exist in one of the projects:

```shell
builder/src/main/features/app/distribution.json
sling-org-apache-sling-starter/src/main/features/app/slingshot.json
sling-org-apache-sling-starter/src/main/features/app/starter.json
```

file with differences:

```shell
builder/src/main/features/boot.json 
"sling.run.mode.install.options":"oak_tar_fds,oak_tar,oak_mongo|local,live,author,publish|notshared,shared",
"sling.run.modes":"${sling.runmodes}",
```

heavily modified file

```shell
builder/src/test/java/org/apache/sling/launchpad/StarterReadyRule.java`
```
