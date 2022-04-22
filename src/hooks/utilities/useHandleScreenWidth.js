import { useEffect, useState } from "react"

const useHandleScreenWidth = () => {
    const [windowSize, setWindowSize] = useState(() => window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWindowSize(window.innerWidth)
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
}

export default useHandleScreenWidth