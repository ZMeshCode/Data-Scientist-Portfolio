"use client"

import { useState } from "react"
import { Lock, Mail, MessageCircle, X, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

interface PrivateRepoModalProps {
  isOpen: boolean
  onClose: () => void
  projectTitle?: string
}

export function PrivateRepoModal({ isOpen, onClose, projectTitle = "LLM Legal Analyzer Tool" }: PrivateRepoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-full">
              <Lock className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <DialogTitle className="text-lg">Private Repository</DialogTitle>
          </div>
          <DialogDescription className="text-left space-y-3">
            <p>
              The source code for <strong>{projectTitle}</strong> is currently private as we're actively working on monetizing this innovative AI solution.
            </p>
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-lg p-4 border border-purple-200 dark:border-purple-800/30">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                <Github className="h-4 w-4" />
                Why is this private?
              </h4>
              <ul className="space-y-1 text-sm text-purple-800 dark:text-purple-200">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Protecting intellectual property during commercialization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Ensuring competitive advantage in the legal tech market</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Preparing for potential licensing and partnerships</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Interested in collaboration or licensing?</h4>
              <p className="text-sm text-muted-foreground">
                I'm open to discussing potential partnerships, licensing opportunities, or technical consultations. 
                Feel free to reach out to learn more about the technology and explore collaboration possibilities.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col gap-3 mt-6">
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
          >
            <a href="mailto:zerayacobmeshesha@gmail.com?subject=LLM Legal Analyzer - Collaboration Inquiry">
              <Mail className="mr-2 h-4 w-4" />
              Contact for Collaboration
            </a>
          </Button>
          
          <Button
            asChild
            variant="outline"
            className="border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/30"
          >
            <a href="https://www.linkedin.com/in/zerayacob-meshesha" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              Connect on LinkedIn
            </a>
          </Button>
          
          <Button
            variant="ghost"
            onClick={onClose}
            className="hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Close
          </Button>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300">
              Commercial Ready
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">
              Partnership Open
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
              Licensing Available
            </Badge>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 