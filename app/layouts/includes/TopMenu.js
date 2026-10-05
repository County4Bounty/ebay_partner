"use client"

import Link from "next/link";
import { BsChevronDown } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { User, Package, LogOut, ExternalLink, ShieldCheck } from 'lucide-react'
import { useUser } from "../../context/user"
import { useCart } from "../../context/cart"
import { useRouter } from "next/navigation"
import ClientOnly from "../../components/ClientOnly"
import CartDrawer from "../../components/CartDrawer"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/app/components/ui/dropdown-menu"

export default function TopMenu() {
    const router = useRouter()
    const user = useUser();
    const cart = useCart();

    return (
        <>
            <div id="TopMenu" className="border-b bg-white">
                <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                    <ul 
                        id="TopMenuLeft"
                        className="flex items-center text-[12px] text-gray-700 px-2 h-9 gap-1"
                    >
                        <li>
                            {user && user?.id ? (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <button className="flex items-center gap-1.5 py-1 px-2.5 rounded-md hover:bg-gray-100 transition-colors text-gray-800 font-medium">
                                            {user?.picture ? (
                                                <img src={user.picture} alt={user.name} className="w-5 h-5 rounded-full object-cover" />
                                            ) : (
                                                <User className="w-3.5 h-3.5 text-gray-500" />
                                            )}
                                            <span>Hi, {user.name}</span>
                                            <BsChevronDown className="w-2.5 h-2.5 opacity-60 ml-0.5" />
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start" className="w-56 p-1.5 shadow-xl border border-gray-100">
                                        <div className="flex items-center gap-2.5 p-2">
                                            {user?.picture ? (
                                                <img src={user.picture} alt={user.name} className="w-9 h-9 rounded-full object-cover border" />
                                            ) : (
                                                <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                                                    {user?.name?.[0] || 'U'}
                                                </div>
                                            )}
                                            <div className="overflow-hidden">
                                                <div className="font-semibold text-sm truncate text-gray-900">{user?.name}</div>
                                                <div className="text-xs text-gray-500 truncate">{user?.email}</div>
                                            </div>
                                        </div>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem onClick={() => router.push('/orders')} className="gap-2 py-2">
                                            <Package className="w-4 h-4 text-gray-500" />
                                            <span>My Orders</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => router.push('/address')} className="gap-2 py-2">
                                            <ShieldCheck className="w-4 h-4 text-gray-500" />
                                            <span>Shipping Address</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem 
                                            onClick={() => user.signOut()} 
                                            className="gap-2 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 focus:bg-red-50"
                                        >
                                            <LogOut className="w-4 h-4" />
                                            <span>Sign out</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Link 
                                    href="/auth" 
                                    className="flex items-center gap-1.5 py-1 px-2.5 rounded-md hover:bg-gray-100 text-blue-600 hover:text-blue-700 font-semibold"
                                >
                                    <span>Sign in or Register</span>
                                </Link>
                            )}
                        </li>
                        <li className="px-2.5 py-1 hover:text-blue-600 cursor-pointer">
                            Daily Deals
                        </li>
                        <li className="px-2.5 py-1 hover:text-blue-600 cursor-pointer">
                            Help & Contact
                        </li>
                    </ul>

                    <ul 
                        id="TopMenuRight"
                        className="flex items-center text-[12px] text-gray-700 px-2 h-9 gap-1"
                    >
                        <li 
                            onClick={() => router.push('/address')} 
                            className="flex items-center gap-1.5 px-3 py-1 rounded-md hover:bg-gray-100 cursor-pointer"
                        >
                            <span className="text-sm">🌐</span>
                            <span>Ship to</span>
                        </li>
                        <ClientOnly>
                            <li className="px-2">
                                <CartDrawer>
                                    <button 
                                        type="button"
                                        className="relative p-1.5 rounded-md hover:bg-gray-100 flex items-center transition-colors cursor-pointer"
                                        aria-label="Shopping Cart Drawer"
                                    >
                                        <AiOutlineShoppingCart size={22} className="text-gray-700 hover:text-gray-900" />
                                        {cart.cartCount() > 0 ? (
                                            <span className="absolute -top-1 -right-1 bg-red-600 text-[10px] font-bold text-white w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in-75 duration-200">
                                                {cart.cartCount()}
                                            </span>
                                        ) : null}
                                    </button>
                                </CartDrawer>
                            </li>
                        </ClientOnly>
                    </ul>
                </div>
            </div>
        </>
    )
}