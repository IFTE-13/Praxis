"use client"

import { usePathname } from "next/navigation";
import { SearchForm } from '@/components/forms/search-form'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export const Navbar = () => {
  const pathname = usePathname(); // Get the current path
  const currentPage = pathname
    .split("/")
    .filter(Boolean) // Remove empty segments
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1)) // Capitalize each segment
    .join(" / ");
  return (
    <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                  {currentPage || "Home"}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="ml-auto px-3">
            <SearchForm />
          </div>
        </header>
      </SidebarInset>
  )
}
