interface PricingItemProps {
  plan: string;
  price: string;
  interval: string;
  description: string;
  featuresList: string[];
}

const PricingItem: React.FC<PricingItemProps> = ({ plan, price, interval, description, featuresList }) => {
  return (
    <div style={{ opacity: 1, transform: "none" }}>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col h-full">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="font-semibold tracking-tight text-2xl">{plan}</div>
          <div className="text-sm text-muted-foreground">{description}</div>
        </div>
        <div className="p-6 pt-0 flex-grow">
          <div className="text-4xl font-bold mb-2">
            {price}
            {price !== "Free" && (<span className="text-lg font-normal text-muted-foreground">/month</span>)}
          </div>
          <p className="text-sm text-muted-foreground mb-6">{interval}-minute intervals</p>
          <ul className="space-y-2 mb-6">
            {featuresList.map((feature, index) => (
              <li key={index} className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-primary mr-2 flex-shrink-0">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <span className="text-sm">{feature}</span>
            </li>
            ))}
          </ul>
        </div>
        <div className="p-6 pt-0 flex flex-col items-stretch">
          <a href="/signup">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 w-full mb-4 rounded-full px-6">Start for {price}{price !== "Free" && "/month"}</button>
          </a>
        </div>
      </div>
    </div>

  )
}

export default PricingItem;