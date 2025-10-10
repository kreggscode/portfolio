# 🚀 Quick Start Guide

## Get Your Portfolio Running in 5 Minutes!

### Step 1: Install Dependencies

Open terminal in the `kreggscode-portfolio` folder and run:

```bash
npm install
```

This will install all required packages (React, Vite, Tailwind, etc.)

### Step 2: Start Development Server

```bash
npm run dev
```

Your portfolio will open at: **http://localhost:5173**

### Step 3: Customize Your Content

Edit these files to personalize:

#### 📝 Personal Info
- `src/components/Hero.jsx` - Your name and titles
- `src/components/About.jsx` - About section
- `src/components/Contact.jsx` - Contact information

#### 🛠️ Skills
- `src/components/Skills.jsx` - Add/remove technologies

#### 🎯 Projects
- `src/components/Projects.jsx` - Add your projects

#### 🎨 Colors
- `tailwind.config.js` - Change color scheme

### Step 4: Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized files.

### Step 5: Deploy to Hostinger

#### Easy Method (Recommended):

1. **Run the deploy script**:
   ```bash
   deploy.bat
   ```

2. **Upload to Hostinger**:
   - Open FileZilla
   - Connect to: `ftp.kreggscode.com`
   - Upload `dist` folder contents to `public_html`

3. **Done!** Visit https://kreggscode.com

#### Manual Method:

1. Login to Hostinger panel
2. Go to File Manager
3. Navigate to `public_html`
4. Upload all files from `dist` folder
5. Done!

## 🎨 Customization Tips

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#00FF00',    // Your main color
  secondary: '#0D1117',  // Background
  accent: '#58A6FF',     // Accent color
}
```

### Add More Projects

Edit `src/components/Projects.jsx`:
```javascript
{
  title: 'Your Project',
  description: 'Project description',
  image: 'image-url',
  tags: ['React', 'Node.js'],
  github: 'github-url',
  live: 'live-url',
  features: ['Feature 1', 'Feature 2']
}
```

### Change Typing Animation

Edit `src/components/Hero.jsx`:
```javascript
sequence={[
  'Your Title 1',
  2000,
  'Your Title 2',
  2000,
]}
```

### Update Social Links

Edit `src/components/Navbar.jsx` and `src/components/Contact.jsx`:
```javascript
href="https://github.com/your-username"
```

## 🐛 Common Issues

### Port already in use
```bash
# Kill the process and restart
npm run dev
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run build
```

### Styles not working
```bash
# Rebuild Tailwind
npm run build
```

## 📱 Testing

### Local Testing
```bash
npm run preview
```
Opens production build at http://localhost:4173

### Mobile Testing
1. Get your local IP (ipconfig on Windows)
2. Visit `http://YOUR-IP:5173` on mobile
3. Make sure you're on same WiFi

## 🚀 Performance

Your portfolio is optimized for:
- ⚡ Fast loading (< 2s)
- 📱 Mobile responsive
- ♿ Accessible
- 🔍 SEO friendly

## 📞 Need Help?

Check these files:
- `README.md` - Full documentation
- `DEPLOYMENT_GUIDE.md` - Detailed deployment steps

## ✅ Checklist

Before deploying:
- [ ] Updated personal information
- [ ] Added your projects
- [ ] Changed social media links
- [ ] Tested on mobile
- [ ] Tested all links work
- [ ] Built production version
- [ ] Uploaded to Hostinger
- [ ] Verified live site works

## 🎉 You're Ready!

Your portfolio is now ready to showcase your skills to the world!

**Live at: https://kreggscode.com** 🚀
