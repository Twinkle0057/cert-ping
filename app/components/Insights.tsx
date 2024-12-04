"use client";

import InsightItem from "./InsightItem";
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const Insights: React.FC = () => {
  const items = [
    "Real-time uptime monitoring",
    "SSL certificate expiration alerts",
    "Performance metrics tracking",
    "Custom alert thresholds",
    "Multi-location checking",
  ]
  const data: any[] = [
    {name: "January", uv: 250},
    {name: "February", uv: 240},
    {name: "March", uv: 130},
    {name: "April", uv: 200},
    {name: "May", uv: 280},
    {name: "June", uv: 150},
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background via-background/95 to-background/90 max-w-screen overflow-x-clip">
      <div className="px-4 sm:px-12 md:px-20 lg:px-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6" style={{ opacity: 1, transform: "none" }}>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl bg-clip-text bg-gradient-to-r from-primary via-primary to-purple-600/50">Powerful Insights at Your Fingertips</h2>
            <p className="text-xl text-muted-foreground max-w-[600px]">Our advanced monitoring system provides real-time insights and proactive alerts to keep your websites running smoothly. Visualize your website's performance with our intuitive dashboard.</p>
            <ul className="space-y-4">
              {items.map((item: string, index: number) => (
                <li key={index} className="flex items-center gap-3" style={{ opacity: 1, transform: "none" }}>
                  <InsightItem item={item}></InsightItem>
                </li>
              ))}
            </ul>
            <a href="/signup">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 mt-8 rounded-full px-6">Explore Dashboard Features</button>
            </a>
          </div>
          <div className="lg:w-1/2" style={{ opacity: 1, transform: "none" }}>
            <div className="rounded-lg border text-card-foreground shadow-sm w-full max-w-2xl mx-auto overflow-hidden bg-card/50 backdrop-blur-sm border-primary/10">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="tracking-tight text-2xl font-bold">Performance Overview</div>
                <div className="text-sm text-muted-foreground">Monitor your website's uptime and response time</div>
              </div>
              <div className="p-6 pt-0">
                <div className="h-[350px]">
                  {/* recharts */}
                  <BarChart width={491} height={350} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="uv" barSize={30} fill="#8884d8" />
                  </BarChart>
                </div>
                {/* <div className="mt-4 text-center text-sm text-muted-foreground">Showing Response Time (ms)</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Insights;