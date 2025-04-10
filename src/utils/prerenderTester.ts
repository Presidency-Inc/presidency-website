
/**
 * PrerenderTester - Utility to help test Prerender.io integration
 * 
 * This utility provides functions to help verify and debug your Prerender integration.
 * Add this to your project and use the provided methods to test the integration.
 */

/**
 * Test if the current page is being prerendered
 * @returns {boolean} True if the page appears to be in a prerender context
 */
export const isBeingPrerendered = (): boolean => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  const botPatterns = [
    'bot', 'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider',
    'yandexbot', 'prerender', 'headless', 'lighthouse', 'chrome-lighthouse'
  ];
  
  const isBot = botPatterns.some(pattern => userAgent.includes(pattern));
  
  return isBot || 
         Boolean(window.__PRERENDER_STATUS) ||
         Boolean((window as any).__PRERENDER_INJECTED);
};

/**
 * Log prerender diagnostic information to the console
 */
export const logPrerenderDiagnostics = (): void => {
  console.log('📊 Prerender Diagnostics Report 📊');
  console.log('----------------------------------');
  console.log('• User Agent:', window.navigator.userAgent);
  console.log('• Is Prerender Context:', isBeingPrerendered());
  console.log('• prerenderReady Flag:', window.prerenderReady);
  console.log('• Document Ready State:', document.readyState);
  console.log('• URL:', window.location.href);
  
  // Check meta tags
  const metaTags = Array.from(document.querySelectorAll('meta')).map(meta => ({
    name: meta.getAttribute('name') || meta.getAttribute('property'),
    content: meta.getAttribute('content')
  }));
  
  console.log('• Meta Tags:', metaTags);
  
  // Log prerender-specific meta tags
  const prerenderTags = metaTags.filter(tag => 
    tag.name && tag.name.includes('prerender')
  );
  
  console.log('• Prerender Meta Tags:', prerenderTags);
  
  // Additional environment information
  console.log('• Window Dimensions:', {
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  console.log('----------------------------------');
};

/**
 * Test prerender by simulating a bot request
 * Note: This doesn't work directly in the browser but shows how to test
 */
export const testWithCurl = (): string => {
  const commands = [
    `# Test with Googlebot user agent`,
    `curl -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" ${window.location.href}`,
    ``,
    `# Test with forcePrerender parameter`,
    `curl "${window.location.href}?forcePrerender=true"`,
    ``,
    `# Check headers to see if x-prerender-requestid is present`,
    `curl -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" -I ${window.location.href}`,
    ``,
    `# View response with Prerender service`,
    `curl -A "Googlebot" ${window.location.href} | grep -i prerender`
  ];
  
  return commands.join('\n');
};

export default {
  isBeingPrerendered,
  logPrerenderDiagnostics,
  testWithCurl
};
