import { useState, useEffect } from "react";
import fetchData from '../function/FetchData';
import Layout from "./Layout";
import { Paper, Typography } from "@mui/material";
import LoadingIndicator from 'react-loading-indicator';
import handleAccessLevelByParam from '../function/AccessLevelHelper';

export default function Member(props) {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetch = async () => {
      let res = await fetchData(props.url);
      setMembers(res);
      setLoading(false);
    };
    fetch();
  }, []);

  return(
    <Layout title="Member">
          { loading ? 
            (
              <center>
                  <LoadingIndicator spacing={10} segmentWidth={15} segmentLength={15}/>
              </center>
            ) : 
            (
              <Paper >
                <Typography padding={2}>
                    <h1>メンバー一覧</h1>
                    <hr/>        
                      {members.map((member) =>
                        <div>
                            <h4>権限 : {handleAccessLevelByParam(member.access_level)}</h4> 
                            <h4>ユーザー名 : {member.username}</h4>
                            <h4>名前 : {member.name}</h4>
                            <hr/> 
                        </div>
                      )}
                </Typography>
              </Paper>
            )
          }
    </Layout>
  )
};

