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
            <Box sx={{display:{xs:"block",sm:"block",md:"none"},m:2}}>
                <Fab onClick={() => setDrawerOpen(!drawerOpen)} size="small" aria-label="sidebar" sx={{color:blue[500]}}>
                    <MdMenu/>
                </Fab>
            </Box>
            <ContentDrawer />

            <Drawer open={drawerOpen} variant="temporary" onClose={() => setDrawerOpen(false)} sx={{"& .muirtl-cyqh1t-MuiPaper-root-MuiDrawer-paper":{background:grey[900],width:300},display:{xs:"block",sm:"block",md:"none"}}}>
                <ContentDrawer />
            </Drawer>
        </Grid>
    )
}
export default Sidebar