# Google AdSense Setup Guide

This guide will help you securely add Google AdSense to your website without exposing your publisher ID in the repository.

## 🔒 Security Features

- ✅ **No sensitive data in repository** - Your AdSense code is stored as a GitHub Secret
- ✅ **Build-time injection** - Code is added during deployment, not in source files
- ✅ **Automatic deployment** - Push to GitHub triggers auto-deployment to Hostinger

## 📋 Step-by-Step Setup

### Step 1: Get Your AdSense Code

1. Go to your Google AdSense dashboard
2. Navigate to **Ads** → **Overview** → **By site**
3. Find your site `kreggscode.com` and click **Get code**
4. Copy the **entire AdSense code snippet** that looks like this:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
     crossorigin="anonymous"></script>
```

**IMPORTANT:** Copy the complete `<script>` tag including all attributes.

### Step 2: Add AdSense Code to GitHub Secrets

1. Go to your GitHub repository: https://github.com/kreggscode/portfolio
2. Click on **Settings** (top menu)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Set the following:
   - **Name:** `ADSENSE_CODE`
   - **Value:** Paste your complete AdSense code snippet from Step 1
6. Click **Add secret**

### Step 3: Create ads.txt File (Required for AdSense Approval)

The `ads.txt` file has already been created in the `public/` folder. You need to:

1. Go to your Google AdSense dashboard
2. Navigate to **Ads** → **Ads.txt**
3. Copy your publisher ID line (looks like: `google.com, pub-XXXXXXXXXX, DIRECT, f08c47fec0942fa0`)
4. Update the `public/ads.txt` file with your actual publisher ID

### Step 4: Deploy to Production

Once you've added the GitHub secret:

```bash
git add .
git commit -m "Add Google AdSense integration"
git push origin main
```

The GitHub Actions workflow will automatically:
1. Build your website
2. Inject the AdSense code from the secret
3. Deploy to Hostinger

### Step 5: Verify AdSense Installation

1. Wait for the GitHub Actions deployment to complete (check the **Actions** tab)
2. Visit your website: https://kreggscode.com
3. Right-click → **View Page Source**
4. Search for `adsbygoogle` - you should see your AdSense code in the `<head>` section
5. Go back to Google AdSense and click **Request Review**

## 🔍 Verification Methods

Google AdSense offers three verification methods:

### Method 1: AdSense Code Snippet (Recommended - Already Implemented)
✅ The code is automatically injected into your website's `<head>` section

### Method 2: Ads.txt Snippet
✅ The `ads.txt` file is already created in `public/ads.txt`
- Update it with your publisher ID from AdSense dashboard

### Method 3: Meta Tag
If needed, you can also add a meta tag verification:
1. Get the meta tag from AdSense
2. Add it as another GitHub secret: `ADSENSE_META_TAG`
3. The workflow can be updated to inject it similarly

## 📁 File Structure

```
kreggscode-website/
├── index.html                    # Contains AdSense placeholder
├── public/
│   └── ads.txt                   # AdSense verification file
├── .github/
│   └── workflows/
│       └── deploy.yml            # Auto-deployment with AdSense injection
└── ADSENSE_SETUP.md             # This file
```

## 🚀 How It Works

1. **Source Code:** `index.html` contains a placeholder comment: `<!-- ADSENSE_CODE_PLACEHOLDER -->`
2. **Build Process:** Vite builds your React app into the `dist/` folder
3. **Injection Step:** GitHub Actions replaces the placeholder with your actual AdSense code from secrets
4. **Deployment:** The modified files are deployed to Hostinger via SFTP

## ✅ Checklist

- [ ] Copy AdSense code from Google AdSense dashboard
- [ ] Add `ADSENSE_CODE` secret to GitHub repository
- [ ] Update `public/ads.txt` with your publisher ID
- [ ] Push changes to GitHub
- [ ] Verify deployment in GitHub Actions
- [ ] Check website source code for AdSense script
- [ ] Request review in Google AdSense dashboard

## 🔧 Troubleshooting

### AdSense code not appearing on website?
1. Check GitHub Actions logs for the "Inject Google AdSense Code" step
2. Verify the `ADSENSE_CODE` secret is set correctly
3. Make sure you pushed the latest changes

### Deployment failed?
1. Check that all FTP secrets are set: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`
2. Review the GitHub Actions logs for specific errors

### AdSense review rejected?
1. Ensure `ads.txt` has the correct publisher ID
2. Make sure your website has sufficient content
3. Check that AdSense code is visible in page source

## 📞 Support

If you encounter issues:
1. Check GitHub Actions logs: https://github.com/kreggscode/portfolio/actions
2. Verify all secrets are set in repository settings
3. Review Google AdSense policy requirements

---

**Last Updated:** October 2024
**Website:** https://kreggscode.com
**Repository:** https://github.com/kreggscode/portfolio
