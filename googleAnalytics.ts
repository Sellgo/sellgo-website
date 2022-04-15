import ReactGA from "react-ga4";

ReactGA.initialize([
    {
        trackingId: String(process.env.NEXT_PUBLIC_GA_ID),
    }
]);

export default ReactGA;