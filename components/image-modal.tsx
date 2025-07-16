"use client"

import { X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
  title?: string
}

export function ImageModal({ isOpen, onClose, imageSrc, imageAlt, title }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[98vw] w-[98vw] h-[98vh] p-0 overflow-hidden">
        <div className="relative w-full h-full flex flex-col">
          {/* Header with close button */}
          <div className="flex items-center justify-between p-3 border-b bg-background/95 backdrop-blur">
            {title && (
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            )}
            <button
              onClick={onClose}
              className="ml-auto p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Image container - now much larger */}
          <div className="flex-1 flex items-center justify-center p-2 bg-black/90 overflow-auto">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-w-none h-auto rounded-lg shadow-2xl"
              style={{ 
                width: 'auto',
                height: 'calc(98vh - 120px)',
                minWidth: '80vw',
                objectFit: 'contain'
              }}
            />
          </div>
          
          {/* Footer with image description */}
          <div className="p-2 border-t bg-background/95 backdrop-blur">
            <p className="text-xs text-muted-foreground text-center">
              Click outside or press ESC to close • Scroll to zoom if needed
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 