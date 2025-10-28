"use client"

import { Images } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

export function Header() {

    return (
        <header className="border-b border-border">
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Images className="h-6 w-6" />
                        <a href="/" className="text-xl font-semibold tracking-tight">Secure Image Converter</a>
                    </div>
                    <NavigationMenu>
                        <NavigationMenuItem className="list-none">
                            <NavigationMenuLink asChild>
                                <Link href="/">Convert</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="list-none">
                            <NavigationMenuLink asChild>
                                <Link href="/faq">FAQ</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="list-none">
                            <NavigationMenuLink asChild>
                                <Link href="/contact">Contact</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenu>
                </div>
            </div>
        </header>
    )

}
