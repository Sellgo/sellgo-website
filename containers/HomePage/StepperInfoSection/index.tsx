import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

/* Styling */
import styles from './index.module.scss';

/* Data */
import { productsDetails } from './data';

/* Components */
import ProductCard from '../../../components/ProductCard';
import CTAButton from '../../../components/CTAButton';

interface Props {}

const ProductsSection: React.FC<Props> = () => {
	return (
		<section className={`page-container ${styles.productsSection}`}>
		</section>
	);
};

export default ProductsSection;
