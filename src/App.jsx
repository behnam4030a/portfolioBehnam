import { useState } from "react"
import ContentContainer from "./components/ContentContainer"
import MainLayout from "./components/layouts/MainLayout"
import Sidebar from "./components/Sidebar"
import TabPanel from "./components/tabs/TabPanel";
import { Typography } from "@mui/material";
import MainContext from "./context"
import Home from "./components/layouts/Home";
import AboutMe from "./components/layouts/AboutMe";
import ResumeMe from "./components/layouts/ResumeMe";
import Portfolio from "./components/Portfolio";
import Comments from "./components/Comments";
import ContactMe from "./components/ContactMe";
function App() {
  const [value, setValue] = useState(0);
  const [drawerOpen , setDrawerOpen] = useState(false);

  const handelChange = (event , newValue) =>{
    setValue(newValue);
  }
  return (
    <MainContext.Provider value={{value,handelChange,drawerOpen,setDrawerOpen}}>
      <MainLayout>
        <Sidebar />
        <ContentContainer>
          <TabPanel value={value} index={0}>
            <Home/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AboutMe/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ResumeMe/>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Portfolio/>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Comments/>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <ContactMe/>
          </TabPanel>
        </ContentContainer>
      </MainLayout>
    </MainContext.Provider>

  )
}

export default App
