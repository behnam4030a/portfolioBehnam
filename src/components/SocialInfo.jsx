import { IconButton } from "@mui/material";

const SocialInfo = ({name, icon, href, color}) =>{
    return(
        <IconButton aria-label={name} sx={{ color: color ?? "whitesmoke", "&:hover": { color: color ?? "whitesmoke", opacity: 0.8 }, fontSize: 22 }}>
            <a href={href} rel="noopener noreferrer" target="_blank" style={{ color: "inherit", display: "flex" }}>
                {icon}
            </a>
        </IconButton>
    )
}
export default SocialInfo;