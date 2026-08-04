type ClassValue = string | false | null | undefined;

/** Joins truthy class name fragments with a single space. */
export const cn = (...classes: ClassValue[]): string => classes.filter(Boolean).join(' ');
