# 🚀 Manual Deployment to Hostinger - Quick Fix

## ⚠️ Issue: Hostinger Git Deploy Not Working

Hostinger's Git deployment is configured for PHP/WordPress, not React apps.

**Solution**: Manual upload (takes 2 minutes!)

---

## 🎯 **Quick Manual Deployment**

### Step 1: Clean public_html

1. **Login**: https://hpanel.hostinger.com
2. **Go to**: Files → File Manager
3. **Navigate to**: `public_html` folder
4. **Select ALL files** (Ctrl+A)
5. **Delete** (removes old WordPress files)

---

### Step 2: Upload Your Website

#### **Option A: Using File Manager (No Software Needed)**

1. **On your computer**:
   - Go to: `C:\Users\kreg9\Desktop\kreggscode-website\dist`
   - Select ALL files inside `dist` folder
   - Right-click → "Send to" → "Compressed (zipped) folder"
   - Name it: `website.zip`

2. **In Hostinger File Manager**:
   - Make sure you're in `public_html` folder
   - Click **"Upload"** button (top right)
   - Select `website.zip`
   - Wait for upload
   - Right-click on `website.zip` → **"Extract"**
   - Delete `website.zip` after extraction

3. **Done!** Visit: https://kreggscode.com 🎉

---

#### **Option B: Using FileZilla (Faster)**

1. **Download FileZilla**: https://filezilla-project.org

2. **Get FTP Credentials**:
   - Hostinger → Files → FTP Accounts
   - Note: Host, Username, Password

3. **Connect**:
   - Open FileZilla
   - Host: `ftp.kreggscode.com`
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21
   - Click "Quickconnect"

4. **Upload**:
   - **Right side**: Navigate to `public_html`
   - **Delete all files** in `public_html`
   - **Left side**: Navigate to `C:\Users\kreg9\Desktop\kreggscode-website\dist`
   - **Select ALL files** inside `dist`
   - **Drag to right side** (public_html)
   - Wait for upload

5. **Done!** Visit: https://kreggscode.com 🎉

---

## 🔄 **Future Updates**

When you update your portfolio:

```bash
# 1. Make changes
# 2. Build
npm run build

# 3. Upload new dist folder contents to public_html
# (Use FileZilla or File Manager)
```

---

## 🎯 **Why Git Deploy Didn't Work**

Hostinger's Git deployment:
- ✅ Works great for PHP/WordPress
- ❌ Doesn't handle React build process
- ❌ Needs custom build commands (which Hostinger doesn't support well)

**Manual deployment is actually EASIER and FASTER!**

---

## ✅ **What to Upload**

Upload ONLY files from inside the `dist` folder:
- `index.html`
- `assets/` folder
- Any other files in `dist/`

**DO NOT** upload:
- `src/` folder
- `node_modules/`
- `package.json`
- Other source files

Only the **built files** in `dist/` go to the server!

---

## 🔐 **After Upload: Enable HTTPS**

1. Hostinger → SSL
2. Enable "Force HTTPS"
3. Install free Let's Encrypt SSL
4. Wait 5-10 minutes

---

## 🎉 **You're 2 Minutes Away!**

1. Delete old files in `public_html`
2. Upload `dist` folder contents
3. Visit https://kreggscode.com
4. Your portfolio is LIVE! 🚀

---

**Choose Option A (File Manager) or Option B (FileZilla) and deploy now!**
