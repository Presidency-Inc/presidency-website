
// Small wrapper to ensure server.js is run with Node.js ESM support
import('./server.js').catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
