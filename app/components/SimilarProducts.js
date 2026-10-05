'use client'

import { useEffect, useState } from "react"
import ProductComp from "./Product"
import { Skeleton } from "@/app/components/ui/skeleton"

export default function SimilarProducts () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const getRandomProducts = async () => {
    try {
      const response = await fetch('/api/products/get-random')
      const result = await response.json()

      if (result && Array.isArray(result)) {
        setProducts(result)
      } else {
        setProducts([])
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { getRandomProducts() }, [])

  return ( 
    <div className="border-t mt-12 pt-6">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="font-bold text-xl text-gray-900 mb-4">Similar sponsored items</h2>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="p-3 border rounded-lg space-y-3">
                <Skeleton className="h-[180px] w-full rounded-md" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products.map(product => (
              <ProductComp key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};