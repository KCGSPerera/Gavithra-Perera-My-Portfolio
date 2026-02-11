# Gavithra Perera - Portfolio Website

A modern, production-ready Next.js 14 portfolio showcasing software engineering projects, experience, education, and certifications. Built with TypeScript, Tailwind CSS, and Framer Motion for smooth animations.

![Portfolio Preview](public/images/portfolio-preview.jpg)

## 🚀 Features

- **Modern Design**: Dark theme with glassmorphism effects and gradient accents
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Static export enabled for optimal performance
- **SEO Optimized**: Meta tags, sitemap, and structured data
- **Animations**: Smooth scroll animations using Framer Motion
- **Type Safe**: Built with TypeScript for better development experience
- **Accessible**: Semantic HTML and keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Static Export Ready

## 📁 Project Structure

```
gavithra-portfolio/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   ├── sitemap.ts        # SEO sitemap
│   ├── robots.ts         # SEO robots.txt
│   ├── projects/
│   │   └── page.tsx      # Projects page
│   ├── experience/
│   │   └── page.tsx      # Experience page
│   ├── education/
│   │   └── page.tsx      # Education page
│   └── certifications/
│       └── page.tsx      # Certifications page
├── components/            # Reusable components
│   ├── Navbar.tsx        # Navigation component
│   ├── Footer.tsx        # Footer component  
│   ├── HeroSection.tsx   # Hero section
│   ├── SectionTitle.tsx  # Section title component
│   ├── ProjectCard.tsx   # Project card component
│   ├── ExperienceCard.tsx # Experience card
│   ├── EducationCard.tsx # Education card
│   └── CertificationCard.tsx # Certification card
├── data/                 # Data files
│   ├── projects.ts       # Projects data
│   ├── experience.ts     # Experience data
│   ├── education.ts      # Education data
│   └── certifications.ts # Certifications data
├── types/                # TypeScript type definitions
│   ├── project.ts        # Project types
│   ├── experience.ts     # Experience types
│   ├── education.ts      # Education types
│   └── certification.ts  # Certification types
├── lib/                  # Utility functions
│   └── utils.ts          # Utility functions
└── public/               # Static assets
    ├── images/           # Image assets
    ├── videos/           # Video assets
    └── documents/        # Document assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gavithra/portfolio.git
   cd gavithra-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the values in `.env.local`:
   ```
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build and Deploy

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Static Export (for deployment)
```bash
npm run build
```

The static files will be generated in the `out/` directory.

## 🎨 Customization

### 1. Personal Information

Update your personal information in the data files:

- **data/projects.ts** - Add your projects
- **data/experience.ts** - Add your work experience  
- **data/education.ts** - Add your education details
- **data/certifications.ts** - Add your certifications

### 2. Styling

The project uses Tailwind CSS with custom configurations:

- **tailwind.config.ts** - Custom colors, animations, and utilities
- **app/globals.css** - Global styles and component classes

### 3. Components

All components are in the `components/` directory and can be customized:

- Modify animations in individual components
- Update card layouts and styling
- Change color schemes and gradients

### 4. Images and Assets

Add your images to the appropriate directories:

```
public/
├── images/
│   ├── projects/         # Project screenshots
│   ├── certifications/   # Certification images  
│   ├── experience/       # Company/work images
│   ├── og-image.jpg      # Open Graph image
│   └── twitter-image.jpg # Twitter card image
├── videos/               # Project demo videos
└── documents/            # CVs, project docs, etc.
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# SEO
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
```

### Next.js Configuration

The `next.config.ts` is configured for static export:

```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

## 📱 Pages Overview

### Home Page (`/`)
- Hero section with animated introduction
- Skills showcase  
- Featured projects preview
- Work experience preview
- Education preview
- Call to action section

### Projects Page (`/projects`)
- Complete project portfolio
- Category filtering
- Search functionality  
- Project statistics
- Detailed project cards with technologies

### Experience Page (`/experience`)
- Professional experience timeline
- Detailed role descriptions
- Key achievements and projects
- Technology skills gained
- Performance statistics

### Education Page (`/education`)
- Academic achievements
- GPA tracking and Dean's List recognition
- Course modules and curriculum
- Institution information
- Academic timeline

### Certifications Page (`/certifications`)
- Industry certifications
- Certification providers
- Verification links
- Professional development timeline
- Skills validation

## 🎯 SEO Features

- Meta titles and descriptions
- Open Graph tags for social sharing
- Twitter Card support  
- Structured data markup
- XML sitemap generation
- Robots.txt configuration
- Canonical URLs

## 🚀 Deployment & CI/CD

This portfolio includes a complete CI/CD pipeline with GitHub Actions and optimized Vercel deployment.

### Quick Start Deployment

1. **Automated Setup** (Recommended)
   ```bash
   chmod +x deploy-setup.sh
   ./deploy-setup.sh
   ```

2. **Manual Setup**
   ```bash
   # Install dependencies
   npm ci
   
   # Setup environment
   cp .env.example .env.local
   
   # Test build
   npm run build
   
   # Deploy to Vercel
   npm run deploy:prod
   ```

### Deployment Options

#### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod
```

**Features:**
- ✅ Automatic deployments on git push
- ✅ Preview deployments for pull requests  
- ✅ Edge CDN optimization
- ✅ Custom domain support
- ✅ Built-in analytics

#### Option 2: GitHub Pages
```bash
# Build for static export
npm run export

# Deploy the out/ directory
```

#### Option 3: Netlify
```bash
# Build the project
npm run build

# Deploy the out/ directory
```

### CI/CD Pipeline

The GitHub Actions workflow automatically:

- 🔍 **Code Quality**: ESLint, TypeScript checking
- 🏗️ **Build Testing**: Multi-Node.js versions (18.x, 20.x)
- 🚨 **Security**: npm audit, dependency scanning
- 📊 **Performance**: Lighthouse CI testing
- 🚀 **Deploy**: Automatic Vercel deployment on main branch
- 📋 **Preview**: Deployment previews for pull requests

### Environment Configuration

Update `.env.local` with your information:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GITHUB_USERNAME=YourGitHubUsername
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourprofile
NEXT_PUBLIC_EMAIL=your.email@domain.com
```

### Performance Optimizations

**Automatic Optimizations:**
- Image optimization and lazy loading
- Code splitting and tree shaking  
- Static generation for optimal performance
- CDN caching and compression
- Security headers implementation

**Lighthouse Targets:**
- 🎯 Performance: 90+
- 🎯 Accessibility: 95+
- 🎯 Best Practices: 90+
- 🎯 SEO: 95+

### Deployment Checklist

Before deploying:
- [ ] Update personal information in data files
- [ ] Add your images to public/images/
- [ ] Configure environment variables
- [ ] Test build locally: `npm run build`
- [ ] Verify all links work correctly
- [ ] Check mobile responsive design

### Custom Domain Setup

1. Add domain in Vercel dashboard
2. Configure DNS records:
   ```
   CNAME: www -> cname.vercel-dns.com
   A: @ -> 76.76.19.61
   ```
3. Update `NEXT_PUBLIC_SITE_URL` environment variable

### Monitoring

- **Build Status**: GitHub Actions
- **Performance**: Lighthouse CI reports  
- **Analytics**: Vercel Analytics (automatic)
- **Security**: Automated security scanning

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## 📦 Scripts Reference

```bash
# Development
npm run dev              # Start development server
npm run type-check       # TypeScript type checking
npm run lint            # ESLint code checking
npm run lint:fix        # Auto-fix ESLint issues

# Building  
npm run build           # Production build
npm run export          # Static export for deployment
npm run preview         # Test production build locally
npm run build:analyze   # Bundle size analysis

# Deployment
npm run deploy          # Deploy to Vercel (preview)
npm run deploy:prod     # Deploy to Vercel (production)
npm run clean          # Clean build artifacts
```

## 🛠️ Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server  
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for styling
- Framer Motion for animations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Gavithra Perera**
- Portfolio: [https://gavithra-portfolio.vercel.app](https://gavithra-portfolio.vercel.app)
- GitHub: [@KCGSPerera](https://github.com/KCGSPerera/)
- LinkedIn: [Gavithra Perera](https://www.linkedin.com/in/gavithra-perera-93941a2a8/)
- Email: gavithrapay666@gmail.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide React for beautiful icons
- SLIIT for the educational foundation

---

**⭐ If you found this project helpful, please give it a star on GitHub!**