import StatsCard from "@/components/app/dashborad/stats"

export default function page() {
  return (
    <div className="container mx-auto py-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
      <StatsCard />
    </div>
  )
}
