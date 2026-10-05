"use client"

import MainLayout from "../../layouts/MainLayout"
import SimilarProducts from "../../components/SimilarProducts"
import { useEffect, useState } from "react"
import useIsLoading from "../../hooks/useIsLoading"
import { useCart } from "../../context/cart"
import { toast } from "react-toastify"
import { formatImageUrl } from "@/app/libs/imageHelper"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/app/components/ui/tabs"
import { Skeleton } from "@/app/components/ui/skeleton"
import { ShieldCheck, Truck, RotateCcw, Star, Award, CheckCircle2, ShoppingBag } from "lucide-react"

export default function Product({ params }) {
  const cart = useCart()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  const getProduct = async () => {
    useIsLoading(true)
    setLoading(true)

    try {
      const response = await fetch(`/api/product/${params.id}`)
      const prod = await response.json()
      setProduct(prod)
      if (prod) {
        cart.isItemAddedToCart(prod)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
      useIsLoading(false)
    }
  }

  useEffect(() => { 
    getProduct() 
  }, [params.id])

  return (
    <>
      <MainLayout>
        <div className="max-w-[1200px] mx-auto px-4 py-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Skeleton className="h-[420px] w-full rounded-xl" />
              <div className="space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-10 w-1/2" />
                <Skeleton className="h-12 w-full rounded-full" />
                <Skeleton className="h-40 w-full" />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              {/* Product Image Column */}
              <div className="md:col-span-5">
                <div className="sticky top-6 border rounded-xl overflow-hidden bg-gray-50 p-4 shadow-sm">
                  {product?.url ? (
                    <img
                      className="w-full h-[400px] object-cover rounded-lg"
                      src={formatImageUrl(product?.url, 700)}
                      alt={product?.title || "Product"}
                    />
                  ) : (
                    <div className="w-full h-[400px] bg-gray-100 flex items-center justify-center text-gray-400">
                      No Image Available
                    </div>
                  )}

                  <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-gray-600">
                    <div className="flex flex-col items-center gap-1 p-2 bg-white rounded-md border">
                      <Truck className="w-4 h-4 text-blue-600" />
                      <span>Free Express</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 p-2 bg-white rounded-md border">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Buyer Guarantee</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 p-2 bg-white rounded-md border">
                      <RotateCcw className="w-4 h-4 text-amber-600" />
                      <span>30-Day Returns</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Info Column */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wide">
                    <span>Verified Seller</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> 4.9 (1,248 reviews)
                    </span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
                    {product?.title}
                  </h1>
                  <p className="text-xs text-gray-500 mt-1">
                    Item #{product?.id}109284 • Guaranteed Brand New
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl border flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-500 block">Buy It Now Price</span>
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-extrabold text-gray-900">
                        £{(product?.price / 100).toFixed(2)}
                      </span>
                      <span className="line-through text-sm text-gray-400">
                        £{((product?.price * 1.2) / 100).toFixed(2)}
                      </span>
                      <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded">
                        Save 20%
                      </span>
                    </div>
                  </div>

                  <div className="text-right text-xs text-gray-500">
                    <span className="text-emerald-600 font-semibold flex items-center gap-1 justify-end">
                      <CheckCircle2 className="w-3.5 h-3.5" /> In Stock
                    </span>
                    <span>Ready for dispatch</span>
                  </div>
                </div>

                {/* Add to Cart Actions */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      if (cart.isItemAdded) {
                        cart.removeFromCart(product)
                        toast.info("Removed from cart", { autoClose: 2500 })
                      } else {
                        cart.addToCart(product)
                        toast.success("Added to cart!", { autoClose: 2500 })
                      }
                    }}
                    className={`flex-1 py-3 px-6 rounded-full font-semibold text-white shadow-sm transition-all flex items-center justify-center gap-2 ${
                      cart.isItemAdded
                        ? "bg-amber-500 hover:bg-amber-600"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>{cart.isItemAdded ? "Remove From Cart" : "Add To Cart"}</span>
                  </button>
                </div>

                {/* shadcn/ui Tabs Component */}
                <div className="pt-4">
                  <Tabs defaultValue="description" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1 rounded-lg">
                      <TabsTrigger value="description" className="text-xs font-semibold py-2">
                        Description
                      </TabsTrigger>
                      <TabsTrigger value="shipping" className="text-xs font-semibold py-2">
                        Shipping & Returns
                      </TabsTrigger>
                      <TabsTrigger value="seller" className="text-xs font-semibold py-2">
                        Seller & Guarantee
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="description" className="p-4 border rounded-lg mt-3 bg-white space-y-3">
                      <h4 className="font-semibold text-sm text-gray-900">About this item</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {product?.description}
                      </p>
                      <div className="pt-2 grid grid-cols-2 gap-2 text-xs text-gray-500 border-t">
                        <div><strong className="text-gray-700">Condition:</strong> Brand New</div>
                        <div><strong className="text-gray-700">Authenticity:</strong> 100% Guaranteed</div>
                        <div><strong className="text-gray-700">Packaging:</strong> Original Retail Box</div>
                        <div><strong className="text-gray-700">Warranty:</strong> 1 Year Manufacturer Warranty</div>
                      </div>
                    </TabsContent>

                    <TabsContent value="shipping" className="p-4 border rounded-lg mt-3 bg-white space-y-3">
                      <h4 className="font-semibold text-sm text-gray-900">Delivery & Return Policies</h4>
                      <ul className="text-xs text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>Free Standard Delivery:</strong> Estimated arrival within 2-4 business days.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>Tracking Included:</strong> Tracking number provided immediately upon dispatch.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>Hassle-Free Returns:</strong> 30-day money-back guarantee with prepaid return labels.</span>
                        </li>
                      </ul>
                    </TabsContent>

                    <TabsContent value="seller" className="p-4 border rounded-lg mt-3 bg-white space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center">
                          <Award className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900">Top-Rated Plus Seller</h4>
                          <p className="text-xs text-gray-500">99.7% Positive feedback • Member since 2018</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed pt-1">
                        Covered under the <strong>Buyer Protection Program</strong>. Get the item you ordered or receive a full refund guaranteed.
                      </p>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          )}
        </div>

        <SimilarProducts />
      </MainLayout>
    </>
  )
}
