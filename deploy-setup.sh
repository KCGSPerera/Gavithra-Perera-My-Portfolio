#!/bin/bash

# 🚀 Portfolio Deployment Setup Script
# This script prepares your portfolio for deployment

set -e

echo "🎨 Setting up Gavithra Portfolio for deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18+ required. Current version: $(node --version)"
    exit 1
fi

print_success "Node.js version: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed."
    exit 1
fi

print_success "npm version: $(npm --version)"

# Install dependencies
print_status "Installing dependencies..."
npm ci

# Set up environment variables
if [ ! -f .env.local ]; then
    print_status "Creating .env.local from template..."
    cp .env.example .env.local
    print_warning "Please update .env.local with your actual values before deployment!"
else
    print_success ".env.local already exists"
fi

# Run linting
print_status "Running code linting..."
if npm run lint; then
    print_success "Linting passed"
else
    print_warning "Linting issues found. Run 'npm run lint:fix' to auto-fix"
fi

# Run type checking
print_status "Checking TypeScript types..."
if npm run type-check; then
    print_success "Type checking passed"
else
    print_error "TypeScript errors found. Please fix before deployment."
    exit 1
fi

# Test build
print_status "Testing production build..."
if npm run build; then
    print_success "Build successful"
else
    print_error "Build failed. Please fix errors before deployment."
    exit 1
fi

# Check if git is initialized
if [ ! -d .git ]; then
    print_status "Initializing git repository..."
    git init
    print_success "Git repository initialized"
fi

# Check for Vercel CLI
if ! command -v vercel &> /dev/null; then
    print_warning "Vercel CLI not installed. Install with: npm install -g vercel"
else
    print_success "Vercel CLI is installed: $(vercel --version)"
fi

echo ""
echo "🎉 Setup complete! Your portfolio is ready for deployment."
echo ""
echo "📋 Next steps:"
echo "   1. Update .env.local with your actual values"
echo "   2. Push to GitHub repository"  
echo "   3. Connect repository to Vercel for automatic deployment"
echo "   4. Or use 'npm run deploy:prod' for manual Vercel deployment"
echo ""
echo "📚 See DEPLOYMENT.md for detailed deployment instructions."
echo ""
echo "🔗 Quick deploy with Vercel:"
echo "   vercel --prod"
echo ""
print_success "Happy coding! 🚀"