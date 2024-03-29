# Sapphire

## Getting Started

### Pre-requisites

You will need

```
node.js (recommended version 21.6 or higher)
Visual Studio Code
```
You can download Visual Studio Code at [https://code.visualstudio.com/download](https://code.visualstudio.com/download).

### Commands

Install node

```
nvm install v21.6.1
```
or, if you want to get node's latest version, use:

```
nvm install node
```

Installing dependencies

```
npm install
```

Starting a local server

```
npm run dev
```

Building and publishing a new version

```
npm run release:patch (eg 5.2.123 -> 5.2.124)
npm run release:minor (eg 5.2 -> 5.3)
npm run release:major (eg 5.0 -> 6.0)
```

---

## Deployment

Now how to publish it on [Sapphire Style Guide](https://dev.nordicplatforms.com/StyleGuideV2_UI/Instructions.aspx#Docs-PublishingVersion).
