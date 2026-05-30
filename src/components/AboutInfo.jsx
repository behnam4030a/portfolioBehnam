import { Typography } from "@mui/material";
import { BiArrowFromRight } from "react-icons/bi";

const AboutInfo = ({children}) => {
    return(
        <Typography variant="body1" sx={{display:"flex",alignItems:"center",gap:1,mb:2}}>
            <BiArrowFromRight />
            {children}
        </Typography>
    )
}
export default AboutInfo;