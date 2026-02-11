# 🚀 Deployment Guide

This guide covers the complete CI/CD setup and deployment process for the Gavithra Portfolio website.

## 📋 Overview

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Primary Deployment**: Vercel (recommended)
- **Alternative Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions with multiple workflows
- **Domain**: Custom domain supported
- **Monitoring**: Lighthouse CI, Security audits, Dependency checks

## 🛠 Deployment Setup

### 1. Prerequisites

- GitHub repository with Actions enabled
- Node.js 18+ installed locally
- Account on chosen platform:
  - **Vercel** (recommended - free tier with excellent Next.js support)
  - **GitHub Pages** (free, static hosting)

### 2. Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

Update the values in `.env.local`:
- `NEXT_PUBLIC_SITE_URL`: Your production URL
- `NEXT_PUBLIC_GITHUB_USERNAME`: Your GitHub username
- `NEXT_PUBLIC_LINKEDIN_URL`: Your LinkedIn profile
- `NEXT_PUBLIC_EMAIL`: Your email address

### 3. Vercel Deployment (Recommended)

#### Option A: Automatic Deployment
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel will automatically deploy on every push to `main`

#### Option B: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
npm run deploy:prod
```

### 4. GitHub Actions CI/CD

The pipeline automatically runs on:
- **Push to `main`**: Full CI + Production deployment
- **Push to `develop`**: Full CI + Preview deployment
- **Pull Requests**: CI checks + Preview comments

#### Pipeline includes:
- ✅ Code linting (ESLint)
- ✅ TypeScript compilation check
- ✅ Production build test
- ✅ Security audit
- ✅ Performance testing (Lighthouse)
- ✅ Multi-Node.js version testing (18.x, 20.x)

## 🔧 Manual Deployment Steps

### 1. Build Locally
```bash
# Install dependencies
npm ci

# Run linting
npm run lint

# Type check
npm run type-check

# Build for production
npm run build

# Test production build locally
npm run start
```

### 2. Deploy to Vercel
```bash
# Preview deployment
npm run deploy

# Production deployment
npm run deploy:prod
```

## 🌐 Domain Configuration

### Custom Domain Setup
1. Go to Vercel Dashboard > Your Project > Settings > Domains
2. Add your custom domain
3. Configure DNS records as shown
4. Update `NEXT_PUBLIC_SITE_URL` in environment variables

### DNS Configuration Example
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61
```

## 📊 Performance Optimization

### Automatic Optimizations
- ✅ Image optimization
- ✅ Code splitting
- ✅ Static export for pages
- ✅ Gzip compression
- ✅ CDN delivery (Vercel Edge Network)
- ✅ Security headers
- ✅ Cache optimization

### Lighthouse Scores Target
- 🎯 Performance: 80+
- 🎯 Accessibility: 90+
- 🎯 Best Practices: 85+
- 🎯 SEO: 90+

## 🔒 Security Features

### Implemented Security Headers
- `X-Content-Type-Options`: nosniff
- `X-Frame-Options`: DENY
- `X-XSS-Protection`: 1; mode=block
- `Content-Security-Policy`: Configured
- `Strict-Transport-Security`: HSTS enabled

## 🚨 Troubleshooting

### Common Issues

#### Build Fails
```bash
# Clear cache and reinstall
npm run clean
npm ci
npm run build
```

#### TypeScript Errors
```bash
# Run type check
npm run type-check

# Fix auto-fixable issues
npm run lint:fix
```

#### Vercel Deployment Issues
1. Check build logs in Vercel dashboard
2. Verify environment variables are set
3. Check Node.js version compatibility

### Performance Issues
```bash
# Analyze bundle size
npm run build:analyze

# Test production build locally
npm run preview
```

## 📈 Monitoring & Analytics

### Built-in Monitoring
- Vercel Analytics (automatic)
- GitHub Actions build notifications
- Lighthouse CI reports

### Optional Integrations
- Google Analytics (configure in `.env.local`)
- Sentry for error tracking
- Vercel Speed Insights

## 🔄 Continuous Integration Workflow

```mermaid
graph LR
    A[Push Code] --> B[GitHub Actions]
    B --> C[Lint Code]
    C --> D[Type Check]
    D --> E[Build Test]
    E --> F[Security Audit]
    F --> G[Deploy to Vercel]
    G --> H[Lighthouse Test]
    H --> I[Production Ready]
```

## 📝 Deployment Checklist

Before deploying to production:

- [ ] Environment variables configured
- [ ] All social links updated
- [ ] Contact information correct
- [ ] Images optimized and added
- [ ] SEO metadata updated
- [ ] Performance tested locally
- [ ] Security headers verified
- [ ] Custom domain configured (if applicable)
- [ ] Analytics setup (optional)
- [ ] Backup strategy in place

## 🆘 Support

For deployment issues:
1. Check Vercel dashboard logs
2. Review GitHub Actions workflow results
3. Test locally with `npm run preview`
4. Check environment variables configuration

## 🔗 Quick Links

- **Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
- **GitHub Actions**: Repository > Actions tab
- **Performance Testing**: Lighthouse CI reports
- **Domain Management**: Vercel > Settings > Domains

---

🎉 **Congratulations!** Your portfolio is now deployed with professional CI/CD pipeline!