# Trung Bao Nguyen - Academic Website

A professional academic website showcasing research expertise, publications, teaching experience, and academic achievements. Built with React, Tailwind CSS, and optimized for GitHub Pages deployment.

## 🌟 Features

- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling between sections
- **Academic Focus**: Tailored for academic personal branding
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Sections

- **About**: Professional introduction and key achievements
- **Research Experience**: Detailed academic and research positions
- **Publications**: Peer-reviewed papers with proper formatting
- **Teaching & Supervision**: Teaching philosophy and student supervision
- **Contact**: Professional contact information and social links

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Lucide Icons**: Beautiful, consistent icons
- **Vite**: Fast build tool and development server
- **GitHub Pages**: Free hosting and deployment

## 📦 Installation & Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/TrungNg/trung-academic-website.git
   cd trung-academic-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

4. **Open in browser**: Navigate to `http://localhost:5173`

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

The website is configured for automatic deployment using GitHub Actions:

1. **Push to main branch**: Any push to the `main` branch triggers automatic deployment
2. **GitHub Actions**: The workflow builds and deploys to GitHub Pages
3. **Live URL**: Website will be available at `https://TrungNg.github.io/trung-academic-website/`

### Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
trung-academic-website/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   └── ui/           # UI components (shadcn/ui)
│   ├── assets/           # Images and static files
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles
│   └── main.jsx          # Application entry point
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions deployment
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## 🎨 Customization

### Content Updates

1. **Personal Information**: Update contact details in `App.jsx`
2. **Publications**: Modify the `publications` array with your papers
3. **Experience**: Update the `experiences` array with your positions
4. **Skills**: Customize the `skills` array with your competencies

### Styling

1. **Colors**: Modify the color scheme in `App.css`
2. **Layout**: Adjust component layouts in `App.jsx`
3. **Animations**: Customize Framer Motion animations

### Repository Name

If you change the repository name, update the `base` path in `vite.config.js`:

```javascript
base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
```

## 📱 Mobile Responsiveness

The website is fully responsive and optimized for:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (320px - 767px)

## 🔧 Configuration

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The website will be deployed automatically

### Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to the `public/` directory
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own academic website. If you make improvements that could benefit others, pull requests are welcome!

## 📞 Contact

**Trung Bao Nguyen**
- Email: trungnbao@gmail.com
- GitHub: [@TrungNg](https://github.com/TrungNg)
- LinkedIn: [BaoTrung Nguyen](https://www.linkedin.com/in/baotrung-nguyen-b3252047/)

---

Built with ❤️ for the academic community

