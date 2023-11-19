import { useState } from "react";
import { Box, Typography, Tab, Tabs } from "@mui/material";
import TabPanel from "./TabPanel";
import OurVisionMission from "./OurVisionMission";
import WhoWeAre from "./WhoWeAre";
import OurBoard from "./OurBoard";

const Overview = () => {
  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabContainer = { backgroundColor: "#ecaa00", color: "#fff" };
  return (
    <>
      <Box className="OverviewContainer" sx={{ textAlign: "center", padding: " 38px 8rem",  }}>
        <Typography
          variant="h4"
          sx={{ marginTop: "58px", marginBottom: "28px", fontWeight: 600, color: "#145088" }}
        >
          Company Overview
        </Typography>

        <Typography
          variant="p"
          sx={{
            fontSize: "24px",
            marginBottom: "38px",
            lineHeight: "38px",
          }}
        >
         Our core objective is to provide avenue for saving,
          access to credit and financial advisory services to individuals and
          micro, small & medium enterprises with competitive advantages. We
          believe in Growing Together with our customer.
        </Typography>
      </Box>

      <div style={tabContainer}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="inherit"
              indicatorColor="inherit"
              sx={{ backgroundColor: "#ecaa00", color: "#fff", width: "100%" }}
            >
              <Tab label="Our Vision & Mission" {...a11yProps(0)} />
              <Tab label="Who we are" {...a11yProps(1)} />
              <Tab label="Our Board" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <OurVisionMission />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <WhoWeAre />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <OurBoard />
          </TabPanel>
        </Box>
      </div>
    </>
  );
};

export default Overview;
