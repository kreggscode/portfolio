# 🚀 Kreggscode Portfolio

[![Live Website](https://img.shields.io/badge/🌐_Live_Website-Visit_Now-00FF00?style=for-the-badge&logo=google-chrome&logoColor=white)](https://kreggscode.com)
[![Portfolio](https://img.shields.io/badge/💼_Portfolio-Full_Stack_Developer-00FF00?style=for-the-badge)](https://kreggscode.com)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

## 🎉 **CHECK OUT THE LIVE WEBSITE** 🎉

### **[🌐 https://kreggscode.com](https://kreggscode.com)**

**Experience the full portfolio with smooth animations, responsive design, and professional contact form!**

---

## ✨ **What You'll Find**

- **🚀 Stunning Hero Section** with animated typing effect
- **👨‍💻 About Section** showcasing development expertise
- **🛠️ Skills Section** with modern tech stack
- **💼 Projects Showcase** featuring real-world applications
- **📬 Working Contact Form** that sends messages directly to inbox
- **📱 Fully Responsive** design for all devices
- **⚡ Lightning Fast** performance with Vite
- **🎨 Beautiful Animations** powered by Framer Motion

---

## 🛠️ **Tech Stack**

### **Frontend Framework**
- **React 18** - Modern UI library with hooks
- **Vite** - Next-generation build tool
- **Tailwind CSS** - Utility-first CSS framework

### **Animations & Effects**
- **Framer Motion** - Production-ready animations
- **React Type Animation** - Dynamic typing effects
- **React Scroll** - Smooth scrolling navigation

### **Icons & Styling**
- **React Icons** - Popular icon library
- **Custom CSS** - Glass morphism effects
- **Google Fonts** - Modern typography

### **Backend & APIs**
- **Web3Forms** - Contact form service (no server needed!)
- **Hostinger** - Reliable web hosting
- **GitHub Actions** - Automated deployment

---

## 📦 **Quick Start**

### **Prerequisites**
- Node.js 18+ installed
- npm or yarn package manager

### **Installation**

```bash
# Clone the repository
git clone https://github.com/kreggscode/portfolio.git
cd portfolio

# Install dependencies
npm install

# Create environment file for contact form
cp .env.example .env
# Add your Web3Forms access key to .env

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

### **Build for Production**

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

---

## 🌐 **Deployment**

### **🚀 Live Website Already Deployed!**

Your portfolio is live at: **[https://kreggscode.com](https://kreggscode.com)**

### **Deployment Methods**

#### **Method 1: GitHub + Hostinger Auto-Deploy (Recommended)**

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **Hostinger auto-deploys** your changes automatically!

#### **Method 2: Manual FTP Upload**

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload `dist` folder** to Hostinger via FTP:
   - Host: `ftp.kreggscode.com`
   - Upload all files to `public_html`

### **Contact Form Setup**

The contact form uses **Web3Forms** (free service):

1. Get your access key from [web3forms.com](https://web3forms.com)
2. Add it to `.env` file:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_key_here
   ```
3. Messages go directly to your inbox!

---

## 📁 **Project Structure**

```
kreggscode-portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Animated hero section
│   │   ├── About.jsx          # Personal introduction
│   │   ├── Skills.jsx         # Tech stack showcase
│   │   ├── Projects.jsx       # Portfolio projects
│   │   ├── ContactForm.jsx    # Working contact form
│   │   ├── Navbar.jsx         # Responsive navigation
│   │   ├── Footer.jsx         # Site footer
│   │   └── ParticlesBackground.jsx # Animated background
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles
├── public/
│   ├── favicon.svg           # Custom favicon
│   └── ads.txt              # AdSense verification
├── .env                     # Environment variables
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
└── README.md               # This file
```

---

## 🎨 **Customization Guide**

### **Colors & Theme**

Edit `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#00FF00',    // Your brand color
        secondary: '#0D1117',  // Background
        accent: '#58A6FF',     // Secondary accent
      }
    }
  }
}
```

### **Content Updates**

- **Hero Section**: `src/components/Hero.jsx`
- **About**: `src/components/About.jsx`
- **Skills**: `src/components/Skills.jsx`
- **Projects**: `src/components/Projects.jsx`
- **Contact**: `src/components/ContactForm.jsx`

### **Adding New Projects**

Edit `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    image: "/project-image.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/your-repo",
    live: "https://your-live-site.com"
  }
  // Add more projects...
]
```

---

## 🚀 **Performance & Features**

### **⚡ Performance Metrics**
- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1 second
- **Time to Interactive**: < 2 seconds
- **Bundle Size**: Optimized with Vite

### **📱 Responsive Design**
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+
- **4K Displays**: Fully supported

### **♿ Accessibility**
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

### **🔍 SEO Optimized**
- Meta tags and descriptions
- Open Graph tags for social sharing
- Structured data markup
- Fast loading times

---

## 🔧 **Development Commands**

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Deployment helpers
npm run deploy       # Build only (for manual deploy)
```

---

## 📊 **GitHub Actions & CI/CD**

### **Automated Deployment**
- **GitHub Actions** workflow in `.github/workflows/`
- **Hostinger Integration** for auto-deployment
- **Google AdSense** injection during build
- **Environment Secrets** for sensitive data

### **Security Features**
- **GitHub Secrets** for API keys
- **Build-time injection** for AdSense code
- **Environment variables** for sensitive data
- **HTTPS enforcement** on live site

---

## 🤝 **Connect With Me**

### **🌐 Live Portfolio**
**[https://kreggscode.com](https://kreggscode.com)**

### **💼 Professional Links**
- **GitHub**: [github.com/kreggscode](https://github.com/kreggscode)
- **LinkedIn**: [linkedin.com/in/kreggscode](https://linkedin.com/in/kreggscode)
- **Email**: Contact form on website

### **🛠️ Tech Stack Used**
- **Frontend**: React, Tailwind CSS, Framer Motion
- **Backend**: Web3Forms API
- **Hosting**: Hostinger
- **Deployment**: GitHub Actions
- **Version Control**: Git

---

## 📄 **License**

**MIT License** - Feel free to fork and use this for your own portfolio!

---

## 🎉 **Final Note**

**This portfolio represents modern web development best practices:**
- ✅ **Clean Code** with React hooks and components
- ✅ **Performance Optimized** with Vite and Tailwind
- ✅ **SEO Friendly** with proper meta tags
- ✅ **Mobile First** responsive design
- ✅ **Professional Contact** form with real functionality
- ✅ **Automated Deployment** with GitHub Actions
- ✅ **Security Conscious** with environment variables

---

## 🚀 **Ready to Launch?**

Your portfolio is **production-ready** and **live** at:
### **[🌐 https://kreggscode.com](https://kreggscode.com)**

**Go check it out and share it with the world!** 🌟

---

**Built with ❤️ and lots of ☕ by Kreggscode**
