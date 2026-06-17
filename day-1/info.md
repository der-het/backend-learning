# Backend & DevOps Command Cheat Sheet

## Node.js & NPM

### Check Versions

```bash
node -v
npm -v
```

### Create a New Project

```bash
npm init -y
```

### Install Packages

```bash
npm install express
npm i express
```

### Install Development Dependency

```bash
npm i -D nodemon
```

### Install All Dependencies

```bash
npm install
```

### Remove Package

```bash
npm uninstall express
```

### Update Packages

```bash
npm update
```

### Show Installed Packages

```bash
npm list
```

### Show node_modules Location

```bash
npm root
```

---

# Running Node Applications

### Run Application

```bash
node app.js
```

### Run with Nodemon

```bash
npx nodemon app.js
```

---

# File & Folder Commands

### Current Directory

```bash
pwd
```

### List Files

```bash
ls
```

### Change Directory

```bash
cd folder-name
```

### Go Back One Directory

```bash
cd ..
```

### Create Folder

```bash
mkdir project-name
```

### Create File

```bash
touch app.js
```

# Git Commands

### Initialize Git Repository

```bash
git init
```

### Check Status

```bash
git status
```

### Add All Files

```bash
git add .
```

### Commit Changes

```bash
git commit -m "Initial Commit"
```

### View Commit History

```bash
git log
```

### View Branches

```bash
git branch
```

### Create New Branch

```bash
git checkout -b feature-branch
```

### Switch Branch

```bash
git checkout main
```

### Push Code

```bash
git push origin main
```

### Pull Latest Code

```bash
git pull origin main
```

---

### Basic Express Server

```javascript
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
```

---
