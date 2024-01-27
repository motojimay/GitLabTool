import { useState, useEffect } from "react";
import fetchData from '../function/FetchData';
import Layout from "./Layout";
import { Paper, Typography, Button } from "@mui/material";
import LoadingIndicator from 'react-loading-indicator';

export default function Merge(props) {
  const [mergeData, setMergeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetch = async () => {
      let res = await fetchData(props.url);
      setMergeData(res);
      setLoading(false);
    };
    fetch();
  }, []);

  return(
      <Layout title="Merge">
          <Paper >
              {loading ? (
                  <center>
                      <LoadingIndicator spacing={10} segmentWidth={15} segmentLength={15}/>
                  </center>
                  ) : (
                      <Typography padding={2}>
                          <h1>マージ一覧</h1>
                          <hr/>        
                            {mergeData.map((merge) =>
                              <div>
                                  <h3>プロジェクトID : {merge.project_id}</h3>
                                  <h4>タイトル : {merge.title}</h4>
                                  <h4>ステータス : {merge.state}</h4>
                                  <h4>ターゲットブランチ : {merge.target_branch}</h4>
                                  <h4>ソースブランチ : {merge.source_branch}</h4>
                                  <h4>コメントID : {merge.iid}</h4>
                                  <Button>コメント一覧取得</Button>
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

