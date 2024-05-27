"use client"
import { useRouter } from "next/navigation"
import { cardContent } from "./AccommodationsData"
import ImageCard from "../../../../utilities/imageCard/ImageCard"
import SearchFilter from "../../../productUtilities/searchFilter/SearchFilter"

const Accommodations = () => {
  const navigate = useRouter()
  const handleViewDetails = (id: string) => navigate.push(`/products/1/details/accommodations/${id}`)
  return (
    <section>
      <SearchFilter/>
      <ImageCard cardContent={cardContent} handleViewDetails={handleViewDetails} scroll={false} />
    </section>
  )
}

export default Accommodations