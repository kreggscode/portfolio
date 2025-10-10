# 🚀 GitHub Auto-Deploy Setup - Complete Guide

## ✅ Git Repository Initialized!

Your portfolio is ready to push to GitHub and auto-deploy to Hostinger!

---

## 📋 **Step-by-Step Setup**

### Step 1️⃣: Create GitHub Repository

1. **Go to GitHub**: https://github.com/new

2. **Create Repository**:
   - **Repository name**: `portfolio` (or `kreggscode-portfolio`)
   - **Description**: "Professional portfolio showcasing Full Stack, Blockchain & Mobile development"
   - **Visibility**: Public ✅
   - **DO NOT** initialize with README, .gitignore, or license
   - Click **"Create repository"**

3. **Copy the repository URL**:
   ```
   https://github.com/kreggscode/portfolio.git
   ```

---

### Step 2️⃣: Push to GitHub

Open terminal in `C:\Users\kreg9\Desktop\kreggscode-website` and run:

```bash
# Add GitHub remote (replace with YOUR repository URL)
git remote add origin https://github.com/kreggscode/portfolio.git

# Push to GitHub
git push -u origin main
```

**You'll be asked for credentials:**
- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (NOT your password)

#### How to Get Personal Access Token:

1. Go to: https://github.com/settings/tokens
2. Click: **"Generate new token"** → **"Generate new token (classic)"**
3. **Note**: "Portfolio deployment"
4. **Expiration**: 90 days (or No expiration)
5. **Scopes**: Check `repo` (full control of private repositories)
6. Click: **"Generate token"**
7. **COPY THE TOKEN** (you won't see it again!)
8. Use this token as your password when pushing

---

### Step 3️⃣: Setup Hostinger GitHub Integration

#### A. Login to Hostinger

1. Go to: https://hpanel.hostinger.com
2. Login to your account

#### B. Connect GitHub

1. In Hostinger panel, search for **"Git"** or go to **"Advanced"** → **"Git"**
2. Click **"Create"** or **"Connect Repository"**
3. Click **"Authorize"** to connect your GitHub account
4. Allow Hostinger access to your repositories

#### C. Configure Repository

1. **Select Repository**: Choose `kreggscode/portfolio`
2. **Branch**: `main`
3. **Deployment Path**: `/public_html` (or `/domains/kreggscode.com/public_html`)

#### D. Add Build Commands

In the **"Build commands"** section, add:

```bash
npm install
npm run build
rm -rf /home/*/public_html/*
cp -r dist/* /home/*/public_html/
```

**Or if you know your Hostinger username** (like u123456789):

```bash
npm install
npm run build
rm -rf /home/u123456789/public_html/*
cp -r dist/* /home/u123456789/public_html/
```

**Alternative simpler version:**

```bash
npm install && npm run build && cp -r dist/* public_html/
```

#### E. Enable Auto-Deploy

1. Toggle **"Auto Deploy"** to ON
2. This will auto-deploy every time you push to GitHub!

#### F. First Deployment

Click **"Pull and Deploy"** button to deploy now!

Wait 2-5 minutes for the build to complete.

---

### Step 4️⃣: Verify Deployment

1. Check the deployment log in Hostinger
2. Visit: https://kreggscode.com
3. Your portfolio should be live! 🎉

---

## 🔄 **Future Updates (Super Easy!)**

Now whenever you want to update your portfolio:

```bash
# 1. Make changes to your code
# Edit files in src/components/

# 2. Commit changes
git add .
git commit -m "Updated portfolio - added new project"

# 3. Push to GitHub
git push

# 4. Hostinger auto-deploys! 🎉
# Wait 2-3 minutes and check https://kreggscode.com
```

That's it! No manual uploads needed!

---

## 🎯 **Common Update Scenarios**

### Add a New Project

1. Edit: `src/components/Projects.jsx`
2. Add your project to the `projects` array
3. Commit and push:
   ```bash
   git add .
   git commit -m "Added new project: DeFi Dashboard"
   git push
   ```

### Update Your Skills

1. Edit: `src/components/Skills.jsx`
2. Add/remove technologies
3. Commit and push:
   ```bash
   git add .
   git commit -m "Updated skills section"
   git push
   ```

### Change Colors

1. Edit: `tailwind.config.js`
2. Change the `colors` section
3. Commit and push:
   ```bash
   git add .
   git commit -m "Updated color scheme"
   git push
   ```

---

## 🐛 **Troubleshooting**

### Issue: Push to GitHub Failed

**Error**: "Authentication failed"

**Solution**: Use Personal Access Token instead of password
- Get token from: https://github.com/settings/tokens
- Use token as password when pushing

---

### Issue: Hostinger Build Failed

**Check the build log** in Hostinger Git section.

**Common fixes:**

1. **Node version issue**:
   Add to build commands:
   ```bash
   export PATH=/usr/local/bin:$PATH
   npm install
   npm run build
   cp -r dist/* public_html/
   ```

2. **Path issue**:
   Find your exact path in Hostinger File Manager, then use:
   ```bash
   npm install
   npm run build
   cp -r dist/* /home/YOUR_USERNAME/domains/kreggscode.com/public_html/
   ```

3. **Permission issue**:
   ```bash
   npm install
   npm run build
   chmod -R 755 dist
   cp -r dist/* public_html/
   ```

---

### Issue: Website Shows Old Version

**Solutions**:
1. Clear browser cache (Ctrl + Shift + R)
2. Check Hostinger deployment log - make sure it completed
3. Wait 5 minutes for changes to propagate
4. Check if files are actually updated in File Manager

---

### Issue: Blank Page After Deploy

**Check**:
1. Hostinger deployment log for errors
2. Browser console (F12) for JavaScript errors
3. Make sure all files from `dist` were copied to `public_html`

**Fix**: Add `.htaccess` file in `public_html`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 📊 **Deployment Status**

### Check Deployment Status:

1. **Hostinger Panel** → **Git** section
2. See deployment history
3. View build logs
4. Check for errors

### Successful Deployment Shows:
- ✅ Green checkmark
- ✅ "Deployment successful"
- ✅ Build time (usually 2-5 minutes)

---

## 🎨 **Workflow Summary**

```
┌─────────────────────────────────────┐
│   1. Edit Code Locally              │
│   (src/components/...)              │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│   2. Test Locally                   │
│   npm run dev                       │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│   3. Commit to Git                  │
│   git add .                         │
│   git commit -m "message"           │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│   4. Push to GitHub                 │
│   git push                          │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│   5. Hostinger Auto-Deploys! 🎉    │
│   (Wait 2-3 minutes)                │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│   6. Live at kreggscode.com! 🚀    │
└─────────────────────────────────────┘
```

---

## ✅ **Setup Checklist**

- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Connected Hostinger to GitHub
- [ ] Added build commands
- [ ] Enabled auto-deploy
- [ ] First deployment successful
- [ ] Verified website is live
- [ ] Enabled SSL/HTTPS
- [ ] Tested push → auto-deploy workflow

---

## 🎯 **Git Commands Cheat Sheet**

```bash
# Check status
git status

# Add all changes
git add .

# Commit with message
git commit -m "Your message"

# Push to GitHub (auto-deploys!)
git push

# Pull latest changes
git pull

# View commit history
git log --oneline

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main

# Merge branch
git merge feature-name
```

---

## 🌟 **Benefits of GitHub Auto-Deploy**

✅ **Automatic**: Push once, deploys automatically  
✅ **Version Control**: Track all changes  
✅ **Rollback**: Easy to revert if something breaks  
✅ **Collaboration**: Others can contribute  
✅ **Backup**: Code is safe on GitHub  
✅ **Professional**: Industry-standard workflow  

---

## 🚀 **You're All Set!**

Now you have:
- ✅ Portfolio on GitHub
- ✅ Auto-deploy to Hostinger
- ✅ Professional workflow
- ✅ Easy updates (just push!)

**Make a change, push, and watch it auto-deploy!** 🎉

---

## 📞 **Need Help?**

**GitHub Issues:**
- GitHub Docs: https://docs.github.com
- Personal Access Tokens: https://github.com/settings/tokens

**Hostinger Issues:**
- 24/7 Chat: https://hpanel.hostinger.com
- Git Documentation: https://support.hostinger.com/en/collections/3418216-git

---

**Your portfolio is now on GitHub with auto-deploy! Just push and it goes live! 🚀**
