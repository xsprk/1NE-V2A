import Script from "next/script";

export const GoogleAnalyticsTracking = () => {
    return (
        <>
            {/* <!-- Google tag (gtag.js) --> */}
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-M0S8FPNR8E"></Script>
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-M0S8FPNR8E');
                `}
            </Script>

        </>
    );
}