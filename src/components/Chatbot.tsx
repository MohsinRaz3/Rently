"use client"
import React, { useEffect } from 'react'

const Chatbot = () => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
        script.async = true
        document.body.appendChild(script)

        script.onload = () => {
            //@ts-ignore
            window.botpressWebChat.init({
                composerPlaceholder: "Chat with us!",
                botConversationDescription: "Rently's AI Assistant",
                botId: "35ece075-73e6-4889-8401-d58fe91033e4",
                hostUrl: "https://cdn.botpress.cloud/webchat/v1",
                messagingUrl: "https://messaging.botpress.cloud",
                clientId: "35ece075-73e6-4889-8401-d58fe91033e4",
                botName: "Rently",
                avatarUrl: "https://rently.pk/assets/logo.png",
                lazySocket: true,
                stylesheet: "https://webchat-styler-css.botpress.app/prod/0098cc7e-42ec-43ba-99bf-2526260ea915/v83301/style.css",
                frontendVersion: "v1",
                showPoweredBy: false
            })
        }
    }, [])

    return <div id="webchat" />
}

export default Chatbot