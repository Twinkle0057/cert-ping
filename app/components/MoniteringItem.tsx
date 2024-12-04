interface MoniteringItemProps {
  title: string;
  description: string;
  svg: string;
  svgClass: string;
}

const MoniteringItem: React.FC<MoniteringItemProps> = ({ title, description, svg, svgClass }) => {
  return (
    <div style={{ opacity: 1, transform: "none" }}>
      <div className="rounded-lg border text-card-foreground shadow-sm h-full group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/10">
        <div className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-2 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <img className={svgClass} src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`} />
            </div>
            <div>
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">{title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoniteringItem;