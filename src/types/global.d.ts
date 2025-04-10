
// Add this to your existing global.d.ts file
interface Window {
  prerenderReady?: boolean;
  __PRERENDER_STATUS?: any;
  gtag?: (...args: any[]) => void;
  dataLayer?: any[];
  BrevoConversations?: any;
  BrevoConversationsID?: string;
}

// Add any other global types needed for your application
