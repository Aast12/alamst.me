export { cn } from './tailwind'
export { getAllPosts, sortMDByDate, getUniqueTags, getUniqueTagsWithCount } from './post'
export { getFormattedDate } from './date'
export { generateToc } from './generateToc'
export type { TocItem } from './generateToc'
export { elementHasClass, toggleClass, rootInDarkMode } from './domElement'

const isDate = (value: unknown): value is Date => {
    return value instanceof Date && !isNaN(+value);
}

export { isDate };
