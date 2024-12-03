const Features = () => {
  const features = [
    {
      title: "Instant Notifications",
      description: "Receive alerts for uptime, performance, and SSL issues.",
    },
    {
      title: "Full Reports and Analytics",
      description: "Analyze in-depth metrics for better decision-making.",
    },
    {
      title: "Customizable Monitoring",
      description: "Adapt our monitoring tools to your unique requirements.",
    },
  ];

  return (
    <section className="w-full my-20 px-4 space-y-16 max-w-screen overflow-x-clip">
      <div>
        <h2 className="text-3xl md:text-5xl max-w-5xl mx-auto font-bold text-center mb-16">
          Comprehensive Website &amp; SSL Monitoring at
          <span className="block bg-gradient-to-r h-fit pb-1 from-primary to-purple-600 bg-clip-text text-transparent">Your Fingertips</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12  max-w-7xl mx-auto">
          <div style={{ opacity: "1", transform: "none" }}>
            <div className="rounded-lg border text-card-foreground shadow-sm bg-card hover:bg-accent transition-colors duration-300 h-full">
              <div className="p-6 flex flex-row items-center space-y-0 pb-2">
                <div className="tracking-tight text-lg font-semibold">Websites Monitored</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe ml-auto h-5 w-5 text-blue-500">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <div className="p-6 pt-0">
                <div className="text-3xl font-bold mb-2">10,000+</div>
                <p className="text-sm text-muted-foreground">SSL certificates continuously checked</p>
              </div>
            </div>
          </div>
          <div style={{ opacity: "1", transform: "none" }}>
            <div className="rounded-lg border text-card-foreground shadow-sm bg-card hover:bg-accent transition-colors duration-300 h-full">
              <div className="p-6 flex flex-row items-center space-y-0 pb-2">
                <div className="tracking-tight text-lg font-semibold">SSL Issues Detected</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert ml-auto h-5 w-5 text-yellow-500">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
              </div>
              <div className="p-6 pt-0">
                <div className="text-3xl font-bold mb-2">500+</div>
                <p className="text-sm text-muted-foreground">Expired or misconfigured certificates identified</p>
              </div>
            </div>
          </div>
          <div style={{ opacity: "1", transform: "none" }}>
            <div className="rounded-lg border text-card-foreground shadow-sm bg-card hover:bg-accent transition-colors duration-300 h-full">
              <div className="p-6 flex flex-row items-center space-y-0 pb-2">
                <div className="tracking-tight text-lg font-semibold">Alerts Sent</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap ml-auto h-5 w-5 text-purple-500">
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
              </div>
              <div className="p-6 pt-0">
                <div className="text-3xl font-bold mb-2">5,000+</div>
                <p className="text-sm text-muted-foreground">Timely notifications for certificate problems</p>
              </div>
            </div>
          </div>
          <div style={{ opacity: "1", transform: "none" }}>
            <div className="rounded-lg border text-card-foreground shadow-sm bg-card hover:bg-accent transition-colors duration-300 h-full">
              <div className="p-6 flex flex-row items-center space-y-0 pb-2">
                <div className="tracking-tight text-lg font-semibold">Uptime Guaranteed</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check ml-auto h-5 w-5 text-green-500">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="p-6 pt-0">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <p className="text-sm text-muted-foreground">Reliable monitoring around the clock</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-16 max-w-7xl mx-auto" style={{ opacity: "1", transform: "none" }}>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
          <div className="relative bg-white/5 backdrop-blur-sm border-[10px] border-primary/40 rounded-2xl overflow-hidden shadow-2xl">
            <img alt="Certping Monitoring Dashboard" loading="lazy" width="1920" height="1080" decoding="async" data-nimg="1" className="w-full h-auto" style={{ color: "transparent" }} src="/image.webp" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"></div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 gap-2">
            Explore Full Dashboard
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
