import React  from 'react'

interface props {
    children: React.ReactNode
}

const DashboardLayout = ({children}: Props) => {
  return (
    <div>

        {children}
    </div>
  )
}

export default DashboardLayout