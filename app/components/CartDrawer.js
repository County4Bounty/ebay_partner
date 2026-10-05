"use client";

import { useCart } from "@/app/context/cart";
import { formatImageUrl } from "@/app/libs/imageHelper";
import { useRouter } from "next/navigation";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from "@/app/components/ui/sheet";

export default function CartDrawer({ children }) {
  const cart = useCart();
  const router = useRouter();
  const cartItems = cart.getCart();

  const handleCheckout = () => {
    if (cart.cartTotal() <= 0) {
      alert("Your cart is empty!");
      return;
    }
    router.push('/checkout');
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col justify-between p-6">
        <div>
          <SheetHeader className="border-b pb-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-blue-600" />
              <SheetTitle>Shopping Cart ({cartItems.length})</SheetTitle>
            </div>
            <SheetDescription className="text-xs text-gray-500">
              Review your items and proceed to secure checkout
            </SheetDescription>
          </SheetHeader>

          {cartItems.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div className="font-semibold text-gray-700">Your cart is currently empty</div>
              <p className="text-xs text-gray-400 max-w-xs mx-auto">
                Discover trending items and add them to your cart to check out.
              </p>
            </div>
          ) : (
            <div className="divide-y max-h-[60vh] overflow-y-auto pr-1 mt-2">
              {cartItems.map((item, idx) => (
                <div key={`${item.id}-${idx}`} className="py-3 flex gap-3 items-center">
                  <img
                    src={formatImageUrl(item.url, 100)}
                    alt={item.title}
                    className="w-16 h-16 rounded-md object-cover border shrink-0 bg-gray-50"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-semibold text-gray-900 truncate">
                      {item.title}
                    </h4>
                    <p className="text-xs font-bold text-gray-800 mt-1">
                      £{(item.price / 100).toFixed(2)}
                    </p>
                    <span className="text-[10px] text-emerald-600 font-medium">Free Shipping</span>
                  </div>
                  <button
                    onClick={() => cart.removeFromCart(item)}
                    className="p-1.5 text-gray-400 hover:text-red-600 rounded-md hover:bg-red-50 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t pt-4 space-y-3 bg-white">
            <div className="space-y-1.5 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold text-emerald-600">FREE</span>
              </div>
              <div className="flex justify-between text-base font-bold text-gray-900 pt-1 border-t">
                <span>Subtotal</span>
                <span>£{(cart.cartTotal() / 100).toFixed(2)}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <SheetClose asChild>
                <button
                  onClick={() => router.push('/cart')}
                  className="w-full py-2.5 px-3 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  View Full Cart
                </button>
              </SheetClose>
              <SheetClose asChild>
                <button
                  onClick={handleCheckout}
                  className="w-full py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <span>Checkout</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </SheetClose>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
