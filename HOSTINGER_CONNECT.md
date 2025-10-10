# 🌐 Connect Hostinger to GitHub - Final Steps

## ✅ Your Code is Pushed to GitHub!

Repository: https://github.com/kreggscode/portfolio

---

## 🎯 **Connect Hostinger (5 Minutes)**

### Step 1: Login to Hostinger

Go to: **https://hpanel.hostinger.com**

---

### Step 2: Navigate to GIT Section

**Path**: Websites → kreggscode.com → Advanced → **GIT**

---

### Step 3: Fill in the Form

You'll see a form that says **"Create a New Repository"**

Fill it in EXACTLY like this:

#### **Repository:**
```
https://github.com/kreggscode/portfolio.git
```

#### **Branch:**
```
main
```

#### **Directory (optional):**
```
dist
```
⚠️ **IMPORTANT**: Type `dist` here! This tells Hostinger to deploy the built files from the dist folder.

---

### Step 4: Click "Create"

Click the **"Create"** button at the bottom.

Hostinger will:
1. Connect to your GitHub repository
2. Pull the code
3. Copy files from `dist` folder to `public_html`
4. Your site goes live!

---

### Step 5: Wait & Verify

1. **Wait 2-3 minutes** for deployment
2. **Visit**: https://kreggscode.com
3. **Your portfolio is LIVE!** 🎉

---

## 🔄 **Future Updates**

Whenever you want to update your portfolio:

### 1. Make Changes Locally
Edit files in `src/components/`

### 2. Build
```bash
npm run build
```

### 3. Commit and Push
```bash
git add .
git commit -m "Updated portfolio"
git push
```

### 4. Deploy in Hostinger
1. Go to Hostinger → GIT section
2. Click **"Pull"** button next to your repository
3. Wait 1-2 minutes
4. Check https://kreggscode.com - updated! 🎉

---

## 🎯 **Alternative: Auto-Deploy (Optional)**

If Hostinger has an "Auto Deploy" option:

1. In Hostinger GIT section
2. Look for **"Auto Deploy"** toggle
3. Turn it **ON**
4. Now every push to GitHub auto-deploys!

---

## 📊 **What Happens**

```
You push to GitHub
       ↓
Hostinger detects push (if auto-deploy ON)
       ↓
Hostinger pulls latest code
       ↓
Hostinger copies dist/ folder to public_html/
       ↓
Your website updates! 🎉
```

---

## ✅ **Checklist**

- [ ] Pushed code to GitHub
- [ ] Logged into Hostinger
- [ ] Went to GIT section
- [ ] Filled in repository URL
- [ ] Set branch to `main`
- [ ] Set directory to `dist`
- [ ] Clicked "Create"
- [ ] Waited 2-3 minutes
- [ ] Verified https://kreggscode.com works
- [ ] Enabled SSL/HTTPS

---

## 🔐 **Enable HTTPS (Important!)**

After deployment:

1. In Hostinger panel, go to **"SSL"**
2. Enable **"Force HTTPS"**
3. Install **free Let's Encrypt SSL**
4. Wait 5-10 minutes

Now your site will be secure: https://kreggscode.com

---

## 🐛 **Troubleshooting**

### Issue: "Repository not found"
**Fix**: Make sure repository is **PUBLIC** on GitHub
- Go to: https://github.com/kreggscode/portfolio/settings
- Scroll to "Danger Zone"
- Make sure it says "Public"

### Issue: "Deployment failed"
**Fix**: Check the directory field
- Should be: `dist`
- NOT: `/dist` or `dist/` or blank

### Issue: Blank page after deployment
**Fix**: 
1. Check if files are in `public_html` (use File Manager)
2. Make sure `index.html` is there
3. Clear browser cache (Ctrl + Shift + R)

### Issue: 404 errors
**Fix**: Create `.htaccess` in `public_html`:
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

## 📝 **Summary**

### What You Did:
1. ✅ Created GitHub repository
2. ✅ Built your portfolio (`npm run build`)
3. ✅ Pushed to GitHub (including `dist` folder)

### What You Need to Do:
1. ⏳ Connect Hostinger to GitHub
2. ⏳ Deploy to kreggscode.com
3. ⏳ Enable HTTPS

### After Setup:
```bash
# Update workflow
npm run build
git add .
git commit -m "Updated"
git push

# Then in Hostinger: Click "Pull" button
# Or: Auto-deploy if enabled
```

---

## 🎉 **You're Almost Live!**

Just fill in the Hostinger form:
- **Repository**: `https://github.com/kreggscode/portfolio.git`
- **Branch**: `main`
- **Directory**: `dist`
- Click **"Create"**

**Your portfolio will be live at https://kreggscode.com in 3 minutes!** 🚀

---

## 📞 **Need Help?**

**Hostinger Support:**
- 24/7 Live Chat: https://hpanel.hostinger.com
- Click the chat icon in bottom right

**GitHub Repository:**
- https://github.com/kreggscode/portfolio

---

**Let's make kreggscode.com live! Fill in the Hostinger form now!** 🎊
