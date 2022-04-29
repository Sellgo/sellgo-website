/* eslint-disable react/no-danger */
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext
} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		const PIXEL_ID = String(process.env.PIXEL_ID);
		return (
			<Html>
				<Head>
					<link rel="shortcut icon" href="/favicon.ico" />
					{/* Hotjar Integration */}
					<script
						defer
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
					<script
						defer
						dangerouslySetInnerHTML={{
							__html: `  window.intercomSettings = {
    app_id: "ju2u3hej",
		custom_launcher_selector:'#chat-link'
  };
`
						}}
					/>

					{/* <!-- Facebook Pixel Code --> */}
					<script
						defer
						dangerouslySetInnerHTML={{
							__html: `!function(f,b,e,v,n,t,s)
						{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
						n.callMethod.apply(n,arguments):n.queue.push(arguments)};
						if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
						n.queue=[];t=b.createElement(e);t.async=!0;
						t.src=v;s=b.getElementsByTagName(e)[0];
						s.parentNode.insertBefore(t,s)}(window, document,'script',
						'https://connect.facebook.net/en_US/fbevents.js');
						fbq('init', '${PIXEL_ID}');
						fbq('track', 'PageView');`
						}}
					/>
					<noscript>
						<img
							height="1"
							width="1"
							style={{ display: 'none' }}
							src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
							alt="pixel"
						/>
					</noscript>
					{/* <!-- End Facebook Pixel Code --> */}

					{/* Intercom main script */}
					<script
						defer
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
					<script
						defer
						dangerouslySetInnerHTML={{
							// eslint-disable-next-line max-len
							__html: `(function(w,r){w._rwq=r;w[r]=w[r]||function(){(w[r].q=w[r].q||[]).push(arguments)}})(window,'rewardful')`
						}}
					/>

					{/* Rewardful remote script */}
					<script defer src="https://r.wdfl.co/rw.js" data-rewardful="f34d76" />
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
