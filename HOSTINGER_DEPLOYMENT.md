# 🚀 Hostinger Deployment Guide - All Methods

## 📋 Prerequisites

- ✅ Hostinger account with kreggscode.com
- ✅ Node.js installed on your computer
- ✅ Portfolio built (`npm run build`)

---

## 🎯 **3 Ways to Deploy to Hostinger**

---

## Method 1: 📁 FTP Upload (Easiest - Recommended)

### Step-by-Step:

#### 1️⃣ Build Your Portfolio
```bash
cd C:\Users\kreg9\Desktop\kreggscode-website
npm install
npm run build
```
This creates a `dist` folder with your website.

#### 2️⃣ Get Hostinger FTP Credentials

1. Login to Hostinger: https://hpanel.hostinger.com
2. Go to **"Files"** → **"FTP Accounts"**
3. You'll see:
   - **Host**: `ftp.kreggscode.com` (or an IP address)
   - **Username**: Your FTP username
   - **Password**: Your FTP password
   - **Port**: 21

#### 3️⃣ Upload Using FileZilla (Recommended)

**A. Download FileZilla:**
- Visit: https://filezilla-project.org/download.php
- Download FileZilla Client (FREE)
- Install it

**B. Connect to Hostinger:**
1. Open FileZilla
2. Enter at the top:
   - **Host**: `ftp.kreggscode.com`
   - **Username**: Your FTP username
   - **Password**: Your FTP password
   - **Port**: 21
3. Click **"Quickconnect"**

**C. Upload Files:**
1. **Left side** = Your computer
2. **Right side** = Hostinger server
3. On the right, navigate to: `public_html` folder
4. **Delete everything** in `public_html` (if any old files exist)
5. On the left, navigate to: `C:\Users\kreg9\Desktop\kreggscode-website\dist`
6. **Select ALL files** inside `dist` folder
7. **Drag and drop** to `public_html` on the right
8. Wait for upload to complete (shows in bottom panel)

**D. Done!**
Visit: https://kreggscode.com 🎉

---

## Method 2: 🌐 Hostinger File Manager (No Software Needed)

### Step-by-Step:

#### 1️⃣ Build Your Portfolio
```bash
cd C:\Users\kreg9\Desktop\kreggscode-website
npm install
npm run build
```

#### 2️⃣ Create a ZIP File
1. Go to: `C:\Users\kreg9\Desktop\kreggscode-website\dist`
2. Select ALL files inside `dist`
3. Right-click → **"Send to"** → **"Compressed (zipped) folder"**
4. Name it: `website.zip`

#### 3️⃣ Upload to Hostinger

1. Login to Hostinger: https://hpanel.hostinger.com
2. Go to **"Files"** → **"File Manager"**
3. Navigate to: `public_html` folder
4. **Delete all old files** in `public_html` (if any)
5. Click **"Upload"** button (top right)
6. Select your `website.zip` file
7. Wait for upload to complete
8. Right-click on `website.zip` → **"Extract"**
9. Delete the `website.zip` file after extraction

#### 4️⃣ Done!
Visit: https://kreggscode.com 🎉

---

## Method 3: 🔗 GitHub + Hostinger Auto Deploy (Best for Updates)

This method lets you push to GitHub and auto-deploy to Hostinger!

### Step-by-Step:

#### 1️⃣ Push to GitHub

```bash
cd C:\Users\kreg9\Desktop\kreggscode-website

# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Create main branch
git branch -M main

# Add remote (create repo on GitHub first)
git remote add origin https://github.com/kreggscode/portfolio.git

# Push to GitHub
git push -u origin main
```

#### 2️⃣ Setup Hostinger GitHub Integration

1. **Login to Hostinger**: https://hpanel.hostinger.com
2. **Go to**: **"Advanced"** → **"Git"** (or search for "Git")
3. **Click**: **"Create"** or **"Connect Repository"**
4. **Authorize**: Connect your GitHub account
5. **Select**: Your repository (`kreggscode/portfolio`)
6. **Branch**: `main`
7. **Deployment Path**: `/public_html`

#### 3️⃣ Add Build Commands

In Hostinger Git settings, add these commands:

**Build Command:**
```bash
npm install && npm run build && cp -r dist/* /public_html/
```

**Or if that doesn't work:**
```bash
npm install
npm run build
rm -rf /home/u123456789/public_html/*
cp -r dist/* /home/u123456789/public_html/
```
(Replace `u123456789` with your actual Hostinger username)

#### 4️⃣ Enable Auto-Deploy

- Toggle **"Auto Deploy"** ON
- Now every time you push to GitHub, it auto-deploys!

#### 5️⃣ Deploy Now

Click **"Pull and Deploy"** button in Hostinger

#### 6️⃣ Future Updates

```bash
# Make changes to your code
# Then:
git add .
git commit -m "Updated portfolio"
git push

# Hostinger auto-deploys! 🎉
```

---

## 🔧 Post-Deployment Setup

### Enable SSL (HTTPS)

1. In Hostinger panel, go to **"SSL"**
2. Enable **"Force HTTPS"**
3. Install **free Let's Encrypt SSL**
4. Wait 5-10 minutes for activation

### Create .htaccess File

In `public_html`, create `.htaccess` file with this content:

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle React Router
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Enable Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Security
Options -Indexes
RedirectMatch 404 /\.git
```

---

## 🎯 Quick Comparison

| Method | Difficulty | Speed | Best For |
|--------|-----------|-------|----------|
| **FTP (FileZilla)** | ⭐ Easy | Fast | First deployment |
| **File Manager** | ⭐⭐ Medium | Medium | No software install |
| **GitHub Auto-Deploy** | ⭐⭐⭐ Advanced | Slow first time | Regular updates |

---

## 📝 My Recommendation

### For First Deployment:
**Use Method 1 (FTP with FileZilla)** - It's the easiest and fastest!

### For Future Updates:
**Setup Method 3 (GitHub Auto-Deploy)** - Just push to GitHub and it auto-deploys!

---

## 🔄 Update Workflow (After Initial Deployment)

### If Using FTP:
```bash
# 1. Make changes to your code
# 2. Build
npm run build

# 3. Open FileZilla
# 4. Upload new dist folder contents to public_html
```

### If Using GitHub Auto-Deploy:
```bash
# 1. Make changes to your code
# 2. Commit and push
git add .
git commit -m "Updated portfolio"
git push

# Done! Auto-deploys to Hostinger 🎉
```

---

## 🐛 Troubleshooting

### Issue: Blank Page After Upload
**Solution:**
- Check if ALL files from `dist` are uploaded
- Check browser console (F12) for errors
- Clear browser cache (Ctrl + Shift + R)

### Issue: 404 Error on Refresh
**Solution:**
- Add `.htaccess` file (see above)
- Enable mod_rewrite in Hostinger

### Issue: Images Not Loading
**Solution:**
- Verify images are in `dist/assets` folder
- Check file permissions (644 for files, 755 for folders)

### Issue: Slow Loading
**Solution:**
- Enable Gzip compression (in .htaccess)
- Enable browser caching (in .htaccess)
- Use Cloudflare (free CDN)

---

## ✅ Deployment Checklist

- [ ] Build project (`npm run build`)
- [ ] Test build locally (`npm run preview`)
- [ ] Get Hostinger FTP credentials
- [ ] Connect via FileZilla (or File Manager)
- [ ] Upload all files from `dist` to `public_html`
- [ ] Enable SSL certificate
- [ ] Force HTTPS redirect
- [ ] Add `.htaccess` file
- [ ] Test website on all devices
- [ ] Check all links work
- [ ] Test on different browsers
- [ ] Share your portfolio! 🎉

---

## 🎉 You're Live!

Once deployed, your portfolio will be at:
### **https://kreggscode.com** 🚀

Share it everywhere:
- 💼 LinkedIn profile
- 🐦 Twitter bio
- 📧 Email signature
- 📄 Resume
- 💬 GitHub profile

---

## 📞 Need Help?

**Hostinger Support:**
- 24/7 Live Chat: https://hpanel.hostinger.com
- Knowledge Base: https://support.hostinger.com

**Common Hostinger Docs:**
- FTP Setup: https://support.hostinger.com/en/articles/1583245-how-to-upload-files-using-ftp
- File Manager: https://support.hostinger.com/en/articles/1583318-how-to-use-file-manager
- SSL Setup: https://support.hostinger.com/en/articles/1583322-how-to-install-ssl

---

## 🚀 Quick Deploy Script

I've created `deploy.bat` that builds your project. After running it:

```bash
deploy.bat
```

Then just upload the `dist` folder to Hostinger!

---

**Your portfolio is ready to go live! Choose your method and deploy! 🎉**
