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
		return (
			<Html>
				<Head />

				{/* Hotjar Integration */}
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1573858,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')`
					}}
				/>

				{/* Intercom settings */}
				<script
					dangerouslySetInnerHTML={{
						__html: `  window.intercomSettings = {
    app_id: "ju2u3hej"
  };
`
					}}
				/>

				{/* Intercom main script */}
				<script
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
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
