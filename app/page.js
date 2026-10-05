"use client";

import { useEffect, useState } from 'react';
import CarouselComp from './components/CarouselComp'
import Product from './components/Product';
import MainLayout from './layouts/MainLayout';
import useIsLoading from "@/app/hooks/useIsLoading"
import { Skeleton } from "@/app/components/ui/skeleton";
import { Sparkles, TrendingUp } from "lucide-react";

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const getProducts = async () => {
    useIsLoading(true)
    setLoading(true)

    try {
      const response = await fetch('/api/products')
      const prods = await response.json()
      if (Array.isArray(prods)) {
        setProducts(prods)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
      useIsLoading(false)
    }
  }

  useEffect(() => { getProducts() }, [])

  return (
    <MainLayout>
      <CarouselComp />

      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <div className="flex items-center justify-between mt-2 mb-6 border-b pb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Featured Marketplace Products</h2>
          </div>
          <span className="text-xs text-gray-500 font-medium">
            {loading ? "Loading items..." : `${products.length} Items Available`}
          </span>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div key={i} className="p-3 border rounded-lg bg-white space-y-3">
                <Skeleton className="h-[190px] w-full rounded-md" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-5 w-2/5" />
                <Skeleton className="h-3 w-3/5" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  )
}
