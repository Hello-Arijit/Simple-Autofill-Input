# Simple Autofill Input

Hosted on Github Pages [Here](https://hello-arijit.github.io/Simple-Autofill-Input/)

Stack used:
React JS
Vite
NPM

Requisites for hosting on github pages:

1. Install Github Pages package using **npm install gh-pages**
2. In the react workspace folder
    In the **vite.config.js** file add an entry **base: "/<Repository Name>"** under **defineConfig**
    In the **package.json** file add an entry **"homepage": "https://hello-arijit.github.io/<Repository Name>/"** 
    In the **package.json** file add the entries **"predeploy": "npm run build"** and **"deploy": "gh-pages -d dist"** under **scripts**
3. Run **npm run deploy** to deploy the website



