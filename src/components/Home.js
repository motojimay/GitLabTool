import { useState, useEffect } from "react";
import Layout from "./Layout";
import { Paper, Typography } from "@mui/material";
import fetchData from "../function/FetchData";
import LoadingIndicator from 'react-loading-indicator';
 
export default function Home(props) {
  
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      let fetch = async () => {
        let res = await fetchData(props.url);
        setData(res);
        setLoading(false);
      };
      fetch();
    }, []);
  
    return(
        <Layout title="Home">
                {loading ? (
                    <center>
                        <LoadingIndicator spacing={10} segmentWidth={15} segmentLength={15}/>
                    </center>
                    ) : (
                        <Paper>
                            <Typography padding={2}>
                                <h1>GitLab API ツール</h1>
                                <hr/>        
                                    <div key={data.id}>
                                        <h3>プロジェクト名 : {data.name}</h3>
                                        <h3>デフォルトブランチ : {data.default_branch}</h3>
                                        <h4>ウェブURL : {data.web_url}</h4>
                                    </div>
                                <hr/>        
                            </Typography>
                        </Paper>
                    )
                }
        </Layout>
    )
};

