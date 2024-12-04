interface InsightItemProps {
  item: string
}

const InsightItem: React.FC<InsightItemProps> = ({ item }) => {
  return (
    <>
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/15 flex items-center justify-center">
        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <span className="text-lg">{item}</span>
    </>
  )
}

export default InsightItem;