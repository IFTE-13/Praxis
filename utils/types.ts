export type DashboardStatsData = {
    title: string;
    value: string;
    icon: React.ElementType;
  };

export interface Announcement {
    id: string
    date: string
    title: string
    category: "Administrative" | "Academic" | "Health"
    priority: "high" | "medium" | "low"
    shortDesc: string
    content: string
  }