import MoniteringItem from "./MoniteringItem";

const Monitering: React.FC = () => {
  const moniteringFeatures = [
    {
      title: "Unified Dashboard", 
      description: "Manage all your websites from a single, intuitive interface.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300">
                          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
                          <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
                          <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
                        </svg>`,
      svgClass: "lucide lucide-layers h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300",
    },
    {
      title: "Team Collaboration",
      description: "Invite team members and assign roles for efficient management.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>`,
      svgClass: "lucide lucide-users h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300",
    },
    {
      title: "Custom Alerts",
      description: "Set up personalized notifications for critical events.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300">
                          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                        </svg>`,
      svgClass: "lucide lucide-bell h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300",
    },
    {
      title: "Security Monitoring",
      description: "Keep track of SSL certificates and security vulnerabilities.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300">
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        </svg>`,
      svgClass: "lucide lucide-shield h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300",
    }
  ]
  return (
    <section className="py-20 bg-gradient-to-b from-background/90 via-background/95 to-background max-w-screen overflow-x-clip">
      <div className="px-4 sm:px-12 md:px-20 lg:px-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6" style={{opacity: 1, transform: "none"}}>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl bg-clip-text bg-gradient-to-r from-primary via-primary to-purple-600/50">Centralized Website Monitoring Management</h2>
            <p className="text-xl text-muted-foreground max-w-[600px]">Manage all your websites' monitoring effortlessly from our intuitive web interface. Stay on top of your entire web infrastructure with just a few clicks.</p>
            <div className="grid gap-6 sm:grid-cols-2">
              {moniteringFeatures.map((feature, index) => (
                <MoniteringItem key={index} title={feature.title} description={feature.description} svg={feature.svg} svgClass={feature.svgClass}></MoniteringItem>
              ))}
            </div>
            <a href="/signup">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 mt-8 rounded-full px-6">Explore the Dashboard</button>
            </a>
          </div>
          <div className="lg:w-1/2 space-y-6" style={{opacity: 1, transform: "none"}}>
            <div className="relative w-full" style={{paddingBottom: "56.25%"}}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground rounded-lg blur-2xl opacity-20 animate-pulse"></div>
              <div className="absolute inset-0">
                <div className="absolute inset-0" style={{opacity: 1, transform: "none", zIndex:2}}>
                  <img alt="CertPing Dashboard Overview" loading="lazy" decoding="async" data-nimg="fill" className="object-fit rounded-lg border-4 border-background/10 shadow-xl" style={{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,color:"transparent"}} sizes="100vw" src="/tab1.webp"/>
                </div>
                <div className="absolute inset-0" style={{opacity: 0.5, transform: "translateY(20px)", zIndex: 1}}>
                  <img alt="CertPing Dashboard Detail View" loading="lazy" decoding="async" data-nimg="fill" className="object-fit rounded-lg border-4 border-background/10 shadow-xl" style={{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,color:"transparent"}} sizes="100vw" src="/tab2.webp"/>
                </div>
              </div>
            </div>
            <p className="text-sm text-center text-muted-foreground">Our intuitive dashboard provides both overview and detailed insights into your website's performance and security.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Monitering;