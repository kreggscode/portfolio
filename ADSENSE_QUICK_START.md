# 🚀 Google AdSense Quick Start

## ⚡ What You Need to Do NOW

### 1️⃣ Add Your AdSense Code to GitHub Secrets (REQUIRED)

1. **Get your AdSense code:**
   - Go to: https://www.google.com/adsense
   - Navigate to: **Ads** → **Overview** → **By site**
   - Click **Get code** for kreggscode.com
   - Copy the ENTIRE script tag (looks like this):
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
        crossorigin="anonymous"></script>
   ```

2. **Add it to GitHub:**
   - Go to: https://github.com/kreggscode/portfolio/settings/secrets/actions
   - Click **New repository secret**
   - Name: `ADSENSE_CODE`
   - Value: Paste your complete AdSense script tag
   - Click **Add secret**

### 2️⃣ Update ads.txt File (REQUIRED)

1. **Get your publisher ID:**
   - In AdSense dashboard, go to: **Ads** → **Ads.txt**
   - Copy the line that looks like: `google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0`

2. **Update the file:**
   - Open: `public/ads.txt`
   - Replace `pub-XXXXXXXXXX` with your actual publisher ID
   - Save and commit:
   ```bash
   git add public/ads.txt
   git commit -m "Update ads.txt with AdSense publisher ID"
   git push origin main
   ```

### 3️⃣ Verify Deployment

1. **Check GitHub Actions:**
   - Go to: https://github.com/kreggscode/portfolio/actions
   - Wait for the deployment to complete (green checkmark)

2. **Verify on your website:**
   - Visit: https://kreggscode.com
   - Right-click → View Page Source
   - Search for "adsbygoogle" - you should see your AdSense code

3. **Request AdSense Review:**
   - Go back to Google AdSense
   - Click **Request Review** for kreggscode.com

## ✅ Checklist

- [ ] Added `ADSENSE_CODE` secret to GitHub
- [ ] Updated `public/ads.txt` with your publisher ID
- [ ] Pushed ads.txt changes to GitHub
- [ ] Verified deployment completed successfully
- [ ] Checked website source code for AdSense script
- [ ] Requested review in Google AdSense

## 🔒 Security Notes

✅ **Your AdSense code is SAFE:**
- It's stored as a GitHub Secret (encrypted)
- Never appears in your repository code
- Only injected during deployment
- Not visible in source control history

## 📞 Need Help?

Read the full guide: `ADSENSE_SETUP.md`

---

**Repository:** https://github.com/kreggscode/portfolio
**Website:** https://kreggscode.com
