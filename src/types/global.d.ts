// Global type definitions for Super Coach Pro

declare global {
  interface Window {
    mockSubscribeAPI?: (email: string) => Promise<{ success: boolean }>;
    gtag?: (...args: any[]) => void;
  }
}

export {};