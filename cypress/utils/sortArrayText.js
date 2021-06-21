
export const sortArrayTextAsc = array => [...array].sort((a, b) => a.localeCompare(b, 'pl'));
export const sortArrayTextDesc = array => [...array].sort((a, b) => b.localeCompare(a, 'pl'));
