module.exports = {
  ci: {
    collect: {
      // Use static files instead of starting a server
      staticDistDir: './out',
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', {minScore: 0.5}],
        'categories:accessibility': ['warn', {minScore: 0.5}],
        'categories:best-practices': ['warn', {minScore: 0.5}],
        'categories:seo': ['warn', {minScore: 0.5}],
        'categories:pwa': 'off',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};