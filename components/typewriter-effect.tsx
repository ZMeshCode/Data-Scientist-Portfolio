"use client"

import { useEffect, useState } from "react"

interface TypewriterEffectProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export function TypewriterEffect({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
}: TypewriterEffectProps) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]

    const timer = setTimeout(
      () => {
        if (isDeleting) {
          setText(currentWord.substring(0, text.length - 1))
        } else {
          setText(currentWord.substring(0, text.length + 1))
        }

        if (!isDeleting && text === currentWord) {
          // Start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseTime)
        } else if (isDeleting && text === "") {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return (
    <div className="text-2xl md:text-3xl font-medium text-purple-600 dark:text-purple-400 h-full flex items-center">
      {text}
      <span className="ml-1 inline-block w-1 h-6 bg-purple-600 dark:bg-purple-400 animate-blink"></span>
    </div>
  )
}

