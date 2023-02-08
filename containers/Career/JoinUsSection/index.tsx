import React from 'react';
import Image from 'next/image';
import Dropdown from 'react-dropdown';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';

/* Data */
import { careerData } from '../data';

interface Props {}

const teams = [...new Set(careerData.map((item) => item.team))];
const locations = [...new Set(careerData.map((item) => item.location))];

const JoinUsSection: React.FC<Props> = () => {
	const [listOfTeams, setListOfTeams] = React.useState(teams);
	const [listOfLocations, setListOfLocations] = React.useState(locations);

	const [teamOptions, setTeamOptions] = React.useState(['All', ...teams]);
	const [locationOptions, setLocationOptions] = React.useState([
		'All',
		...locations
	]);

	const [selected, setSelected] = React.useState({
		location: '',
		team: ''
	});

	const onTeamChange = (selectedTeam) => {
		if (selectedTeam.value === 'All') {
			setListOfTeams(teams);
			setLocationOptions(['All', ...locations]);
		} else {
			setListOfTeams([selectedTeam.value]);
			const filteredJobs = careerData.filter(
				(data) => data.team === selectedTeam.value
			);

			const filteredLocation = filteredJobs.map((data) => data.location);
			setLocationOptions(['All', ...filteredLocation]);
		}
		setSelected({ ...selected, team: selectedTeam });
	};

	const onLocationChange = (selectedLocation) => {
		if (selectedLocation.value === 'All') {
			setListOfLocations(locations);
			setTeamOptions(['All', ...teams]);
		} else {
			setListOfLocations(selectedLocation.value);
			const filteredJobs = careerData.filter(
				(data) => data.location === selectedLocation.value
			);

			const filteredTeam = filteredJobs.map((data) => data.team);
			setTeamOptions(['All', ...filteredTeam]);
		}
		setSelected({ ...selected, location: selectedLocation });
	};

	const hasLocation = (team) => {
		console.log(listOfLocations);
		return careerData.some(
			(data) => data.team === team && listOfLocations.includes(data.location)
		);
	};

	const renderTeams = () =>
		listOfTeams.map((team: string, idx: number) => (
			<div className={styles.jobList} key={idx}>
				{hasLocation(team) && <h3>{team}</h3>}

				{careerData.map((job, idx2) =>
					job.team === team && listOfLocations.includes(job.location) ? (
						<div className={styles.jobItem} key={idx2}>
							<Image
								src={job.iconImageLink}
								width={25}
								height={25}
								alt={job.jobName}
							/>
							<p>{job.jobName}</p>
							<CTAButton
								type="secondary"
								size="productPageSmall"
								variant="rainbow"
								navigateTo={`/career/${job.id}`}
								className={styles.closingCTA}
							>
								Apply
							</CTAButton>
						</div>
					) : null
				)}
			</div>
		));

	return (
		<section id="join-us" className={`page-container ${styles.joinUsSection}`}>
			<h2 className="secondary-heading">Join Sellgo</h2>
			<p>We love what we do and have a lot of work ahead of us.</p>
			<p>
				So if you’re a talented builder excited about increasing economy in the
				world, we’d love to hear from you.
			</p>

			<div className={styles.filter}>
				<div className={styles.filterByText}>Filter by</div>
				<Dropdown
					options={locationOptions}
					onChange={onLocationChange}
					placeholder="Location"
					className={styles.selectDropdown}
					placeholderClassName={styles.selectDropdown__placeholder}
					controlClassName={styles.selectDropdown__control}
					menuClassName={styles.selectDropdown__menu}
					value={selected.location}
					arrowClosed={
						<Image
							src="/dropdownArrowGray.svg"
							width={10}
							height={10}
							alt="Dropdown Arrow"
						/>
					}
					arrowOpen={
						<Image
							src="/dropdownArrowGray.svg"
							width={10}
							height={10}
							alt="Dropdown Arrow"
						/>
					}
				/>

				<Dropdown
					options={teamOptions}
					onChange={onTeamChange}
					value={selected.team}
					placeholder="Team"
					className={styles.selectDropdown}
					placeholderClassName={styles.selectDropdown__placeholder}
					controlClassName={styles.selectDropdown__control}
					menuClassName={styles.selectDropdown__menu}
					arrowClosed={
						<Image
							src="/dropdownArrowGray.svg"
							width={10}
							height={10}
							alt="Dropdown Arrow"
						/>
					}
					arrowOpen={
						<Image
							src="/dropdownArrowGray.svg"
							width={10}
							height={10}
							alt="Dropdown Arrow"
						/>
					}
				/>
			</div>

			{renderTeams()}
		</section>
	);
};

export default JoinUsSection;
