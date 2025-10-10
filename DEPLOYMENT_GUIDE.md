# 🚀 Deployment Guide for Hostinger

## Prerequisites

- Node.js installed (v18 or higher)
- Hostinger hosting account
- FTP credentials from Hostinger
- Domain: kreggscode.com

## Step-by-Step Deployment

### 1️⃣ Build the Project

```bash
cd kreggscode-portfolio
npm install
npm run build
```

This creates a `dist` folder with all production files.

### 2️⃣ Deploy to Hostinger (FTP Method)

#### Option A: Using FileZilla (Recommended)

1. **Download FileZilla**: https://filezilla-project.org/

2. **Connect to Hostinger**:
   - Host: `ftp.kreggscode.com` (or IP from Hostinger panel)
   - Username: Your FTP username (from Hostinger)
   - Password: Your FTP password
   - Port: 21

3. **Upload Files**:
   - Navigate to `public_html` folder on the server
   - Delete any existing files in `public_html`
   - Upload ALL files from your local `dist` folder to `public_html`
   - Wait for upload to complete

4. **Verify**:
   - Visit https://kreggscode.com
   - Your portfolio should be live!

#### Option B: Using Hostinger File Manager

1. **Login to Hostinger**:
   - Go to https://hpanel.hostinger.com
   - Login to your account

2. **Access File Manager**:
   - Go to "Files" → "File Manager"
   - Navigate to `public_html`

3. **Upload Files**:
   - Click "Upload" button
   - Select all files from your `dist` folder
   - Upload them to `public_html`
   - Wait for completion

4. **Set Permissions**:
   - Right-click on files
   - Set permissions to 644 for files
   - Set permissions to 755 for folders

### 3️⃣ Configure Domain (If Needed)

1. **In Hostinger Panel**:
   - Go to "Domains"
   - Make sure kreggscode.com points to your hosting

2. **SSL Certificate**:
   - Go to "SSL" section
   - Enable "Force HTTPS"
   - Install free Let's Encrypt SSL

### 4️⃣ Test Your Website

Visit these URLs to test:
- http://kreggscode.com
- https://kreggscode.com
- https://www.kreggscode.com

All should work and redirect to HTTPS.

## 🔄 Updating Your Portfolio

When you make changes:

```bash
# 1. Make your changes in the code
# 2. Build again
npm run build

# 3. Upload the new dist folder contents to Hostinger
# (Replace all files in public_html)
```

## 🎯 Quick Deploy Script

Create a file `deploy.bat` in your project root:

```batch
@echo off
echo Building portfolio...
call npm run build

echo.
echo ========================================
echo Build complete!
echo ========================================
echo.
echo Next steps:
echo 1. Open FileZilla
echo 2. Connect to ftp.kreggscode.com
echo 3. Upload contents of 'dist' folder to 'public_html'
echo 4. Visit https://kreggscode.com to verify
echo.
pause
```

Then just run `deploy.bat` to build!

## 🐛 Troubleshooting

### Issue: Blank page after deployment
**Solution**: 
- Check if all files from `dist` are uploaded
- Check browser console for errors
- Verify file permissions (644 for files, 755 for folders)

### Issue: 404 errors on refresh
**Solution**: 
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

### Issue: Images not loading
**Solution**:
- Verify images are in `dist/assets` folder
- Check image paths in code
- Clear browser cache

### Issue: Slow loading
**Solution**:
- Enable Gzip compression in Hostinger
- Enable browser caching
- Use Cloudflare (free) for CDN

## 📊 Performance Optimization

### Enable Gzip Compression

Add to `.htaccess`:
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

### Enable Browser Caching

Add to `.htaccess`:
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## 🔐 Security

1. **Force HTTPS**: Enable in Hostinger SSL settings
2. **Hide .git folder**: Add to `.htaccess`:
   ```apache
   RedirectMatch 404 /\.git
   ```
3. **Disable directory listing**: Add to `.htaccess`:
   ```apache
   Options -Indexes
   ```

## 📞 Support

If you encounter issues:
1. Check Hostinger documentation
2. Contact Hostinger support (24/7 chat)
3. Check browser console for errors

## ✅ Deployment Checklist

- [ ] Build project (`npm run build`)
- [ ] Test build locally (`npm run preview`)
- [ ] Connect to Hostinger via FTP
- [ ] Upload all files from `dist` to `public_html`
- [ ] Set correct file permissions
- [ ] Enable SSL certificate
- [ ] Force HTTPS redirect
- [ ] Test website on all devices
- [ ] Check all links work
- [ ] Verify contact form (if added)
- [ ] Test on different browsers

## 🎉 You're Live!

Once deployed, share your portfolio:
- Update GitHub profile with website link
- Add to LinkedIn
- Share on Twitter
- Update resume

**Your portfolio is now live at https://kreggscode.com! 🚀**
