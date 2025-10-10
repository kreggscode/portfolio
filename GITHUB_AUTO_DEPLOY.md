# 🚀 GitHub Auto-Deploy Setup - Complete Guide

## ✅ What This Does

Every time you push to GitHub:
1. GitHub automatically builds your React app
2. Uploads built files to Hostinger via FTP
3. Your website updates automatically!

**No manual uploads ever again!** 🎉

---

## 📋 **Setup Steps (One-Time, 10 Minutes)**

### Step 1: Get Hostinger FTP Credentials

1. **Login**: https://hpanel.hostinger.com
2. **Go to**: Files → FTP Accounts
3. **Note down**:
   - **FTP Server**: `ftp.kreggscode.com` (or IP address)
   - **Username**: Your FTP username (like `u123456789`)
   - **Password**: Your FTP password

---

### Step 2: Add Secrets to GitHub

1. **Go to**: https://github.com/kreggscode/portfolio/settings/secrets/actions

2. **Click**: "New repository secret"

3. **Add 3 secrets**:

   **Secret 1:**
   - Name: `FTP_SERVER`
   - Value: `ftp.kreggscode.com` (your FTP server)
   - Click "Add secret"

   **Secret 2:**
   - Name: `FTP_USERNAME`
   - Value: Your FTP username (like `u123456789`)
   - Click "Add secret"

   **Secret 3:**
   - Name: `FTP_PASSWORD`
   - Value: Your FTP password
   - Click "Add secret"

---

### Step 3: Clean public_html (One Time)

1. **Hostinger**: File Manager → `public_html`
2. **Delete ALL files** (removes old WordPress)
3. Leave `public_html` empty

---

### Step 4: Push GitHub Action

```bash
cd C:\Users\kreg9\Desktop\kreggscode-website

# Add the new workflow file
git add .github/workflows/deploy.yml

# Commit
git commit -m "Add GitHub Actions auto-deploy workflow"

# Push
git push
```

---

### Step 5: Watch It Deploy!

1. **Go to**: https://github.com/kreggscode/portfolio/actions
2. You'll see your workflow running
3. Wait 2-3 minutes
4. **Visit**: https://kreggscode.com
5. **Your portfolio is LIVE!** 🎉

---

## 🔄 **Future Updates (Super Easy!)**

Now whenever you want to update:

```bash
# 1. Make changes to your code
# Edit src/components/Projects.jsx or any file

# 2. Commit and push
git add .
git commit -m "Updated portfolio - added new project"
git push

# 3. GitHub automatically:
#    - Builds your app
#    - Deploys to Hostinger
#    - Updates kreggscode.com
# 
# Wait 2-3 minutes and check https://kreggscode.com
# It's updated! 🎉
```

**That's it! No manual uploads, no FTP, nothing!**

---

## 📊 **How It Works**

```
You push to GitHub
       ↓
GitHub Action triggers
       ↓
Installs Node.js & dependencies
       ↓
Runs: npm run build
       ↓
Uploads dist/ to Hostinger via FTP
       ↓
Your website updates! 🎉
```

---

## 🎯 **What the GitHub Action Does**

The `.github/workflows/deploy.yml` file:
1. ✅ Triggers on every push to `main` branch
2. ✅ Sets up Node.js environment
3. ✅ Installs dependencies (`npm ci`)
4. ✅ Builds your project (`npm run build`)
5. ✅ Uploads `dist/` folder to Hostinger
6. ✅ Cleans old files first (`dangerous-clean-slate: true`)

---

## ✅ **Setup Checklist**

- [ ] Got FTP credentials from Hostinger
- [ ] Added 3 secrets to GitHub (FTP_SERVER, FTP_USERNAME, FTP_PASSWORD)
- [ ] Cleaned public_html folder
- [ ] Pushed workflow file to GitHub
- [ ] Watched first deployment in GitHub Actions
- [ ] Verified https://kreggscode.com works
- [ ] Tested by making a small change and pushing

---

## 🐛 **Troubleshooting**

### Issue: GitHub Action fails

**Check**:
1. Go to: https://github.com/kreggscode/portfolio/actions
2. Click on the failed workflow
3. Read the error message

**Common fixes**:
- Make sure FTP secrets are correct
- Check FTP server address (no `ftp://` prefix, just `ftp.kreggscode.com`)
- Verify FTP username and password

### Issue: Deployment succeeds but site not updated

**Fix**:
1. Clear browser cache (Ctrl + Shift + R)
2. Check Hostinger File Manager - are files in `public_html`?
3. Wait 5 minutes for changes to propagate

### Issue: "dangerous-clean-slate" error

**Fix**: Make sure `public_html` folder exists in Hostinger

---

## 🔐 **Security**

✅ **FTP credentials are safe!**
- Stored as GitHub Secrets
- Never visible in code
- Only accessible to GitHub Actions
- Encrypted by GitHub

---

## 🎨 **Example Update Workflow**

### Scenario: Add a new project

```bash
# 1. Edit the file
# Open: src/components/Projects.jsx
# Add your new project to the array

# 2. Test locally
npm run dev
# Check it looks good at http://localhost:5173

# 3. Commit and push
git add .
git commit -m "Added new DeFi Dashboard project"
git push

# 4. Wait 2-3 minutes
# 5. Visit https://kreggscode.com
# Your new project is live! 🎉
```

---

## 📊 **Deployment Time**

- **Build time**: ~1-2 minutes
- **Upload time**: ~30 seconds
- **Total**: ~2-3 minutes from push to live

---

## 🌟 **Benefits**

✅ **Automatic** - Push once, deploys automatically  
✅ **Fast** - Live in 2-3 minutes  
✅ **Reliable** - GitHub Actions are very stable  
✅ **Free** - GitHub Actions free tier is generous  
✅ **Professional** - Industry-standard CI/CD  
✅ **No manual work** - Never touch FTP again  

---

## 📝 **Workflow File Location**

The workflow file is at:
```
.github/workflows/deploy.yml
```

You can edit it if needed, but it works perfectly as-is!

---

## 🎯 **What You Need to Do**

1. **Get FTP credentials** from Hostinger
2. **Add 3 secrets** to GitHub
3. **Clean public_html** folder
4. **Push the workflow** file
5. **Done!** Auto-deploy is live!

---

## 🎉 **After Setup**

Your workflow:
```
Edit code → git push → Wait 2 minutes → Live! 🚀
```

**No FTP, no manual uploads, no hassle!**

---

## 📞 **Need Help?**

**GitHub Actions:**
- View runs: https://github.com/kreggscode/portfolio/actions
- Documentation: https://docs.github.com/en/actions

**Hostinger FTP:**
- Get credentials: Hostinger → Files → FTP Accounts
- Support: 24/7 chat at https://hpanel.hostinger.com

---

## 🚀 **Let's Set It Up!**

Follow the steps above and you'll have automatic deployment in 10 minutes!

**Your portfolio will auto-deploy every time you push to GitHub!** 🎊
