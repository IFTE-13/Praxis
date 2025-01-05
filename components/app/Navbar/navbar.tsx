import { SearchForm } from '@/components/forms/search-form'
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

export const Navbar = () => {
  return (
    <SidebarInset>
      <header className="flex h-16 items-center justify-between px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex items-center">
          <SearchForm />
        </div>
      </header>
    </SidebarInset>
  )
}
