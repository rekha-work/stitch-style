"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Upload, X, ImagePlus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [password, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (selectedFiles: FileList | null) => {
    if (!selectedFiles || selectedFiles.length === 0) return;
    const newFile = selectedFiles[0];
    if (!newFile.type.startsWith("image/")) return;

    setFile(newFile);
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setPreview(e.target.result as string);
      }
    };
    reader.readAsDataURL(newFile);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileChange(e.dataTransfer.files);
  };

  const removeFile = () => {
    setFile(null);
    setPreview(null);
  };

  const handleUpload = async () => {
    if (!file || !category || !password) return;
    setIsUploading(true);
    setToastMessage(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category);
    formData.append("password", password);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (res.status === 401) {
        setToastMessage("Invalid Password");
      } else if (res.status === 400 || res.status === 500) {
        setToastMessage("Upload Failed");
      } else if (res.ok) {
        setToastMessage("Upload Successful!");
        // Reset form
        setFile(null);
        setPreview(null);
        setCategory("");
        setPassword("");
      }
    } catch (error) {
      setToastMessage("An error occurred");
    } finally {
      setIsUploading(false);
    }
  };

  // Auto-dismiss the toast after 2 seconds
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <div className="container mx-auto py-10 px-4 max-w-4xl">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Upload Image</h1>
          <p className="text-muted-foreground">Drag and drop your image or click to browse</p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center ${
                isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25"
              } transition-colors duration-200 cursor-pointer`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => handleFileChange(e.target.files)}
                className="hidden"
                accept="image/*"
              />
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="rounded-full bg-primary/10 p-4">
                  <ImagePlus className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-medium">
                    {isDragging ? "Drop image here" : "Drag image here or click to browse"}
                  </p>
                  <p className="text-sm text-muted-foreground">Supported formats: JPEG, PNG, GIF, WebP</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {preview && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Selected Image</h2>
            <div className="relative group w-48 h-48 mx-auto">
              <div className="relative aspect-square overflow-hidden rounded-lg border">
                <Image src={preview || "/placeholder.svg"} alt="Preview" fill className="object-cover" />
              </div>
              <button
                onClick={removeFile}
                className="absolute top-2 right-2 bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Authentication Key
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm"
              placeholder="Enter your authentication key"
            />
            <p className="text-xs text-muted-foreground">This key will be verified in the backend</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium">
              Select Category
            </label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="stitched">Hand stitched</SelectItem>
                <SelectItem value="handemb">Hand Embroidery</SelectItem>
                <SelectItem value="macemb">Machine Embroidery</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={handleUpload} disabled={!file || !category || !password || isUploading} className="w-full" size="lg">
            {isUploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload Image
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Toast Popup */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 bg-white border p-4 rounded shadow-lg">
          <p className="font-semibold">{toastMessage}</p>
        </div>
      )}
    </div>
  );
}
