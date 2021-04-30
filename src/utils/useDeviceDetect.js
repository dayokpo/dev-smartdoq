import React from 'react'

export default function useDeviceDetect() {
    const [isMobile, setMobile] = React.useState(false)

    React.useEffect(() => {
        const userAgent =
            typeof window.navigator === 'undefined' ? '' : navigator.userAgent
        const mobile = Boolean(
            userAgent.match(
                /Android|BlackBerry|iPhone|iPad|iPad Pro|iPod|Opera Mini|IEMobile|WPDesktop/i
            )
        )

        const ipadOS =
            navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 2 &&
            /MacIntel/.test(navigator.platform)

        setMobile(mobile | ipadOS)
    }, [])

    return { isMobile }
}
