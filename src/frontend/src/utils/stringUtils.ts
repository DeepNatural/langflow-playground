export const createRandomString = (function() {
    const _createChars = (
        start: string, 
        end: string
    ) => {
        const startCode = start.charCodeAt(0);
        const endCode = end.charCodeAt(0);

        return Array.from(
            { length: endCode - startCode + 1 },
            (_, i) => String.fromCharCode(startCode + i)
        );
    };

    const lowerChars = _createChars('a', 'z');
    const upperChars = _createChars('A', 'Z');
    const digitChars = _createChars('0', '9');

    const chars = [
        ...lowerChars,
        ...upperChars,
        ...digitChars,
    ] as const;

    return (length = 32) => Array.from(
        { length },
        () => chars[Math.floor(Math.random() * chars.length)]
    ).join('');
}());
