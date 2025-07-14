# GitHub Pages Deployment Guide

## Quick Start

1. **Create GitHub Repository**:
   - Go to GitHub and create a new repository named `trung-academic-website`
   - Make it public (required for free GitHub Pages)

2. **Upload Files**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Academic website"
   git branch -M main
   git remote add origin https://github.com/TrungNg/trung-academic-website.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"
   - The website will deploy automatically

4. **Access Your Website**:
   - URL: `https://TrungNg.github.io/trung-academic-website/`
   - Deployment takes 2-5 minutes

## Customization for Different Users

If someone else wants to use this template:

1. **Fork the repository**
2. **Update personal information** in `src/App.jsx`:
   - Name, email, location
   - Publications array
   - Experience array
   - Skills array
   - Social media links

3. **Update repository name** in `vite.config.js`:
   ```javascript
   base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
   ```

4. **Update README.md** with your information

## Troubleshooting

### Common Issues:

1. **404 Error**: Check the base path in `vite.config.js` matches your repository name
2. **CSS Not Loading**: Ensure the build process completed successfully
3. **Images Not Showing**: Place images in `src/assets/` and import them properly

### Build Locally:
```bash
npm run build
npm run preview  # Test the production build locally
```

## Advanced Configuration

### Custom Domain:
1. Add `CNAME` file to `public/` directory with your domain
2. Configure DNS with your provider
3. Update GitHub Pages settings

### Analytics:
Add Google Analytics or other tracking by modifying `index.html`

### SEO:
- Update meta tags in `index.html`
- Add structured data for better search visibility
- Optimize images and content

## Maintenance

### Regular Updates:
- Update publications as they're published
- Add new research experiences
- Update skills and competencies
- Refresh contact information

### Dependencies:
```bash
npm update  # Update packages regularly
npm audit   # Check for security issues
```

## Support

For technical issues:
1. Check the GitHub Actions logs for deployment errors
2. Verify all files are committed and pushed
3. Ensure GitHub Pages is enabled in repository settings

The website is designed to be low-maintenance and automatically deploy when you push changes to the main branch.

