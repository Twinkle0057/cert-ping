import PricingItem from "./PricingItem";

const Pricing = () => {
  const customSolutions = [
    "SSO Integration",
    "Dedicated Support Channel",
    "Privated dedicated Resources",
    "Advance Analytics",
    "Scheduled Planned outages and more"
  ]

  const pricingList = [
    {
      plan: "Free Plan",
      price: "Free",
      interval: "5",
      featuresList: [
        "Monitor up to 3 websites",
        "Email notifications",
        "Basic uptime monitoring",
        "Public and Private Dashboards",
        "SSL expiry alerts"
      ],
      description: "Small businesses and Developers"
    },
    {
      plan: "Starter Plan",
      price: "$9.99",
      interval: "1",
      featuresList: [
        "10 monitors",
        "API access for custom automation",
        "Alerts via email & Slack",
        "Multi-user access",
        "Public and Private Dashboards",
        "SSL expiry alerts"
      ],
      description: "Freelancers, Small teams",
    },
    {
      plan: "Professional Plan",
      price: "$19.99",
      interval: "1",
      featuresList: [
        "50 monitors",
        "App integrations for alerts",
        "Multi- user access",
        "Public and Private Dashboards",
        "Bulk imports your domain from domain providers",
        "SSL expiry alerts",
      ],
      description: "SMEs, Fast-growing Startups"
    },
    {
      plan: "Advanced Plan",
      price: "$49.99",
      interval: "0.5",
      featuresList: [
        "150 monitors",
        "Anomaly detection",
        "Multi-user access",
        "Public and Private Dashboards",
        "SSL expiry alerts",
        "Bulk imports your domain from domain providers",
        "Priority support",
      ],
      description: "Agencies, Enterprises with high demands"
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="px-4 sm:px-12 md:px-20 lg:px-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Simple, Transparent
            <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Choose the plan that fits your needs.</p>
        </div>
        {/* <div className="flex justify-center mb-8">
          <div className="bg-muted rounded-full p-1 flex items-center">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3 rounded-full">Monthly</button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-full">
              Yearly
              <div className="rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 ml-2 flex justify-center items-center">Save 20%</div>
            </button>
          </div>
        </div> */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pricingList.map((pricing, index) => (
            <PricingItem key={index} plan={pricing.plan} price={pricing.price} interval={pricing.interval} description={pricing.description} featuresList={pricing.featuresList}></PricingItem>
          ))}
        </div>
        <div className="mt-16 text-center w-full border px-4 py-20 rounded-md">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-lg text-muted-foreground">We offer tailored plans for large organizations and high-traffic websites.</p>
          <div className="py-2  mb-6 text-muted-foreground ">
            <ul className="mx-auto w-fit">
              {customSolutions.map((solution: string, index: number) => (
                <li key={index}>
                  <span className="flex justify-center items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-green-500">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
          <a href="https://calendly.com/seaionl-support/certping-custom-solution">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-full px-6">Contact Sales</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
