import { Box} from "@mui/material";

const TabPanel = ({children,value,index,...others}) =>{
    return(
        <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`sidebar-tab-${index}`} {...others}>
            {value === index && (
                <Box >
                    {children}
                </Box>
            )}
        </div>
    )
}
export default TabPanel;