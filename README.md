# Simple Autofill Input

Hosted on Github Pages [Here](https://hello-arijit.github.io/Simple-Autofill-Input/)

Stack used:  
React JS  
Vite  
NPM  

Requisites for hosting on github pages:  

1. Install Github Pages package using **npm install gh-pages**  
2. In the react workspace folder  

In the **vite.config.js** file add an entry **base: "/[Repository Name]"** under **defineConfig**
```
export default defineConfig({
  plugins: [react()],
  base: "/Simple-Autofill-Input",
})
```
In the **package.json** file add an entry **"homepage": "https://[Github username].github.io/[Repository Name]/"**  
```
  "name": "simple-autofill-input",
  "homepage": "https://hello-arijit.github.io/Simple-Autofill-Input/",
  "private": true,
  "version": "0.0.0",
  "type": "module",
```
In the **package.json** file add the entries **"predeploy": "npm run build"** and **"deploy": "gh-pages -d dist"** under **scripts**  
```
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
```
3. Run **npm run deploy** to deploy the website



