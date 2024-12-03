import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-4 md:px-8 lg:px-32">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a className="flex items-center gap-2" href="/">
            <img alt="certping" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" className="size-8 text-primary" style={{color:"transparent"}} src="/logo.svg"/>
            <span className="text-xl font-bold inline-block">CertPing</span>
          </a>
          </div>
          <nav className="hidden md:flex items-center space-x-6  font-medium">
            <a className="text-foreground/60 hover:text-foreground transition-colors" href="/why-ssl">Why SSl?</a>
            <a className="text-foreground/60 hover:text-foreground transition-colors" href="/#features">Features</a>
            <a className="text-foreground/60 hover:text-foreground transition-colors" href="/#pricing">Pricing</a>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a href="/login">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 rounded-full px-6">Log in</button>
            </a>
            <a className="hidden xl:flex" href="/signup">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 rounded-full px-6">Get Started</button>
            </a>
          </div>
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-6 w-6">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
