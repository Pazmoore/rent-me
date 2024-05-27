import React from 'react'
import { useRouter } from "next/navigation"
import { cardContent } from './workSpaceData'
import ImageCard from "../../../../utilities/imageCard/ImageCard"
import SearchFilter from "../../../productUtilities/searchFilter/SearchFilter"

const Workspace = () => {
  const navigate = useRouter()
  const handleViewDetails = (id: string) => navigate.push(`/products/2/details/workspace/${id}`)
  return (
    <section>
      <SearchFilter product={'workspace'}/>
      <ImageCard cardContent={cardContent} handleViewDetails={handleViewDetails} scroll={false} />
    </section>
  )
}

export default Workspace