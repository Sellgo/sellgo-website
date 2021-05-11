import React from 'react';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

interface Props {
	name: string;
}

const GemGenerator: React.FC<Props> = (props) => {
	let gems: React.ReactNode;

	switch (props.name) {
		case 'Starter': {
			gems = [
				<Image
					key={uuid()}
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
					key={uuid()}
					src="/gemIcon.svg"
					alt="Gem Icon"
					width={10}
					height={10}
					priority
				/>,
				<Image
					key={uuid()}
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
					key={uuid()}
					src="/gemIcon.svg"
					alt="Gem Icon"
					width={10}
					height={10}
					priority
				/>,
				<Image
					key={uuid()}
					src="/greenGem.svg"
					alt="Gem Icon"
					width={10}
					height={10}
					priority
				/>,
				<Image
					key={uuid()}
					src="/blueGem.svg"
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
