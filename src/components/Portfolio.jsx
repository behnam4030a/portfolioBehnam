import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Divider, Grid, Slide, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CgCode } from "react-icons/cg";
import bg3 from "../assets/bg03.jpeg"


const Portfolio = () =>{

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
                        <Typography variant="body1" sx={{display:"flex",alignItems:"center",gap:1}}>نمونه کارها <CgCode/></Typography>
                    }>
                    </Chip>
                </Divider>
                <Grid container spacing={2}>
                    <Grid size={{xs:12,sm:6,md:4}} >
                        <Slide direction="up" style={{transitionDuration:"300ms"}} in={loading}>
                            <Card sx={{  minHeight:350 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://esanj.ir/website/images/ai-section-index.png"
                                    alt="green iguana"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        سامانه تست های روانشناسی ای سنج
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', display:"-webkit-box", WebkitLineClamp:3, WebkitBoxOrient:"vertical", overflow:"hidden" }}>
                                        تست‌های جدید ای سنج، با بهره‌گیری از الگوریتم‌های پیشرفته هوش مصنوعی، ارزیابی دقیق و جامعی از ویژگی‌های روانشناختی و شناختی ارائه می‌دهند. این تست‌ها با تحلیل پاسخ‌های کاربران به محرک‌ها، الگوهای رفتاری و شخصیتی را شناسایی کرده و گزارش‌هایی دقیق و کاربردی ارائه می‌کنند. آزمون‌های فرافکن مانند «رورشاخ» و «راتر» به بررسی ابعاد عمیق‌تر شخصیت می‌پردازند، و آزمون‌های عصب‌روانشناختی مانند «ارزیابی حافظه فعال» و «تشخیص هیجان چهره‌ای» عملکردهای شناختی و مغزی را با دقت بالا تحلیل می‌کنند.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button href="https://esanj.ir" size="small" color="primary" target="_blank">
                                        نمایش سایت
                                    </Button>
                                </CardActions>
                            </Card>
                        </Slide>
                    </Grid>
                    <Grid size={{xs:12,sm:6,md:4}} >
                        <Slide direction="up" style={{transitionDuration:"300ms"}} in={loading}>
                            <Card sx={{ minHeight:350}}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={bg3}
                                    alt="green iguana"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        سایت شخصی
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', display:"-webkit-box", WebkitLineClamp:3, WebkitBoxOrient:"vertical", overflow:"hidden" }}>
                                        سایت شخصی بهنام بیجاری برای نمایش رزومه و نمونه کارها و ارتباط با بهنام بیجاری توسعه دهنده فرانت اند
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button href="#" size="small" color="primary" target="_blank">
                                        نمایش سایت
                                    </Button>
                                </CardActions>
                            </Card>
                        </Slide>
                    </Grid>
                    <Grid size={{xs:12,sm:6,md:4}} >
                        <Slide direction="up" style={{transitionDuration:"300ms"}} in={loading}>
                            <Card sx={{  minHeight:350}}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://cdn.esanj.ir/landings/cmhq/global-standards.webp"
                                    alt="green iguana"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                       چک‌آپ سلامت روان
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', display:"-webkit-box", WebkitLineClamp:3, WebkitBoxOrient:"vertical", overflow:"hidden" }}>
                                        بر پایه مدل زیستی-روانی-اجتماعی سازمان بهداشت جهانی (WHO)، معیارهای DSM-5-TR و برگرفته از 11 آزمون معتبر بین‌المللی. تنها ابزار تخصصی که 10 بُعد حیاتی سلامت روان را با استانداردهای بین‌المللی در یک آزمون جامع ارزیابی می‌کند.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button href="https://landings.esanj.ir/cmhq" size="small" color="primary" target="_blank">
                                        نمایش سایت
                                    </Button>
                                </CardActions>
                            </Card>
                        </Slide>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default Portfolio;