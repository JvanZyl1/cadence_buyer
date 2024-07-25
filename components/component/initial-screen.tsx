/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/Wr8PgJNX873
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'
import { Judson } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

judson({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"
import Link from "next/link"
import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"

export function InitialScreen({ onNavigateToLoading }) {
  const items = [
    {
      id: 1,
      image: "/CoffeeBeans.jpg",
      title: "Gourmet Coffee Beans",
      quantity: 50,
      price: 18.99,
      originalPrice: 22.99,
      offer: {
        type: "discount",
        value: 17,
      },
      seller: "Java Roasters",
      expiryDate: "2024-09-15",
      distance: "25 miles",
      category: "beverages",
    },
    {
      id: 2,
      image: "/placeholder.svg",
      title: "Artisanal Tea Assortment",
      quantity: 30,
      price: 24.99,
      originalPrice: 29.99,
      offer: {
        type: "buy-one-get-one-free",
        value: 50,
      },
      seller: "Tea Emporium",
      expiryDate: "2024-11-30",
      distance: "35 miles",
      category: "beverages",
    },
    {
      id: 10,
      image: "/placeholder.svg",
      title: "Fresh Blueberries",
      quantity: 60,
      price: 5.99,
      originalPrice: 7.99,
      offer: {
        type: "discount",
        value: 25,
      },
      seller: "Berry Patch",
      expiryDate: "2024-07-31",
      distance: "15 miles",
      category: "food",
    },
    {
      id: 7,
      image: "/placeholder.svg",
      title: "Fresh Organic Apples",
      quantity: 75,
      price: 3.99,
      originalPrice: 4.99,
      offer: {
        type: "discount",
        value: 20,
      },
      seller: "Fruit Orchard",
      expiryDate: "2024-11-01",
      distance: "20 miles",
      category: "food",
    },
    {
      id: 9,
      image: "/placeholder.svg",
      title: "Organic Chicken Breasts",
      quantity: 35,
      price: 8.99,
      originalPrice: 10.99,
      offer: {
        type: "buy-one-get-one-free",
        value: 50,
      },
      seller: "Farm Fresh Poultry",
      expiryDate: "2024-08-15",
      distance: "30 miles",
      category: "food",
    },
    {
      id: 3,
      image: "/placeholder.svg",
      title: "Organic Honey Jars",
      quantity: 40,
      price: 12.99,
      originalPrice: 15.99,
      offer: {
        type: "buy-one-get-one-free",
        value: 50,
      },
      seller: "Bee Meadow Farm",
      expiryDate: "2025-03-01",
      distance: "18 miles",
      category: "food",
    },
    {
      id: 5,
      image: "/placeholder.svg",
      title: "Organic Spice Blend Set",
      quantity: 25,
      price: 16.99,
      originalPrice: 19.99,
      offer: {
        type: "discount",
        value: 15,
      },
      seller: "Spice Traders",
      expiryDate: "2024-12-15",
      distance: "22 miles",
      category: "food",
    },
    {
      id: 4,
      image: "/placeholder.svg",
      title: "Craft Beer Variety Pack",
      quantity: 18,
      price: 39.99,
      originalPrice: 44.99,
      offer: {
        type: "discount",
        value: 11,
      },
      seller: "Brew Masters",
      expiryDate: "2024-08-31",
      distance: "40 miles",
      category: "beverages",
    },
    {
      id: 6,
      image: "/placeholder.svg",
      title: "Gourmet Chocolate Truffles",
      quantity: 12,
      price: 29.99,
      originalPrice: 34.99,
      offer: {
        type: "buy-one-get-one-free",
        value: 50,
      },
      seller: "Cocoa Delights",
      expiryDate: "2024-10-31",
      distance: "28 miles",
      category: "food",
    },
    {
      id: 8,
      image: "/placeholder.svg",
      title: "Grass-Fed Beef Steaks",
      quantity: 20,
      price: 24.99,
      originalPrice: 29.99,
      offer: {
        type: "bundle",
        value: 10,
      },
      seller: "Rancher's Pride",
      expiryDate: "2024-09-30",
      distance: "45 miles",
      category: "food",
    },
  ]
  const [filter, setFilter] = useState("all")
  const filteredItems = useMemo(() => {
    if (filter === "food") {
      return items.filter((item) => item.category === "food")
    } else if (filter === "beverages") {
      return items.filter((item) => item.category === "beverages")
    } else {
      return items
    }
  }, [filter, items])
  return (
    <section className="w-full py-12">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold tracking-tight">Marketplace</h1>
            <p className="text-muted-foreground">
              Discover a wide range of food and beverage products from trusted sellers.
            </p>
          </div>
          <div className="ml-auto flex gap-2">
            <Button
              variant={filter === "food" ? "primary" : "outline"}
              className={`${
                filter === "food" ? "bg-[#006400] text-white hover:bg-[#008000]" : "text-muted-foreground"
              }`}
              onClick={() => setFilter("food")}
            >
              Food
            </Button>
            <Button
              variant={filter === "beverages" ? "primary" : "outline"}
              className={`${
                filter === "beverages" ? "bg-[#006400] text-white hover:bg-[#008000]" : "text-muted-foreground"
              }`}
              onClick={() => setFilter("beverages")}
            >
              Beverages
            </Button>
            <Button
              variant={filter === "all" ? "primary" : "outline"}
              className={`${filter === "all" ? "bg-[#006400] text-white hover:bg-[#008000]" : "text-muted-foreground"}`}
              onClick={() => setFilter("all")}
            >
              All Products
            </Button>
            <Link 
              href="#" 
              className="text-muted-foreground" 
              prefetch={false} 
              onClick={() => onNavigateToLoading("loading")}
            >
              Filter for specific requirement
            </Link>

          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="grid gap-4 border rounded-lg overflow-hidden">
              <Link href="#" className="relative group" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full aspect-[3/2] object-cover group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute top-4 left-4 bg-[#006400] text-white px-2 py-1 rounded-md text-xs font-medium">
                  {item.offer.type === "discount"
                    ? `${item.offer.value}% off`
                    : item.offer.type === "buy-one-get-one-free"
                    ? "Buy 1 Get 1 Free"
                    : "Bundle Offer"}
                </div>
              </Link>
              <div className="p-4 grid gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{item.title}</h3>
                  <div className="text-lg font-bold">
                    <div>
                      <span className="text-muted-foreground line-through mr-2">${item.originalPrice.toFixed(2)}</span>
                      <span>${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div>{item.quantity} in stock</div>
                  <div>Expires {new Date(item.expiryDate).toLocaleDateString()}</div>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div>
                    Sold by {item.seller} ({item.distance})
                  </div>
                  <Button className="bg-[#006400] text-white hover:bg-[#008000]">Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
