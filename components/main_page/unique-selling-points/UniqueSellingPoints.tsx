"use client"

import { Upload, ShieldCheck, ImageIcon } from "lucide-react"

export function UniqueSellingPoints() {

    return (
        <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="text-center">
                <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Upload className="h-6 w-6" />
                    </div>
                </div>
                <h3 className="mb-2 font-semibold">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground">No waiting, no uploading. Simply drag, drop, and convert in seconds.</p>
            </div>
            <div className="text-center">
                <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <ImageIcon className="h-6 w-6" />
                    </div>
                </div>
                <h3 className="mb-2 font-semibold">Flexible</h3>
                <p className="text-sm text-muted-foreground">Convert to any format you need—PNG, JPG, or WebP. Perfect for web, print, or social media.</p>
            </div>
            <div className="text-center">
                <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <ShieldCheck className="h-6 w-6" />
                    </div>
                </div>
                <h3 className="mb-2 font-semibold">100% Secure</h3>
                <p className="text-sm text-muted-foreground">Your images never leave your device. All processing happens locally in your browser for complete privacy.</p>
            </div>
        </div>
    )

}
