import React from 'react';
import Image from 'next/image';

interface Props {
	name: string;
}

const GemGenerator: React.FC<Props> = (props) => {
	let gems: React.ReactNode;

	switch (props.name) {
		case 'Starter': {
			gems = [
				<Image
					src="/gemIcon.svg"
					alt="Gem Icon"
					width={10}
					height={10}
					priority
				/>
			];
			break;
		}
		case 'Suite': {
			gems = [
				<Image
					src="/gemIcon.svg"
					alt="Gem Icon"
					width={10}
					height={10}
					priority
				/>,
				<Image
					src="/greenGem.svg"
					alt="Gem Icon"
					width={10}
					height={10}
					priority
				/>
			];
			break;
		}

		case 'Professional': {
			gems = [
				<Image
					src="/gemIcon.svg"
					alt="Gem Icon"
					width={10}
					height={10}
					priority
				/>,
				<Image
					src="/greenGem.svg"
					alt="Gem Icon"
					width={10}
					height={10}
					priority
				/>,
				<Image
					src="/greenGem.svg"
					alt="Gem Icon"
					width={10}
					height={10}
					priority
				/>
			];
			break;
		}
		default: {
			gems = null;
		}
	}

	return <>{gems}</>;
};

export default GemGenerator;
