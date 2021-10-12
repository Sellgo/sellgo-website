import numeral from 'numeral';

export const formatNumber = (num: any) => num ? Math.round(num).toLocaleString('en-US') : '-';

export const formatFloat = (num: number) => {
	return num ? Number(num).toLocaleString('en-US', 
		{maximumFractionDigits: 2, minimumFractionDigits: 2}) : num;
};

export const formatPrice = (num: number) => {
	if (num === 0) {
		return `$0`;
	} else {
		return num ? `$${Number(num).toLocaleString('en-US', 
			{maximumFractionDigits: 2, minimumFractionDigits: 2})}` : '-';
	}
};

export const formatPercent = (num: number) =>
	num ? `${Number(num).toLocaleString('en-US', 
		{maximumFractionDigits: 2, minimumFractionDigits: 2})}%` : '-';

export const stringToFloat = (num: string, defaultTo: number = 0) => {
	if (num.length > 0) {
		return parseFloat(num);
	} else {
		return defaultTo;
	}
};

export const prettyPrintNumber = (num: number) => {
	const formattedNumber = numeral(num).format('0a');

	if (num < 9999) {
		const firstResult = formatNumber(num);
		return firstResult;
	}

	return formattedNumber;
};
