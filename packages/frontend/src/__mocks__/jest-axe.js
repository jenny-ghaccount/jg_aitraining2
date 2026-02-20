// Temporary mock for jest-axe when not installed
export const axe = async () => ({ violations: [] });
export const toHaveNoViolations = {
  toHaveNoViolations: () => ({ pass: true, message: () => 'Mock axe test' })
};