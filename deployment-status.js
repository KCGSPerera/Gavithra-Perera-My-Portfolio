#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  bold: '\x1b[1m',
  cyan: '\x1b[36m'
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
  log(colors.cyan, `ℹ️  ${message}`);
}

function checkUrl(url) {
  return new Promise((resolve) => {
    const request = https.get(url, { timeout: 10000 }, (response) => {
      resolve({
        status: response.statusCode,
        headers: response.headers,
        success: response.statusCode >= 200 && response.statusCode < 300
      });
    });

    request.on('timeout', () => {
      request.destroy();
      resolve({ success: false, error: 'Timeout' });
    });

    request.on('error', (err) => {
      resolve({ success: false, error: err.message });
    });
  });
}

async function checkDeploymentStatus() {
  console.log(`${colors.bold}🚀 Portfolio Deployment Status Check${colors.reset}\n`);

  let issues = 0;
  let warnings = 0;

  // Check environment file
  if (fs.existsSync('.env.local')) {
    success('Environment file (.env.local) exists');
    
    const envContent = fs.readFileSync('.env.local', 'utf8');
    
    // Check for placeholder values
    if (envContent.includes('localhost') || envContent.includes('your-')) {
      warning('Environment file contains placeholder values');
      warnings++;
    }

    // Check required variables
    const requiredVars = ['NEXT_PUBLIC_SITE_URL', 'NEXT_PUBLIC_GITHUB_USERNAME'];
    for (const variable of requiredVars) {
      if (!envContent.includes(variable)) {
        warning(`Missing environment variable: ${variable}`);
        warnings++;
      }
    }
  } else {
    error('Environment file (.env.local) not found');
    issues++;
  }

  // Check build directory
  if (fs.existsSync('out/index.html')) {
    success('Static build output exists (out/index.html)');
  } else if (fs.existsSync('.next')) {
    success('Development build exists (.next)');
    info('Run "npm run build" to create production build');
  } else {
    warning('No build output found - run "npm run build" first');
    warnings++;
  }

  // Check package.json scripts
  if (fs.existsSync('package.json')) {
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    const requiredScripts = ['build', 'start', 'deploy', 'deploy:prod'];
    for (const script of requiredScripts) {
      if (pkg.scripts[script]) {
        success(`Script "${script}" is configured`);
      } else {
        warning(`Missing script: ${script}`);
        warnings++;
      }
    }
  }

  // Check Vercel configuration
  if (fs.existsSync('vercel.json')) {
    success('Vercel configuration found');
    
    try {
      const vercelConfig = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
      if (vercelConfig.framework === 'nextjs') {
        success('Vercel configured for Next.js');
      }
      if (vercelConfig.headers?.length > 0) {
        success('Security headers configured');
      }
    } catch (e) {
      error('Invalid vercel.json format');
      issues++;
    }
  } else {
    info('No vercel.json found (optional for Vercel deployment)');
  }

  // Check GitHub Actions
  const workflowPath = '.github/workflows';
  if (fs.existsSync(workflowPath)) {
    const workflows = fs.readdirSync(workflowPath).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
    if (workflows.length > 0) {
      success(`Found ${workflows.length} GitHub Actions workflow(s):`);
      workflows.forEach(workflow => {
        console.log(`   - ${workflow}`);
      });
    } else {
      warning('No GitHub Actions workflows found');
      warnings++;
    }
  } else {
    warning('No .github/workflows directory found');
    warnings++;
  }

  // Check deployments
  const envContent = fs.existsSync('.env.local') ? fs.readFileSync('.env.local', 'utf8') : '';
  const siteUrl = envContent.match(/NEXT_PUBLIC_SITE_URL=(.+)/)?.[1];
  
  if (siteUrl && siteUrl !== 'localhost' && !siteUrl.includes('example.com')) {
    info(`Checking deployment at: ${siteUrl}`);
    
    const result = await checkUrl(siteUrl);
    if (result.success) {
      success(`Deployment is live and responding (${result.status})`);
    } else {
      warning(`Deployment check failed: ${result.error || 'Unknown error'}`);
      warnings++;
    }
  } else {
    info('No production URL configured for health check');
  }

  // Summary
  console.log('\\n' + '='.repeat(60));
  console.log(`${colors.bold}📊 Deployment Readiness Summary${colors.reset}`);
  console.log('='.repeat(60));

  if (issues === 0 && warnings === 0) {
    success('🎉 Your portfolio is ready for deployment!');
  } else {
    if (issues > 0) {
      error(`${issues} critical issue(s) found`);
    }
    if (warnings > 0) {
      warning(`${warnings} warning(s) found`);
    }
  }

  // Deployment recommendations
  console.log(`\\n${colors.bold}🚀 Deployment Options:${colors.reset}`);
  console.log('1. 📦 Vercel (Recommended):');
  console.log('   - Auto-deploy: Connect GitHub repo to Vercel');
  console.log('   - Manual: npm run deploy:prod');
  console.log('\\n2. 📄 GitHub Pages:');
  console.log('   - Use workflow: .github/workflows/deploy-github-pages.yml');
  console.log('   - Enable Pages in repository settings');
  console.log('\\n3. 🔧 Manual deployment:');
  console.log('   - npm run build && npm run export');
  console.log('   - Upload "out/" folder to your hosting provider');

  console.log(`\\n${colors.bold}📋 Next Steps:${colors.reset}`);
  if (issues > 0) {
    console.log('- Fix critical issues listed above');
  }
  if (warnings > 0) {
    console.log('- Review warnings for optimal deployment');
  }
  console.log('- Choose deployment method');
  console.log('- Configure custom domain (optional)');
  console.log('- Set up monitoring and analytics');

  process.exit(issues > 0 ? 1 : 0);
}

// Run the check
checkDeploymentStatus().catch((err) => {
  error(`Deployment check failed: ${err.message}`);
  process.exit(1);
});