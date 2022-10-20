import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

/* Constants */
import { sellerDataForMap, sellerFilterDataForMap } from '../data';

/* Styling */
import styles from './index.module.scss';

/* Components */
const PlotAllMarkers = dynamic(() => import('../PlotAllMarkers'), {
	ssr: false
});

const GlobalMapFilters = dynamic(() => import('../GlobalMapFilters'), {
	ssr: false
});

const Map = () => {
	const [sellerData, setSellerData]: any = useState();
	const [sellerFilterData, setSellerFilterData]: any = useState();

	useEffect(() => {
		setSellerData(sellerDataForMap);
	}, []);

	useEffect(() => {
		setSellerFilterData(sellerFilterDataForMap);
	}, []);

	return (
		<section className={styles.sellerMapsContainer}>
			<div className={styles.mapContainer}>
				<GlobalMapFilters sellerFilterData={sellerFilterData} />

				<MapContainer
					preferCanvas
					center={[37.09024, -95.712891]}
					zoom={4.6}
					minZoom={2.5}
					maxZoom={18}
					closePopupOnClick
					className={styles.map}
					doubleClickZoom={false}
					maxBounds={[
						[-90, -180],
						[90, 180]
					]}
					zoomControl={false}
				>
					<ZoomControl position="topright" />
					<TileLayer
						attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						noWrap
					/>

					<PlotAllMarkers sellersData={sellerData} />
				</MapContainer>
			</div>
		</section>
	);
};

export default Map;
