// Format a number with dot as thousand separator
export function formatWithDotSeparator(value: number | string): string {
  if (!value) return '';
  
  const numStr = String(value).replace(/[^\d]/g, '');
  const num = parseInt(numStr, 10);
  if (isNaN(num)) return '';
  
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Parse string with dot separators back to number
export function parseFormattedNumber(value: string): number {
  const cleanValue = value.replace(/[^\d]/g, '');
  return cleanValue ? parseInt(cleanValue, 10) : 0;
}

// Calculate cursor position after formatting
export function calculateCursorPosition(
  oldValue: string,
  newValue: string,
  oldPosition: number
): number {
  // Count separators before cursor in old value
  const oldSeparatorCount = (oldValue.slice(0, oldPosition).match(/\./g) || []).length;
  
  // Count separators before cursor in new value
  const valueWithoutSeparators = oldValue.replace(/\./g, '');
  const cursorWithoutSeparators = oldPosition - oldSeparatorCount;
  const newSeparatorCount = (
    newValue
      .slice(0, cursorWithoutSeparators + Math.floor(cursorWithoutSeparators / 3))
      .match(/\./g) || []
  ).length;
  
  return cursorWithoutSeparators + newSeparatorCount;
}