module.exports = {
  ci: {
    collect: {
      // Use static files instead of starting a server
      staticDistDir: './out',
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', {minScore: 0.8}],
        'categories:accessibility': ['error', {minScore: 0.9}],
        'categories:best-practices': ['warn', {minScore: 0.85}],
        'categories:seo': ['warn', {minScore: 0.9}],
        'categories:pwa': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};