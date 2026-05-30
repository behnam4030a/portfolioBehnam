import { Card, CardContent, Chip, Divider, Grid, Slide, Typography } from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useEffect, useState } from "react";
import { FaComputer, FaSchool } from "react-icons/fa6";

const ResumeMe = () =>{

    const [loading,setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);

        return () => {
            setLoading(false)
        }
    },[])

    return(
        <Card sx={{height:"100vh",overflow:"auto"}}>
            <CardContent>
                <Divider textAlign="center" sx={{mb:3}}>
                    <Chip color="primary" label={
                        <Typography variant="body1" >رزومه من</Typography>
                    }>
                    </Chip>
                </Divider>
                <Grid container spacing={2}>
                    <Grid size={{xs:12, sm:12, md:6, lg:6}}>
                        <Divider textAlign="center" sx={{mb:2}}>
                            <Chip color="secondary" label={
                                <Typography variant="body1" >تحصیلات</Typography>
                            }>
                            </Chip>
                        </Divider>
                        <Timeline position="alternate">
                            <Slide direction="up" style={{transitionDuration:"100ms"}} in={loading}>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot color="primary" >
                                            <FaSchool/>
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography variant="h6" >دیپلم</Typography>
                                        <Typography variant="caption" sx={{display:"block"}}>رشته : کامپیوتر</Typography>
                                        <Typography variant="caption" >تاریخ : 01/04/1389</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            </Slide>
                            <Slide direction="up" style={{transitionDuration:"300ms"}} in={loading}>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot color="primary" >
                                                <FaSchool/>
                                            </TimelineDot>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography variant="h6" >لیسانس</Typography>
                                            <Typography variant="caption" sx={{display:"block"}}>رشته : کامپیوتر (نرم افزار)</Typography>
                                            <Typography variant="caption" >تاریخ : 01/04/1389</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                            </Slide>
                        </Timeline>
                    </Grid>
                    <Grid size={{xs:12, sm:12, md:6, lg:6}}>
                        <Divider textAlign="center" sx={{mb:3}}>
                            <Chip color="secondary" label={
                                <Typography variant="body1" >تجربیات شغلی</Typography>
                            }>
                            </Chip>
                        </Divider>
                        <Timeline position="alternate">
                            <Slide direction="up" style={{transitionDuration:"100ms"}} in={loading}>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot color="primary" >
                                            <FaComputer/>
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography variant="h6" >شرکت سنجشگران نسل جوان</Typography>
                                        <Typography variant="caption" sx={{display:"block"}}>سمت : توسعه دهنده فرانت اند</Typography>
                                        <Typography variant="caption" >2 سال</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            </Slide>
                            <Slide direction="up" style={{transitionDuration:"300ms"}} in={loading}>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot color="primary" >
                                            <FaComputer/>
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography variant="h6" >شرکت پارس رایانه</Typography>
                                        <Typography variant="caption" sx={{display:"block"}}>سمت : طراحی سایت</Typography>
                                        <Typography variant="caption" >3 سال</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            </Slide>
                            <Slide direction="up" style={{transitionDuration:"500ms"}} in={loading}>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot color="primary" >
                                            <FaComputer/>
                                        </TimelineDot>
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography variant="h6" >شرکت تارنمای شادونیک</Typography>
                                        <Typography variant="caption" sx={{display:"block"}}>سمت : توسعه دهنده فرانت اند</Typography>
                                        <Typography variant="caption" >2 سال</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            </Slide>
                        </Timeline>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default ResumeMe;