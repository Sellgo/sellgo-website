import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

/* Components */
import CTAButton from '../../../components/CTAButton';

/* Data */
import { careerData } from '../data';

interface Props {}

const JobDetails: React.FC<Props> = () => {
	const { query } = useRouter();

	const job = careerData.find((data) => data.id === query.id);

	if (!job) return null;

	const renderJobInfo = () =>
		job.jobInfo.map((info, idx) => (
			<div key={idx} className={styles.jobInfo}>
				<h3>{info.heading}</h3>
				<p>{info.description}</p>
			</div>
		));

	return (
		<section className={styles.jobDetails}>
			<div className={styles.header}>
				<div className={styles.headerOne}>
					<Image
						src={job.iconImageLink}
						width={30}
						height={30}
						alt={job.jobName}
					/>
					<h3>{job.jobName}</h3>
					<CTAButton
						type="primary"
						size="small"
						variant="black"
						navigateTo={job.applyUrl}
						className={styles.closingCTA}
						asExternal
						newTarget
					>
						Apply for this job
					</CTAButton>
				</div>
				<div className={styles.headerTwo}>
					<p>{job.location}</p>
					<p>{job.team}</p>
					<p>{job.jobType}</p>
				</div>
			</div>

			<div className={styles.jobInfoContainer}>
				{renderJobInfo()}
				<CTAButton
					type="secondary"
					size="small"
					variant="black"
					asExternal
					newTarget
					navigateTo={job.applyUrl}
					className={styles.closingCTA}
				>
					Apply for this job
				</CTAButton>
			</div>

			<div className={styles.footer}>
				<Link href="/">Sellgo Home Page</Link>
			</div>
		</section>
	);
};

export default JobDetails;
