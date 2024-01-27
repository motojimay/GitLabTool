import { useState, useEffect } from "react";
import fetchData from '../function/FetchData';
import Layout from "./Layout";
import { Paper, Typography } from "@mui/material";
import LoadingIndicator from 'react-loading-indicator';

export default function BranchList(props) {
  const [branches, setBranch] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetch = async () => {
      let res = await fetchData(props.url);
      setBranch(res);
      setLoading(false);
    };
    fetch();
  }, []);

  return(
      <Layout title="BranchList">
          <Paper >
              {loading ? (
                  <center>
                      <LoadingIndicator spacing={10} segmentWidth={15} segmentLength={15}/>
                  </center>
                  ) : (
                      <Typography padding={2}>
                          <h1>ブランチ一覧</h1>
                          <hr/>        
                            {branches.map((branch) =>
                              <div>
                                  <h3>ブランチ : {branch.name}</h3>
                                  <h4>最終コミットタイトル : {branch.commit.title}</h4>
                                  <h4>最終コミットメッセージ : {branch.commit.message}</h4>
                                  <h4>最終コミッター : {branch.commit.author_name}</h4>
                                  <h4>ウェブURL : {branch.web_url}</h4>
                                  <hr/> 
                              </div>
                            )}
                      </Typography>
                  )
              }
          </Paper>
      </Layout>
  )
};

