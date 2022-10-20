import React, { useState } from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';

const icon = L.icon({ iconUrl: '/marker-icon.png' });

const PlotAllMarkers = (props: any) => {
	const { sellersData } = props;

	const [internalId, setInternalId] = useState('');

	console.log(internalId, 'internalId');

	return (
		<>
			{sellersData.length > 0 &&
				sellersData.map((data: any) => {
					const center: [number, number] = [data.latitude, data.longitude];
					return (
						<Marker
							key={data.id}
							data-id={data.id}
							position={center}
							icon={icon}
							eventHandlers={{
								click: (e: any) => {
									setInternalId(e.target.options['data-id']);
								}
							}}
						>
							<Tooltip direction="top" offset={[-15, -10]}>
								Click for more details
							</Tooltip>
						</Marker>
					);
				})}
		</>
	);
};

export default PlotAllMarkers;
