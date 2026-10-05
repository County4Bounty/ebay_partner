"use client";

import { useState } from "react";
import Link from "next/link";
import { formatImageUrl } from "@/app/libs/imageHelper";
import { Eye, ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/app/context/cart";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/app/components/ui/dialog";

export default function Product({ product }) {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const cart = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    cart.addToCart(product);
    toast.success("Added to cart!", { autoClose: 2500 });
  };

  return (
    <>
      <div className="group relative max-w-[220px] p-2.5 border border-gray-100 hover:border-gray-300 hover:shadow-xl bg-white rounded-lg transition-all duration-200 flex flex-col justify-between">
        <Link href={`/product/${product?.id}`} className="block">
          <div className="relative overflow-hidden rounded-md bg-gray-50 h-[190px]">
            {product?.url ? (
              <img
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                src={formatImageUrl(product.url, 250)}
                alt={product.title}
              />
            ) : null}

            {/* Quick View Button on Hover */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setQuickViewOpen(true);
              }}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-medium py-1.5 px-3 rounded-full shadow-md flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-blue-600 hover:text-white"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Quick View</span>
            </button>
          </div>

          <div className="pt-3">
            <h3 className="font-medium text-[14px] text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors">
              {product?.title}
            </h3>
            
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-bold text-base text-gray-900">
                £{(product?.price / 100).toFixed(2)}
              </span>
              <span className="line-through text-xs text-gray-400">
                £{((product?.price * 1.2) / 100).toFixed(2)}
              </span>
            </div>

            <p className="text-[11px] text-emerald-600 font-medium mt-0.5">
              Free 2-day delivery
            </p>
          </div>
        </Link>
      </div>

      {/* shadcn/ui Dialog Modal for Quick View */}
      <Dialog open={quickViewOpen} onOpenChange={setQuickViewOpen}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-50 p-6 flex items-center justify-center">
              <img
                src={formatImageUrl(product?.url, 500)}
                alt={product?.title}
                className="max-h-[300px] w-full object-cover rounded-lg shadow-sm"
              />
            </div>
            
            <div className="p-6 flex flex-col justify-between">
              <div>
                <DialogHeader className="text-left">
                  <DialogTitle className="text-xl font-bold text-gray-900">
                    {product?.title}
                  </DialogTitle>
                  <DialogDescription className="text-xs text-gray-500 mt-1">
                    Authentic item • In Stock • Ships within 24 hours
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-2xl font-extrabold text-gray-900">
                    £{(product?.price / 100).toFixed(2)}
                  </span>
                  <span className="line-through text-sm text-gray-400">
                    £{((product?.price * 1.2) / 100).toFixed(2)}
                  </span>
                  <span className="text-xs bg-red-100 text-red-700 font-semibold px-2 py-0.5 rounded">
                    Save 20%
                  </span>
                </div>

                <div className="mt-4 text-xs text-gray-600 line-clamp-4 leading-relaxed">
                  {product?.description}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
                <Link
                  href={`/product/${product?.id}`}
                  onClick={() => setQuickViewOpen(false)}
                  className="w-full text-center text-xs text-gray-600 hover:text-blue-600 font-medium py-1.5"
                >
                  View full details & specs →
                </Link>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}