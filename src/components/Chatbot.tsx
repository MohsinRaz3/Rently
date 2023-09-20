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
                botId: "d54665ac-88b8-4a7a-abf6-1998241bc919",
                hostUrl: "https://cdn.botpress.cloud/webchat/v1",
                messagingUrl: "https://messaging.botpress.cloud",
                clientId: "d54665ac-88b8-4a7a-abf6-1998241bc919",
                botName: "Rently",
                avatarUrl: "https://rently.pk/assets/logo.png",
                lazySocket: true,
                stylesheet: "https://webchat-styler-css.botpress.app/prod/0098cc7e-42ec-43ba-99bf-2526260ea915/v58407/style.css",
                frontendVersion: "v1",
                showPoweredBy: false
            })
        }
    }, [])

    return <div id="webchat" />
}

export default Chatbot