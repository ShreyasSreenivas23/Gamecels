// client/src/styles/theme.js
const theme = {
  colors: {
    primary: '#7C3AED', // Vibrant purple
    secondary: '#4F46E5', // Indigo
    accent: '#F59E0B', // Amber
    background: '#F3F4F6',
    surface: '#FFFFFF',
    text: '#1F2937',
    textLight: '#6B7280',
    heading: '#111827',
    error: '#EF4444',
    success: '#10B981',
    border: '#E5E7EB',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  },
  transitions: {
    default: '0.3s ease',
    fast: '0.15s ease',
    slow: '0.5s ease',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
};

export default theme;
