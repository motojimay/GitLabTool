import { useState, useEffect } from "react";
import fetchData from '../function/FetchData';
import Layout from "./Layout";
import { Paper, Typography } from "@mui/material";
import LoadingIndicator from 'react-loading-indicator';
import { MERGE_REQUEST_LIST_URL, MERGE_REQUEST_DISCUSSIONS_PATH } from '../config/Config';

export default function CommentList(props) {

  const url = `${MERGE_REQUEST_LIST_URL}` + "/" props.iid + `${MERGE_REQUEST_DISCUSSIONS_PATH}`

  const [commentList, setCommentList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetch = async () => {
      let res = await fetchData(url);
      setCommentList(res);
      setLoading(false);
    };
    fetch();
  }, []);

  const notes = [];
  for (var i in commentList.notes) {
    array.push([i, object[i]]);
  }

  return(
    <Layout title="CommentList">
        <Paper >
          { loading ? 
            (
              <center>
                  <LoadingIndicator spacing={10} segmentWidth={15} segmentLength={15}/>
              </center>
            ) : 
            (
              <Typography padding={2}>
                  <h1>コメント一覧</h1>
                  <hr/>        
                    {notes.map((note) =>
                      <div>
                          <h4>コメント実施日: {note.created_at} </h4> 
                          <h4>コメント : {comment.body}</h4>
                          <h4>name : {comment.name}</h4>
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

