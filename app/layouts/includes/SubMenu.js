"use client"

import { ChevronDown, Sparkles, Smartphone, Shirt, Home, Car, Palette, Dumbbell, Stethoscope, Wrench } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/app/components/ui/dropdown-menu"

export default function SubMenu() {
    const categories = [
        { id: 'electronics', name: 'Electronics', icon: Smartphone, desc: 'Phones, computers & audio' },
        { id: 'fashion', name: 'Fashion', icon: Shirt, desc: 'Clothing, shoes & watches' },
        { id: 'home', name: 'Home & Garden', icon: Home, desc: 'Furniture, kitchen & decor' },
        { id: 'motors', name: 'Motors', icon: Car, desc: 'Auto parts & accessories' },
        { id: 'collectibles', name: 'Collectibles & Art', icon: Palette, desc: 'Antiques, coins & art' },
        { id: 'sports', name: 'Sports & Outdoors', icon: Dumbbell, desc: 'Fitness equipment & gear' },
        { id: 'health', name: 'Health & Beauty', icon: Stethoscope, desc: 'Personal care & wellness' },
        { id: 'industrial', name: 'Industrial Equipment', icon: Wrench, desc: 'Heavy machinery & tools' },
    ]

    const quickLinks = ['Home', 'Saved', 'Electronics', 'Motors', 'Fashion', 'Collectables and Art', 'Sports', 'Health & Beauty', 'Sell']

    return (
        <div id="SubMenu" className="border-b bg-white text-gray-700">
            <div className="flex items-center justify-between w-full mx-auto max-w-[1200px] h-9 px-2">
                <ul className="flex items-center text-[12.5px] gap-1 overflow-x-auto no-scrollbar">
                    {/* Categories Dropdown using shadcn DropdownMenu */}
                    <li>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center gap-1 font-semibold text-gray-900 px-2 py-1 rounded hover:bg-gray-100 transition-colors">
                                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                                    <span>Explore Categories</span>
                                    <ChevronDown className="w-3 h-3 opacity-60 ml-0.5" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-64 p-1.5 shadow-xl border border-gray-100">
                                <DropdownMenuLabel>Marketplace Categories</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {categories.map(cat => {
                                    const Icon = cat.icon
                                    return (
                                        <DropdownMenuItem key={cat.id} className="gap-2.5 py-2 cursor-pointer">
                                            <Icon className="w-4 h-4 text-blue-600 shrink-0" />
                                            <div>
                                                <div className="font-medium text-xs text-gray-900">{cat.name}</div>
                                                <div className="text-[11px] text-gray-400">{cat.desc}</div>
                                            </div>
                                        </DropdownMenuItem>
                                    )
                                })}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>

                    <li className="h-4 w-px bg-gray-200 mx-1" />

                    {quickLinks.map((item, idx) => (
                        <li 
                            key={idx} 
                            className="px-2.5 py-1 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded cursor-pointer whitespace-nowrap transition-colors"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}