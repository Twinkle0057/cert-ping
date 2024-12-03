const WebPresence: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-primary/5 ">
      <div className="px-4 sm:px-12 md:px-20 lg:px-32">
        <div className="text-center mb-16" style={{ opacity: "1", transform: "none" }}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Elevate Your Web Presence with
            <span className="text-primary"> CertPing</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">Discover how our powerful features ensure your websites stay secure, reliable, and high-performing.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <div style={{ opacity: 1, transform: "none" }}>
            <div className="rounded-lg border text-card-foreground shadow-sm h-full bg-card hover:bg-accent transition-colors duration-300">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell w-6 h-6 text-primary">
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                  </svg>
                </div>
                <div className="font-semibold tracking-tight text-xl">Instant Notifications</div>
              </div>
              <div className="p-6 pt-0">
                <div className="text-sm text-foreground/80">Get alerted immediately when your SSL certificate becomes invalid or website issues are detected.</div>
              </div>
            </div>
          </div>
          <div style={{ opacity: 1, transform: "none" }}>
            <div className="rounded-lg border text-card-foreground shadow-sm h-full bg-card hover:bg-accent transition-colors duration-300">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-6 h-6 text-primary">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <div className="font-semibold tracking-tight text-xl">Full Featured API</div>
              </div>
              <div className="p-6 pt-0">
                <div className="text-sm text-foreground/80">Add websites, get statistics, and receive webhooks for seamless integration.</div>
              </div>
            </div>
          </div>
          <div style={{ opacity: 1, transform: "none" }}>
            <div className="rounded-lg border text-card-foreground shadow-sm h-full bg-card hover:bg-accent transition-colors duration-300">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-6 h-6 text-primary">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                </div>
                <div className="font-semibold tracking-tight text-xl">Lightning Fast Checks</div>
              </div>
              <div className="p-6 pt-0">
                <div className="text-sm text-foreground/80">Rapid SSL and website health checks every 10 seconds for unparalleled reliability.</div>
              </div>
            </div>
          </div>
          <div style={{ opacity: 1, transform: "none" }}>
            <div className="rounded-lg border text-card-foreground shadow-sm h-full bg-card hover:bg-accent transition-colors duration-300">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-6 h-6 text-primary">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="font-semibold tracking-tight text-xl">Team Collaboration</div>
              </div>
              <div className="p-6 pt-0">
                <div className="text-sm text-foreground/80">Collaborate with your team to manage SSL certificates and website monitoring efficiently.</div>
              </div>
            </div>
          </div>
          <div style={{ opacity: 1, transform: "none" }}>
            <div className="rounded-lg border text-card-foreground shadow-sm h-full bg-card hover:bg-accent transition-colors duration-300">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-6 h-6 text-primary">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                </div>
                <div className="font-semibold tracking-tight text-xl">Advanced Security</div>
              </div>
              <div className="p-6 pt-0">
                <div className="text-sm text-foreground/80">Protect your websites with our cutting-edge security features and constant vigilance.</div>
              </div>
            </div>
          </div>
          <div style={{ opacity: 1, transform: "none" }}>
            <div className="rounded-lg border text-card-foreground shadow-sm h-full bg-card hover:bg-accent transition-colors duration-300">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-no-axes-column-increasing w-6 h-6 text-primary">
                    <line x1="12" x2="12" y1="20" y2="10"></line>
                    <line x1="18" x2="18" y1="20" y2="4"></line>
                    <line x1="6" x2="6" y1="20" y2="16"></line>
                  </svg>
                </div>
                <div className="font-semibold tracking-tight text-xl">Detailed Analytics</div>
              </div>
              <div className="p-6 pt-0">
                <div className="text-sm text-foreground/80">Gain valuable insights with our comprehensive analytics and reporting tools.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebPresence;