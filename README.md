# 🚀 Kreggscode Portfolio

A stunning, modern portfolio website showcasing Full Stack, Blockchain, and Mobile development expertise.

## ✨ Features

- **Animated Hero Section** with typing effect
- **Responsive Design** - Works on all devices
- **Smooth Animations** using Framer Motion
- **Particle Background** for visual appeal
- **Modern UI** with Tailwind CSS
- **Fast Performance** built with Vite
- **SEO Optimized** with meta tags

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **React Type Animation** - Typing effect
- **React Scroll** - Smooth scrolling

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment to Hostinger

### Method 1: FTP Upload

1. Build the project:
   ```bash
   npm run build
   ```

2. The build files will be in the `dist` folder

3. Upload contents of `dist` folder to your Hostinger public_html directory via FTP:
   - Host: ftp.kreggscode.com
   - Username: Your Hostinger FTP username
   - Password: Your Hostinger FTP password

4. Upload all files from `dist` folder to `public_html`

### Method 2: GitHub + Hostinger Auto Deploy

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/kreggscode/portfolio.git
   git push -u origin main
   ```

2. In Hostinger panel:
   - Go to "Git" section
   - Connect your GitHub repository
   - Set branch to `main`
   - Set deployment path to `public_html`
   - Enable auto-deploy

3. Add build command in Hostinger:
   ```bash
   npm install && npm run build && cp -r dist/* public_html/
   ```

## 📁 Project Structure

```
kreggscode-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ParticlesBackground.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: '#00FF00',    // Main accent color
  secondary: '#0D1117',  // Background color
  accent: '#58A6FF',     // Secondary accent
}
```

### Content
- **Hero Section**: Edit `src/components/Hero.jsx`
- **About**: Edit `src/components/About.jsx`
- **Skills**: Edit `src/components/Skills.jsx`
- **Projects**: Edit `src/components/Projects.jsx`
- **Contact**: Edit `src/components/Contact.jsx`

## 🚀 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Fully optimized images and assets

## 📱 Responsive

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## 🔧 Development

```bash
# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contact

- **Website**: https://kreggscode.com
- **Email**: kreg9da@gmail.com
- **GitHub**: https://github.com/kreggscode
- **LinkedIn**: https://linkedin.com/in/kreggscode

---

**Made with ❤️ and lots of ☕**
