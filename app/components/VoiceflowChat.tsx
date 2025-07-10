"use client"
import { useEffect } from "react"

export default function VoiceflowChat() {
  useEffect(() => {
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"
    script.onload = () => {
      if (window.voiceflow) {
        window.voiceflow.chat.load({
          verify: { projectID: "686f07d5208b8946bb774acf" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
          voice: {
            url: "https://runtime-api.voiceflow.com",
          },
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      // Cleanup if needed
      const existingScript = document.querySelector('script[src="https://cdn.voiceflow.com/widget-next/bundle.mjs"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return null
}

// Add type declaration for window.voiceflow
declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: {
          verify: { projectID: string }
          url: string
          versionID: string
          voice: { url: string }
        }) => void
      }
    }
  }
}
