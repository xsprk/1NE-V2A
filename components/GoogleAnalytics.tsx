import Script from "next/script";

export const GoogleAnalyticsTracking = () => {
    return (
        <>
            {/* <!-- Google tag (gtag.js) --> */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-M0S8FPNR8E"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-M0S8FPNR8E');
            </script>
        </>
    );
}