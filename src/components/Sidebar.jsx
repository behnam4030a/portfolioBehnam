import {  Box, Drawer, Fab, Grid } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import ContentDrawer from "./ui/ContentDrawer";
import { MdMenu } from "react-icons/md";
import { useContext } from "react";
import MainContext from "../context"

const Sidebar = () =>{
    const {drawerOpen,setDrawerOpen} = useContext(MainContext)
    return(
        <Grid size={{xs:0 , sm:0 , md:3 , lg:2 , xl:2}} sx={{backgroundColor: grey[900]}}>
            <Box sx={{display:{xs:"block",sm:"block",md:"none"}, position:"fixed", top:16, right:16, zIndex:1300}}>
                <Fab onClick={() => setDrawerOpen(!drawerOpen)} size="small" aria-label="sidebar" sx={{color:blue[500]}}>
                    <MdMenu/>
                </Fab>
            </Box>
            <Box sx={{display:{xs:"none",sm:"none",md:"block"}, height:"100%"}}>
                <ContentDrawer />
            </Box>
            <Drawer open={drawerOpen} variant="temporary" onClose={() => setDrawerOpen(false)} sx={{"& .MuiDrawer-paper":{background:grey[900],width:300}}}>
                <ContentDrawer />
            </Drawer>
        </Grid>
    )
}
export default Sidebar
