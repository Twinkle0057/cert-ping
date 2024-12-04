interface FeatureItemProps {
  title: string;
  description: string;
  n: string;
  svg: string;
  svgClass: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({title, description, n, svg, svgClass}) => {
    return (
      <div style={{ opacity: "1", transform: "none" }}>
            <div className="rounded-lg border text-card-foreground shadow-sm bg-card hover:bg-accent transition-colors duration-300 h-full">
              <div className="p-6 flex flex-row items-center space-y-0 pb-2">
                <div className="tracking-tight text-lg font-semibold">{title}</div>
                <img className={svgClass} src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`} />
              </div>
              <div className="p-6 pt-0">
                <div className="text-3xl font-bold mb-2">{n}</div>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          </div>
    )
}

export default FeatureItem;