import React from 'react';

/* Styles */
import styles from './index.module.scss';

interface Props {
	header: string[];
	body: string[][];
}

const AllFeaturesTable: React.FC<Props> = (props) => {
	const { header, body } = props;

	return (
		<table className={styles.allFeaturesTable}>
			<thead>
				<tr>
					{header.map((headerVal: string) => {
						return <th>{headerVal}</th>;
					})}
				</tr>
			</thead>
			<tbody>
				{body.map((bodyRow: string[]) => {
					return (
						<tr>
							{bodyRow.map((bodyVal: string) => {
								return <td>{bodyVal}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default AllFeaturesTable;
