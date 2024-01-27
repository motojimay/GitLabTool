import Layout from "./Layout";
import { Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";
// import { loadSetting } from "../function/SqlHelper";

export default function Setting() {

  const [settingData, setSettingData] = useState();
  
  useEffect(() => {
    // let data = loadSetting();
  }, [])

  return (
    <Layout title="Setting">
        <Paper>
            <Typography padding={2}>
                <h3>GitLabAPI設定</h3>
                
            </Typography>
        </Paper>
    </Layout>
  );
}