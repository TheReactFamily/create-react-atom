export const convertStringToComponent = (text: string): string => text.replace(/(?:^[^A-Za-z]*|[\W_]+)(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
