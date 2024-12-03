const Reliability = () => {
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
      <section className="w-full py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
          <div style={{opacity: "1", transform: "none"}}>
            <div className="rounded-lg border shadow-sm bg-primary-foreground/5 backdrop-blur-sm border-primary-foreground/10 hover:border-primary-foreground/20 transition-colors duration-300 text-primary-foreground">
              <div className="p-8 sm:p-12">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
                    Ready to Elevate Your
                    <span className="text-purple-600"> Website Reliability?</span>
                  </h2>
                  <p className="mx-auto max-w-[700px] text-primary-foreground/80 text-lg ">Join thousands of websites that trust CertPing for comprehensive SSL and website monitoring. Start your journey to unparalleled uptime today.</p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 px-8 bg-secondary rounded-full text-secondary-foreground hover:bg-secondary/90">Start Your Free Trial</button>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background h-11 px-8 border-primary-foreground text-primary rounded-full hover:text-primary-foreground hover:bg-primary-foreground/10">Schedule a Demo</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Reliability;
  