/* eslint-disable react/no-danger */
import type { AppProps /* AppContext */ } from 'next/app';
import { ApolloProvider } from '@apollo/client/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

/* Styling */
import '../styles/globals.scss';

/* Apollo Client */
import client from '../apollo';

/* Components */
import Layout from '../components/Layout';
import analytics from '../analytics';

/* Utils */
import { generatePageURL } from '../utils/SEO';

function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	const { asPath } = router;

	useEffect(() => {
		// track only on production and window based environment: fullstory and analytics
		if (
			process.env.NEXT_PUBLIC_NODE_ENV === 'production' &&
			typeof window !== 'undefined'
		) {
			analytics.page({
				url: generatePageURL(asPath),
				title: window.document.title,
				path: asPath
			});
		}
	}, [asPath]);

	return (
		<ApolloProvider client={client}>
			{/* Hotjar Integration */}
			<Script
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `(function(h,o,t,j,a,r){
h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_HJID},hjsv:${process.env.NEXT_PUBLIC_HOTJAR_HJSV}};
a=o.getElementsByTagName('head')[0];
r=o.createElement('script');r.async=1;
r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')`
				}}
			/>

			{/* Intercom settings */}
			<Script
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `  window.intercomSettings = {
app_id: "ju2u3hej",
custom_launcher_selector:'#chat-link'
};
`
				}}
			/>

			{/* Intercom main script */}
			<Script
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function")
				{ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function()
					{i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function()
					{var s=d.createElement('script');s.type='text/javascript';
					s.async=true;s.src='https://widget.intercom.io/widget/ju2u3hej';
					var x=d.getElementsByTagName('script')[0];
					x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}
					else{w.addEventListener('load',l,false);}}})()`
				}}
			/>

			{/* Rewardful main script */}
			<Script
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					// eslint-disable-next-line max-len
					__html: `(function(w,r){w._rwq=r;w[r]=w[r]||function(){(w[r].q=w[r].q||[]).push(arguments)}})(window,'rewardful')`
				}}
			/>

			{/* Rewardful remote script */}
			<Script
				strategy="afterInteractive"
				src="https://r.wdfl.co/rw.js"
				data-rewardful="f34d76"
			/>

			<Script
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					// eslint-disable-next-line max-len
					__html: `rewardful('ready',function(){
						console.log("From main script",Rewardful.referral)
					})`
				}}
			/>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App;
