import React, { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import validator from 'validator';
import Image from 'next/image';
import axios from 'axios';
import Select from 'react-select';
import Modal from 'react-modal';
import Link from 'next/link';

/* Styling */
import styles from './index.module.scss';

/* Containers */
import HeroBox from '../../containers/Affliate/HeroBox';
import FirstCTASection from '../../containers/Affliate/FirstCTASection';
import BenefitsSection from '../../containers/Affliate/BenefitsSection';
import ApprovalProcessSection from '../../containers/Affliate/ApprovalProcessSection';
import ClosingCTASection from '../../containers/Affliate/ClosingCTASection';
import FAQSection from '../../containers/Affliate/FAQSection';

/* Components */
import FormInput from '../../components/FormInput';
import SEOHead from '../../components/SEOHead';
import FormSubmitConfirm from '../../components/FormSubmitConfirm';

/* Data */
import { seoData } from '../../data/SEO/affliate';

/* Utils */
import { generatePageURL } from '../../utils/SEO';

/* App Config */
import AppConfig from '../../config';

interface Props {}

const Affliate: React.FC<Props> = () => {
	// const [data] = useState({
	// 	firstName: '',
	// 	lastName: '',
	// });

	// const [formDataError, setFormDataError] = useState({
	// 	firstNameErr: false,
	// 	lastNameErr: false,
	// 	emailErr: false,
	// 	phoneNumberErr: false,
	// 	companyErr: false,
	// 	websiteErr: false
	// });

	// const [openSubmitConfirm, setOpenSubmitConfirm] = useState(false);

	return (
		<>
			<SEOHead
				title={seoData.title}
				description={seoData.description}
				imageUrl={seoData.imageUrl}
				keywords={seoData.keywords.join(',')}
				pageUrl={generatePageURL(seoData.slug)}
			/>
			<main className={styles.demoPage}>
				<HeroBox />
				<FirstCTASection/>
				<BenefitsSection/>
				<ApprovalProcessSection/>
				<ClosingCTASection/>
				<FAQSection/>
			</main>
		</>
	);
};

export default Affliate;
