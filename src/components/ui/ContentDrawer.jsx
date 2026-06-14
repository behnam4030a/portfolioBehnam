import { Avatar, Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import behnam from "../../assets/behnam.jpg";
import { grey } from "@mui/material/colors";
import { GrConnect, GrGithub, GrHomeRounded } from "react-icons/gr";
import { FaFaceDizzy } from "react-icons/fa6";
import { MdMessage, MdTextSnippet } from "react-icons/md";
import { TbTerminal } from "react-icons/tb";
import { HiHeart } from "react-icons/hi";
import MainContext from "../../context"
import { useContext } from "react";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import SocialInfo from "../SocialInfo";

const ContentDrawer = () =>{
    const{value,handelChange,setDrawerOpen} = useContext(MainContext)
    const socialInfo = {
        github:{
            name:"github",
            href:"https://github.com/behnam4030a?tab=repositories",
            icon:<GrGithub/>,
            color:"#ffffff"
        },
        telegram:{
            name:"telegram",
            href:"https://web.telegram.org/a/#98174736",
            icon:<BsTelegram/>,
            color:"#29b6f6"
        },
        instagram:{
            name:"instagram",
            href:"instagram.com/behnam_4030a",
            icon:<BsInstagram/>,
            color:"#e1306c"
        }
    }
    const {github, telegram ,instagram} = socialInfo;
    const data = [
        {id:"sidebar-tab-0", ariaControls:"tabpanel-0", label:"صفحه اصلی", icon:<GrHomeRounded/>},
        {id:"sidebar-tab-1", ariaControls:"tabpanel-1", label:"درباره من", icon:<FaFaceDizzy/>},
        {id:"sidebar-tab-2", ariaControls:"tabpanel-2", label:"رزومه من", icon:<MdTextSnippet/>},
        {id:"sidebar-tab-3", ariaControls:"tabpanel-3", label:"نمونه کارها", icon:<TbTerminal/>},
        {id:"sidebar-tab-4", ariaControls:"tabpanel-4", label:"نظرات دوستان", icon:<MdMessage/>},
        {id:"sidebar-tab-5", ariaControls:"tabpanel-5", label:"ارتباط با من", icon:<GrConnect/>}
    ]

    return(
            <Box sx={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100%",pb:2,overflowY:"auto"}}>
                <Box sx={{justifyContent:"center", textAlign:"center" , mt:2}}>
                    <Avatar alt="behnam" src={behnam}  sx={{width:200 , height:200 , margin:"0 auto" , objectFit:"fill", display:{xs:"none", md:"block"}}}/>
                    <Typography variant='h5' sx={{color:"whitesmoke",mt:1}}>بهنام بیجاری</Typography>
                    <Typography variant='caption' sx={{color:"whitesmoke"}}>توسعه دهنده فرانت اند</Typography>
                    <Box component="div" sx={{margin:"0 auto"}}>
                        <SocialInfo name={github.name} href={github.href} icon={github.icon} color={github.color} />
                        <SocialInfo name={telegram.name} href={telegram.href} icon={telegram.icon} color={telegram.color} />
                        <SocialInfo name={instagram.name} href={instagram.href} icon={instagram.icon} color={instagram.color} />
                    </Box>
                    <Divider variant="middle" sx={{mt:2 , borderColor: grey[500]}}/>

                    <Tabs value={value} onChange={handelChange} orientation="vertical" variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
                        {
                            data.map((tab,index) => (
                                <Tab key={index} onClick={() =>{setDrawerOpen(false)}} id={tab.id} aria-controls={tab.ariaControls} label={tab.label} icon={tab.icon} iconPosition="start" sx={{color:"whitesmoke", justifyContent:"center",gap:1,"&.MuiTab-root":{minHeight:50 , backgroundColor:grey[800], borderRadius:2,my:0.5,mx:1}}}/>
                            ))
                        }
                    </Tabs>
                    <Divider variant="middle" sx={{mt:2 , borderColor: grey[500]}}/>
                </Box>
                <Box sx={{display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"end", alignItems:"center", mt:2}}>
                    <Typography sx={{color:"whitesmoke"}} variant="h6">طراحی شده توسط</Typography>
                    <Typography sx={{color:"whitesmoke" , display:"flex", alignItems:"center", gap:1}} variant="subtitle2">بهنام بیجاری <HiHeart color="red"/></Typography>
                </Box>
            </Box>
    )
}
export default ContentDrawer;