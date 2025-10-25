"use client"

import { Images } from "lucide-react"

export function Header() {

    return (
        <header className="border-b border-border">
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Images className="h-6 w-6" />
                        <h1 className="text-xl font-semibold tracking-tight">Secure Image Converter</h1>
                    </div>
                </div>
            </div>
        </header>
    )

}
