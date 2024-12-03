const Hero: React.FC = () => {
  return (
    <div className="relative max-w-[100svw] overflow-x-clip">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-48 top-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-48 top-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      <section className="relative pt-20 pb-32">
        <div className="absolute inset-0 bg-grid-purple-600/[0.04] bg-[size:75px_75px] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-primary">Elevate Your Online Presence with</span>
            <span className="block bg-gradient-to-r h-fit pb-1 from-primary to-purple-600 bg-clip-text text-transparent">Comprehensive Monitoring</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-xl text-muted-foreground sm:max-w-3xl">Stay worry-free with the simplest monitoring service ever. Get instant alerts when your site goes down or your SSL certificate expires. No fuss, just peace of mind</p>
          <div className="mt-10 max-w-4xl mx-auto">
            <form className="relative ">
              <div className="flex items-center ">
                <div className="relative flex-grow">
                  <input type="text" className="flex px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full h-16 pl-12 pr-32 text-lg rounded-full border-2 border-primary/20 bg-background/60 backdrop-blur-sm focus:border-primary/60 transition-colors duration-300" placeholder="Enter your website" />
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-4 top-1/2 transform -translate-y-1/2 text-primary/60 h-6 w-6">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 absolute right-2 top-1/2 transform -translate-y-1/2 h-12 px-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-300" type="submit">
                  Check Now
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-5 w-5">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 116" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 51.4091H349.922C606.664 51.4091 859.771 116 1080 116C1300.23 116 1440 51.4091 1440 51.4091V115.5H0V51.4091Z" className="fill-background"></path>
          <path d="M0 0H349.922C606.664 0 859.771 64.5909 1080 64.5909C1300.23 64.5909 1440 0 1440 0V64.0909H0V0Z" className="fill-background/50"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
