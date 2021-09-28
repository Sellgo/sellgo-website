export const formatPrice = (num: number) => {
    if (num === 0) {
        return `$0`
    } else {
        return num ? `$${Number(num).toFixed(2)}` : '-'
    }
};

export const formatPercent = (num: number) => num ? `${Number(num).toFixed(2)}%` : '-';

export const stringToFloat = (num: string, defaultTo: number = 0) => {
    if (num.length > 0 && parseFloat(num) !== 0) {
        return parseFloat(num);
    } else {
        return defaultTo;
    }
}