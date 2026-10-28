const firstLetter = (word) => (word || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .charAt(0)
    .toUpperCase();
/** Initials of a full name: first letter of the first and of the last name ("ana maria silva" -> "AS"). */
export function initialsOf(name) {
    const words = (name || '').trim().split(/\s+/).filter(Boolean);
    if (!words.length)
        return '';
    return firstLetter(words[0]) + (words.length > 1 ? firstLetter(words[words.length - 1]) : '');
}
