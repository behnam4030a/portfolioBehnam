import { Avatar, Card, CardContent, Chip, Divider, Grid,  Typography } from "@mui/material";
import avatar2 from "../../assets/avatar2.jpg"
import AboutInfo from "../AboutInfo";
import {devSkills} from "../constants/skills.js"
import SkillsInfo from "./SkillsInfo.jsx";
import { useEffect, useState } from "react";
const AboutMe = () =>{
    const {htmlSkill,cssSkill,jsSkill,nextSkill,reactSkill} = devSkills;
    const [html,setHtml] = useState(0);
    const [css,setCss] = useState(0);
    const [js,setJs] = useState(0);
    const [react,setReact] = useState(0);
    const [next,setNext] = useState(0);

    useEffect(() =>{
        const timer = setInterval(() =>{
            setHtml((oldHtml) =>{
                const diff = Math.random() * 10;
                return Math.min(oldHtml + diff , 90)
            })
            setCss((oldCss) =>{
                const diff = Math.random() * 10;
                return Math.min(oldCss + diff , 85)
            })
            setJs((oldJs) =>{
                const diff = Math.random() * 10;
                return Math.min(oldJs + diff , 80)
            })
            setReact((oldReact) =>{
                const diff = Math.random() * 10;
                return Math.min(oldReact + diff , 70)
            })
            setNext((oldNext) =>{
                const diff = Math.random() * 10;
                return Math.min(oldNext + diff , 60)
            })
        },100)
        return () =>{
            clearInterval(timer)
        }
    },[])

    return(
        <Card sx={{height:"100vh",overflow:"auto"}}>
            <CardContent>
                <Grid container>
                    <Grid size={{xs:0, sm:0, md:4, lg:4, xl:4 }}>
                        <Avatar src={avatar2} variant="square" sx={{width:200, height:200, margin:"0 auto",display:{xs:"none",sm:"none",md:"block"}}}>BB</Avatar>
                    </Grid>
                    <Grid size={{xs:12, sm:12, md:8, lg:8, xl:8 }}>
                        <Divider textAlign="center">
                            <Chip color="primary" label={
                                <Typography variant="body1" >توسعه دهنده فرانت اند</Typography>
                            }>
                            </Chip>
                        </Divider>
                        <AboutInfo>نام و نام خانوادگی : بهنام بیجاری</AboutInfo>
                        <AboutInfo>سن : 34 سال</AboutInfo>
                        <AboutInfo>ایمیل : behnam.4030a@gmail.com</AboutInfo>
                        <AboutInfo>شماره تماس : 09158634525</AboutInfo>
                    </Grid>
                </Grid>
                <Divider textAlign="center" sx={{mb:2}}>
                    <Chip  label={
                        <Typography variant="body1" >مهارت های من</Typography>
                        }>
                    </Chip>
                </Divider>
                <SkillsInfo color={htmlSkill.color} name={htmlSkill.name} value={Math.round(html)}/>
                <SkillsInfo color={cssSkill.color} name={cssSkill.name} value={Math.round(css)}/>
                <SkillsInfo color={jsSkill.color} name={jsSkill.name} value={Math.round(js)}/>
                <SkillsInfo color={reactSkill.color} name={reactSkill.name} value={Math.round(react)}/>
                <SkillsInfo color={nextSkill.color} name={nextSkill.name} value={Math.round(next)}/>
            </CardContent>
        </Card>
    )
}
export default AboutMe;