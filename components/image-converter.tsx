"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Upload, Download, ImageIcon, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Footer } from "./footer/footer"
import { UniqueSellingPoints } from "./unique-selling-points/UniqueSellingPoints"
import { Header } from "./header/Header"
import { Hero } from "./hero/Hero"

type ImageFormat = "png" | "jpg" | "webp"

export function ImageConverter() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [outputFormat, setOutputFormat] = useState<ImageFormat>("png")
  const [isConverting, setIsConverting] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const handleFileSelect = useCallback((file: File) => {
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file)
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      const file = e.dataTransfer.files[0]
      if (file) {
        handleFileSelect(file)
      }
    },
    [handleFileSelect],
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) {
        handleFileSelect(file)
      }
    },
    [handleFileSelect],
  )

  const handleConvert = useCallback(async () => {
    if (!selectedFile || !previewUrl) return

    setIsConverting(true)

    try {
      const img = document.createElement("img")
      img.src = previewUrl

      await new Promise((resolve) => {
        img.onload = resolve
      })

      const canvas = document.createElement("canvas")
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext("2d")

      if (!ctx) return

      ctx.drawImage(img, 0, 0)

      const mimeType = outputFormat === "jpg" ? "image/jpeg" : outputFormat === "webp" ? "image/webp" : "image/png"

      canvas.toBlob(
        (blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob)
            const a = document.createElement("a")
            a.href = url
            a.download = `converted-image.${outputFormat}`
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
            URL.revokeObjectURL(url)
          }
          setIsConverting(false)
        },
        mimeType,
        0.95,
      )
    } catch (error) {
      console.error("[v0] Error converting image:", error)
      setIsConverting(false)
    }
  }, [selectedFile, previewUrl, outputFormat])

  const handleClear = useCallback(() => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl)
    }
    setSelectedFile(null)
    setPreviewUrl(null)
  }, [previewUrl])

  return (
    <div className="min-h-screen bg-background">
      <Header/>

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          {/* Hero Section */}
          <Hero/>

          {/* Converter Card */}
          <Card className="overflow-hidden">
            <div className="p-6 md:p-8">
              {!selectedFile ? (
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  className={`relative flex min-h-[400px] flex-col items-center justify-center rounded-lg border-2 border-dashed transition-colors ${
                    isDragging ? "border-primary bg-accent" : "border-border bg-muted/30"
                  }`}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileInput}
                    className="absolute inset-0 cursor-pointer opacity-0"
                    id="file-input"
                  />
                  <Upload className="mb-4 h-12 w-12 text-muted-foreground" />
                  <h3 className="mb-2 text-xl font-semibold">Drop your image here</h3>
                  <p className="mb-4 text-sm text-muted-foreground">or click to browse</p>
                  <Button variant="outline" asChild>
                    <label htmlFor="file-input" className="cursor-pointer">
                      Select Image
                    </label>
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Preview */}
                  <div className="relative overflow-hidden rounded-lg bg-muted/30">
                    {previewUrl && (
                      <img
                        src={previewUrl || "/placeholder.svg"}
                        alt="Preview"
                        className="mx-auto max-h-[400px] w-auto object-contain"
                      />
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-2 bg-background/80 backdrop-blur-sm hover:bg-background"
                      onClick={handleClear}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* File Info */}
                  <div className="flex items-center justify-between rounded-lg bg-muted/50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <ImageIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{selectedFile.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Format Selection */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Convert to format:</label>
                    <Select value={outputFormat} onValueChange={(value) => setOutputFormat(value as ImageFormat)}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="png">PNG</SelectItem>
                        <SelectItem value="jpg">JPG</SelectItem>
                        <SelectItem value="webp">WebP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Convert Button */}
                  <Button onClick={handleConvert} disabled={isConverting} className="w-full" size="lg">
                    {isConverting ? (
                      <>Converting...</>
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" />
                        Convert & Download
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          </Card>
          <UniqueSellingPoints/>
        </div>
      </main>

      <Footer/>
    </div>
  )
}
