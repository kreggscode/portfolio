# 🚀 DEPLOY TO HOSTINGER NOW - Simple Guide

## ✅ Your Portfolio is Ready!

**Location**: `C:\Users\kreg9\Desktop\kreggscode-website`

---

## 🎯 **EASIEST METHOD - FTP Upload (5 Minutes)**

### Step 1: Build Your Website
```bash
# Open terminal in this folder (kreggscode-website)
# Right-click in folder → "Open in Terminal" or "Git Bash Here"

npm install
npm run build
```

✅ This creates a `dist` folder with your website

---

### Step 2: Download FileZilla (If you don't have it)

**Download**: https://filezilla-project.org/download.php?type=client

Click **"Download FileZilla Client"** (FREE)

Install it on your computer.

---

### Step 3: Get Your Hostinger FTP Info

1. Go to: **https://hpanel.hostinger.com**
2. Login to your account
3. Click on **"Files"** → **"FTP Accounts"**
4. You'll see:
   ```
   Host: ftp.kreggscode.com (or an IP like 123.45.67.89)
   Username: u123456789 (your FTP username)
   Password: ********** (your FTP password)
   Port: 21
   ```

📝 **Write these down!**

---

### Step 4: Connect FileZilla to Hostinger

1. **Open FileZilla**
2. At the top, fill in:
   - **Host**: `ftp.kreggscode.com`
   - **Username**: Your FTP username
   - **Password**: Your FTP password
   - **Port**: `21`
3. Click **"Quickconnect"**

✅ You're now connected!

---

### Step 5: Upload Your Website

**In FileZilla:**

**LEFT SIDE** = Your Computer  
**RIGHT SIDE** = Hostinger Server

1. **On the RIGHT side**:
   - Navigate to: `public_html` folder
   - **Delete ALL files** inside `public_html` (if any old files exist)

2. **On the LEFT side**:
   - Navigate to: `C:\Users\kreg9\Desktop\kreggscode-website\dist`
   - You'll see files like: `index.html`, `assets` folder, etc.

3. **Upload**:
   - **Select ALL files** inside the `dist` folder
   - **Drag and drop** them to `public_html` on the right side
   - Wait for upload to complete (bottom panel shows progress)

✅ **Done!**

---

### Step 6: Visit Your Website

Go to: **https://kreggscode.com**

🎉 **Your portfolio is LIVE!**

---

## 🔄 **ALTERNATIVE: GitHub Auto-Deploy (For Future Updates)**

This is better if you want to update your portfolio often.

### Setup Once:

#### 1. Push to GitHub

```bash
cd C:\Users\kreg9\Desktop\kreggscode-website

git init
git add .
git commit -m "My portfolio"
git branch -M main
git remote add origin https://github.com/kreggscode/portfolio.git
git push -u origin main
```

#### 2. Connect Hostinger to GitHub

1. **Hostinger Panel**: https://hpanel.hostinger.com
2. Go to: **"Advanced"** → **"Git"**
3. Click: **"Create"** or **"Connect Repository"**
4. **Authorize**: Connect your GitHub account
5. **Select**: `kreggscode/portfolio` repository
6. **Branch**: `main`
7. **Path**: `/public_html`
8. **Build Command**:
   ```bash
   npm install && npm run build && cp -r dist/* /public_html/
   ```
9. Enable **"Auto Deploy"**
10. Click **"Pull and Deploy"**

#### 3. Future Updates (Super Easy!)

```bash
# Make changes to your code
# Then:
git add .
git commit -m "Updated portfolio"
git push

# Hostinger auto-deploys! 🎉
```

---

## 📊 **Which Method Should You Use?**

### **Use FTP (FileZilla)** if:
- ✅ First time deploying
- ✅ Want it done in 5 minutes
- ✅ Don't update often

### **Use GitHub Auto-Deploy** if:
- ✅ Update portfolio regularly
- ✅ Want automatic deployments
- ✅ Already use GitHub

---

## 🎨 **After Deployment**

### Enable HTTPS (Important!)

1. **Hostinger Panel** → **"SSL"**
2. Enable **"Force HTTPS"**
3. Install **free Let's Encrypt SSL**
4. Wait 5-10 minutes

### Test Your Website

Visit these URLs:
- http://kreggscode.com
- https://kreggscode.com
- https://www.kreggscode.com

All should work and redirect to HTTPS!

---

## 🐛 **Common Issues**

### "Blank page after upload"
**Fix**: 
- Make sure you uploaded ALL files from `dist` folder
- Clear browser cache (Ctrl + Shift + R)
- Check browser console (F12) for errors

### "404 error when I refresh"
**Fix**: 
Create `.htaccess` file in `public_html`:
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

### "Images not loading"
**Fix**:
- Check if `assets` folder is uploaded
- Check file permissions (644 for files)

---

## ✅ **Deployment Checklist**

Before deploying:
- [ ] Run `npm install`
- [ ] Run `npm run build`
- [ ] Check `dist` folder exists
- [ ] Test locally (`npm run preview`)

For FTP upload:
- [ ] Download FileZilla
- [ ] Get Hostinger FTP credentials
- [ ] Connect to Hostinger
- [ ] Upload all files from `dist` to `public_html`
- [ ] Enable SSL/HTTPS
- [ ] Visit https://kreggscode.com

---

## 🎉 **You're Ready to Deploy!**

### Quick Steps:
1. ✅ Build: `npm run build`
2. ✅ Open FileZilla
3. ✅ Connect to Hostinger
4. ✅ Upload `dist` folder to `public_html`
5. ✅ Visit https://kreggscode.com

**Your portfolio will be live in 5 minutes!** 🚀

---

## 📞 **Need Help?**

- **Hostinger Support**: 24/7 Live Chat at https://hpanel.hostinger.com
- **FileZilla Guide**: https://filezilla-project.org/
- **Full Guide**: See `HOSTINGER_DEPLOYMENT.md` in this folder

---

## 🌟 **After Going Live**

Share your portfolio:
- 💼 Update LinkedIn profile
- 🐦 Add to Twitter bio
- 📧 Add to email signature
- 📄 Add to resume
- 💬 Update GitHub profile

---

**Let's make kreggscode.com live! Start with Step 1 above! 🚀**
