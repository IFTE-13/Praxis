import { CalendarSection } from "@/components/app/dashborad/calendar"
import StatsCard from "@/components/app/dashborad/stats"
import { FinanceChart } from "@/components/charts/finance-chart"
import { StudentAttendanceChart } from "@/components/charts/student-attendence-chart"
import { StudentsCountChart } from "@/components/charts/students-count-chart"

export default function page() {
  return (
    <div className="container mx-auto">
      <div className="py-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="col-span-1 md:col-span-2 lg:col-span-2">
        <div className="flex flex-col space-y-4 mx-4 md:mx-2 lg:mx-0">
          <StatsCard />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-x-0 lg:gap-x-4">
            <div className="col-span-1">
              <StudentsCountChart />
            </div>
            <div className="col-span-1 md:col-span-2">
              <StudentAttendanceChart />
            </div>
          </div>
          <FinanceChart/>
        </div>
      </div>
      <div className="col-span-1">
        <CalendarSection />
      </div>
    </div>
    </div>
  )
}
