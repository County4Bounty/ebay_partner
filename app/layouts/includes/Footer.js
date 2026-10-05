'use client'

export default function Footer() {
    return (
        <>
            <div id="Footer" className="border-t mt-20 px-2">
                <div className="flex items-baseline justify-between w-full mx-auto max-w-[1200px] py-10">
                    <ul className="text-gray-700">
                        <li className="font-bold text-lg">Buy</li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">Registration</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Buyer Protection</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Bidding & buying help</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Deals & Coupons</li>
                    </ul>

                    <ul className="text-gray-700">
                        <li className="font-bold text-lg">Sell</li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">Start selling</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Seller Center</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Business sellers</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Affiliates</li>
                    </ul>

                    <ul className="text-gray-700">
                        <li className="font-bold text-lg">About</li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">Company Info</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">News & Announcements</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Careers</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Policies</li>
                    </ul>

                    <ul className="text-gray-700">
                        <li className="font-bold text-lg">Help & Contact</li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">Resolution Center</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Seller Information</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Contact Support</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Security Center</li>
                    </ul>
                </div>
            </div>
        </>
    )
  }
  