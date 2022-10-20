import React from 'react';
import Image from 'next/image';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

/* Styling */
import styles from './index.module.scss';

/* Constants */
import {
	ALL_US_STATES,
	getMapLimitOptions,
	parseSellerMapFilterData,
	SELLER_MAP_COUNTRIES,
	SELLER_MAP_MARKETPLACE
} from '../data';

interface Props {
	sellerFilterData: any[];
}
const GlobalMapFilters = (props: Props) => {
	const { sellerFilterData } = props;

	let mapDisplayOptions = getMapLimitOptions(1000);
	mapDisplayOptions = mapDisplayOptions.map((option: any) => {
		return {
			...option
		};
	});

	/* Marketplace */
	const marketPlace = parseSellerMapFilterData(
		sellerFilterData,
		'marketplace_id'
	);

	/* Country */
	const country = parseSellerMapFilterData(sellerFilterData, 'country');

	/* State */
	const state = parseSellerMapFilterData(sellerFilterData, 'state');

	/* Seller Limit */
	const sellerLimit = parseSellerMapFilterData(sellerFilterData, 'max_count');

	console.log(country, 'country');

	return (
		<div className={styles.globlMapFilters}>
			<div className={styles.formInput}>
				<label htmlFor="marketplace">Choose Marketplace</label>
				<Dropdown
					options={SELLER_MAP_MARKETPLACE}
					onChange={() => console.log('changed')}
					className={styles.selectDropdown}
					placeholderClassName={styles.selectDropdown__placeholder}
					controlClassName={styles.selectDropdown__control}
					menuClassName={styles.selectDropdown__menu}
					value={marketPlace.value.text}
					arrowClosed={
						<Image
							src="/dropdownArrow.svg"
							width={10}
							height={10}
							alt="Dropdown Arrow"
						/>
					}
					arrowOpen={
						<Image
							src="/dropdownArrow.svg"
							width={10}
							height={10}
							alt="Dropdown Arrow"
						/>
					}
				/>
			</div>

			<div className={styles.formInput}>
				<label htmlFor="country">Seller Country</label>
				<Dropdown
					options={SELLER_MAP_COUNTRIES}
					onChange={() => console.log('changed')}
					className={styles.selectDropdown}
					placeholderClassName={styles.selectDropdown__placeholder}
					controlClassName={styles.selectDropdown__control}
					menuClassName={styles.selectDropdown__menu}
					value={country.value}
					arrowClosed={
						<Image
							src="/dropdownArrow.svg"
							width={10}
							height={10}
							alt="Dropdown Arrow"
						/>
					}
					arrowOpen={
						<Image
							src="/dropdownArrow.svg"
							width={10}
							height={10}
							alt="Dropdown Arrow"
						/>
					}
				/>
			</div>

			<div className={styles.formInput}>
				<label htmlFor="states">U.S. States</label>
				<Dropdown
					options={ALL_US_STATES}
					onChange={() => console.log('changed')}
					disabled={country.value !== 'US'}
					className={styles.selectDropdown}
					placeholderClassName={styles.selectDropdown__placeholder}
					controlClassName={styles.selectDropdown__control}
					menuClassName={styles.selectDropdown__menu}
					value={state.value}
					arrowClosed={
						<Image
							src="/dropdownArrow.svg"
							width={10}
							height={10}
							alt="Dropdown Arrow"
						/>
					}
					arrowOpen={
						<Image
							src="/dropdownArrow.svg"
							width={10}
							height={10}
							alt="Dropdown Arrow"
						/>
					}
				/>
			</div>

			<div className={styles.formInput}>
				<label htmlFor="view">View</label>
				<Dropdown
					options={mapDisplayOptions}
					onChange={() => console.log('changed')}
					className={styles.selectDropdown}
					placeholderClassName={styles.selectDropdown__placeholder}
					controlClassName={styles.selectDropdown__control}
					menuClassName={styles.selectDropdown__menu}
					value={String(sellerLimit.value)}
					arrowClosed={
						<Image
							src="/dropdownArrow.svg"
							width={10}
							height={10}
							alt="Dropdown Arrow"
						/>
					}
					arrowOpen={
						<Image
							src="/dropdownArrow.svg"
							width={10}
							height={10}
							alt="Dropdown Arrow"
						/>
					}
				/>
			</div>
		</div>
	);
};

export default GlobalMapFilters;
