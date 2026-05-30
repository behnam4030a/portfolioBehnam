import { Box, Chip, Divider, LinearProgress, Typography } from "@mui/material"

const SkillsInfo = ({color,value,name}) => {
    return(
        <>
            <Divider textAlign="left" sx={{mb:1}}>
                <Chip color={color} label={name}></Chip>
            </Divider>
            <Box sx={{display:"flex",alignItems:"center",mb:3}}>
                <LinearProgress value={value} variant="determinate" color={color} sx={{width:1 , height:10, borderRadius:10}}/>
                <Typography variant="body1" sx={{minWidth:35,marginLeft:2}}>{value}%</Typography>
            </Box>
        </>
    )
}
export default SkillsInfo