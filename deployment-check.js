#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  bold: '\x1b[1m'
};

function log(color, message) {
  console.log(`${color}${message}${colors.reset}`);
}

function success(message) {
  log(colors.green, `✅ ${message}`);
}

function error(message) {
  log(colors.red, `❌ ${message}`);
}

function warning(message) {
  log(colors.yellow, `⚠️  ${message}`);
}

function info(message) {
  log(colors.blue, `ℹ️  ${message}`);
}

function checkDeploymentReadiness() {
  console.log(`${colors.bold}🚀 Portfolio Deployment Readiness Check${colors.reset}\n`);

  let issues = 0;
  let warnings = 0;

  // Check 1: Environment file
  if (fs.existsSync('.env.local')) {
    success('Environment file (.env.local) exists');
    
    const envContent = fs.readFileSync('.env.local', 'utf8');
    if (envContent.includes('localhost')) {
      warning('Environment file still contains localhost URLs');
      warnings++;
    }
  } else {
    error('Environment file (.env.local) missing');
    info('Run: cp .env.example .env.local');
    issues++;
  }

  // Check 2: Build artifacts
  if (fs.existsSync('.next') || fs.existsSync('out')) {
    success('Build artifacts found');
  } else {
    warning('No build artifacts found - run npm run build first');
    warnings++;
  }

  // Check 3: Package.json scripts
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const requiredScripts = ['build', 'start', 'lint', 'type-check', 'deploy', 'deploy:prod'];
  
  requiredScripts.forEach(script => {
    if (packageJson.scripts[script]) {
      success(`Script '${script}' configured`);
    } else {
      error(`Missing script: ${script}`);
      issues++;
    }
  });

  // Check 4: GitHub Actions workflow
  if (fs.existsSync('.github/workflows/ci-cd.yml')) {
    success('GitHub Actions workflow configured');
  } else {
    error('Missing GitHub Actions workflow');
    issues++;
  }

  // Check 5: Vercel configuration
  if (fs.existsSync('vercel.json')) {
    success('Vercel configuration found');
  } else {
    warning('Vercel configuration missing (optional)');
    warnings++;
  }

  // Check 6: Next.js configuration
  if (fs.existsSync('next.config.js')) {
    success('Next.js configuration found');
    
    const nextConfig = fs.readFileSync('next.config.js', 'utf8');
    if (nextConfig.includes('output:')) {
      success('Static export configured');
    } else {
      warning('Static export not configured');
      warnings++;
    }
  } else {
    error('Missing Next.js configuration');
    issues++;
  }

  // Check 7: Image directories
  const imageDirs = [
    'public/images/projects',
    'public/images/certifications', 
    'public/images/experience',
    'public/images/events'
  ];

  imageDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      success(`Image directory exists: ${dir}`);
    } else {
      warning(`Missing image directory: ${dir}`);
      warnings++;
    }
  });

  // Check 8: Data files
  const dataFiles = [
    'data/projects.ts',
    'data/experience.ts',
    'data/education.ts',
    'data/certifications.ts',
    'data/events.ts'
  ];

  dataFiles.forEach(file => {
    if (fs.existsSync(file)) {
      success(`Data file exists: ${file}`);
    } else {
      error(`Missing data file: ${file}`);
      issues++;
    }
  });

  // Check 9: Git setup
  if (fs.existsSync('.git')) {
    success('Git repository initialized');
  } else {
    error('Git repository not initialized');
    info('Run: git init');
    issues++;
  }

  // Check 10: README documentation
  if (fs.existsSync('README.md')) {
    success('README.md exists');
    
    const readme = fs.readFileSync('README.md', 'utf8');
    if (readme.includes('DEPLOYMENT.md')) {
      success('Deployment documentation referenced');
    } else {
      warning('Deployment documentation not referenced');
      warnings++;
    }
  } else {
    error('Missing README.md');
    issues++;
  }

  // Summary
  console.log(`\n${colors.bold}📊 Summary${colors.reset}`);
  
  if (issues === 0 && warnings === 0) {
    success('🎉 Your portfolio is ready for deployment!');
    info('Next steps:');
    info('1. Push to GitHub repository');
    info('2. Connect to Vercel for automatic deployment');
    info('3. Configure custom domain (optional)');
  } else {
    if (issues > 0) {
      error(`${issues} critical issue(s) found`);
      info('Fix these issues before deployment');
    }
    
    if (warnings > 0) {
      warning(`${warnings} warning(s) found`);
      info('These should be addressed for optimal deployment');
    }
  }

  console.log('\n📚 For detailed deployment instructions, see: DEPLOYMENT.md');
  
  return issues === 0;
}

if (require.main === module) {
  const isReady = checkDeploymentReadiness();
  process.exit(isReady ? 0 : 1);
}

module.exports = { checkDeploymentReadiness };