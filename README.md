peregrine-builder
====

build the various feature archives for peregrine:

```
cd builder
mvn clean install
```

check th versions of the bundles in our feature models against the available versions

```
cd check
npm install
nmp run check-against-public-maven-repos
```

compare our feature model against the sling starter feature model

```
cd check
npm install
nmp run check-against-sling-starter
```

check sling download site against latest

```
cd check
npm install
nmp run check-against-sling-downloads
```
