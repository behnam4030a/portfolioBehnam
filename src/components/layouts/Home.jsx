import { Box, Typography } from "@mui/material"
import { useEffect, useRef } from "react"
import Typed from "typed.js"
import bg1 from "../../assets/bg02.jpeg"

const Home = () => {
    const typedRef = useRef(null)

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ["توسعه دهنده فرانت اند"],
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: "|",
        })
        return () => typed.destroy()
    }, [])

    return (
        <Box sx={{ backgroundImage: `url(${bg1})`, height: "100dvh", overflow: "hidden", backgroundPosition: "center", backgroundSize: "cover", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Typography sx={{ color: "whitesmoke" }} variant="h3">بهنام بیجاری</Typography>
            <Typography sx={{ color: "whitesmoke" }} variant="h6">
                <span ref={typedRef} />
            </Typography>
        </Box>
    )
}
export default Home
