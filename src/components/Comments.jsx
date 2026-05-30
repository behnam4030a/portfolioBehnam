import { Avatar, Box, Card, CardContent, Chip, Divider, Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import userImg from "../assets/user.png";


const comments = [
    {
        name: "حسین اکبرپور",
        role: "Back-End Developer",
        text: "همکاری با ایشون واقعاً لذت‌بخشه. رابط‌های کاربری که طراحی می‌کنن هم از نظر بصری زیبان هم از نظر کارایی بی‌نقص. توجه به جزئیات UI در کارشون کاملاً مشهوده.",
    },
    {
        name: "سارا محمدی",
        role: "UI/UX",
        text: "از معدود توسعه‌دهنده‌هاییه که دیزاین رو دقیقاً همون‌طور که طراحی شده پیاده می‌کنه. درک عمیقی از CSS و انیمیشن داره و همیشه پیشنهادهای خلاقانه‌ای برای بهتر کردن تجربه کاربری داره.",
    },
    {
        name: "عارف اختری",
        role: "Cloud & DevOps Engineer",
        text: "یکی از قابل‌اعتمادترین اعضای تیمه. کدهاش تمیز، مستنده و به‌راحتی نگهداری میشه. همیشه deadline‌ها رو رعایت می‌کنه و در مواقع فشار کاری بهترین عملکرد رو داره.",
    },
    {
        name: "علی عبدیان",
        role: "Full-Stack Developer",
        text: "تسلط ایشون روی React و اکوسیستمش واقعاً چشمگیره. مشکلات پیچیده فرانت‌اند رو با راه‌حل‌های ساده و بهینه حل می‌کنن. از همکاری باهاشون خیلی یاد گرفتم.",
    },
];


const Comments = () => {

    return (
        <Card sx={{ height: "100vh", overflow: "auto" }}>
            <CardContent>
                <Divider textAlign="center" sx={{ mb: 3 }}>
                    <Chip color="primary" label={
                        <Typography variant="body1">نظرات دوستان</Typography>
                    } />
                </Divider>
                <Grid container spacing={2}>
                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        spaceBetween={20}
                        slidesPerView={1}
                        style={{ width: "100%", paddingBottom: "40px" }}
                    >
                        {comments.map((comment, index) => (
                            <SwiperSlide key={index}>
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, px: 6, py: 2,maxWidth:600,margin:"0 auto" }}>
                                    <Avatar src={userImg} variant="circular" sx={{ width: 80, height: 80 }} />
                                    <Box sx={{ textAlign: "center" }}>
                                        <Typography variant="subtitle1" fontWeight="bold">{comment.name}</Typography>
                                        <Typography variant="caption" color="text.secondary">{comment.role}</Typography>
                                    </Box>
                                    <Card sx={{backgroundColor:"lightsalmon",borderRadius:5}}>
                                        <CardContent>
                                            <Typography variant="body2" textAlign="center" sx={{ lineHeight: 2,color:"whitesmoke" }}>
                                                {comment.text}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Comments;
