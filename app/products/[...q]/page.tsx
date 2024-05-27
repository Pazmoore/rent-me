"use client"
import React, { useEffect, useState } from "react"
import Workspace from "../../components/productsDashboard/products/workspace/home/Workspace"
import RideSharing from "../../components/productsDashboard/products/rideSharing/home/RideSharing"
import Accommodations from "../../components/productsDashboard/products/accommodations/home/Accommodations"
import FractionalProperties from "@/app/components/productsDashboard/products/fractionalProperties/FractionalProperties"

const Page = ({ params }: { params: { q: string } }) => {
  const [activeTab, setActiveTab] = useState("accommodations")
  useEffect(() => {
    setActiveTab(params.q[0])
  }, [params.q])

  return (
    <section>
      {activeTab === "ride" && <RideSharing/>}
      {activeTab === "workspace" && <Workspace/>}
      {activeTab === "accommodations" && <Accommodations/>}
      {activeTab === "properties" && <FractionalProperties/>}
    </section>
  )
}

export default Page