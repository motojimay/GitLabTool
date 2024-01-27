import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BranchList from './components/BranchList';
import Member from './components/Member';
import Merge from './components/Merge';
import Setting from './components/Setting';
// import { ConfigDB } from './db/ConfigDB';
import { END_POINT, PROJECT_ID, BRANCH_LIST_URL, MEMBER_ALL_LIST_URL, MERGE_REQUEST_LIST_URL } from './config/Config';

export default function App() {

  useEffect(() => {
    // ConfigDB.init();
  }, [])

  let url = `${END_POINT}` + `${PROJECT_ID}`
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home url={url}/>} />
        <Route path='/branch' element={<BranchList url={BRANCH_LIST_URL}/>} />
        <Route path='/member' element={<Member url={MEMBER_ALL_LIST_URL}/>} />
        <Route path='/merge' element={<Merge url={MERGE_REQUEST_LIST_URL}/>} />
        <Route path='/setting' element={<Setting/>}/>
      </Routes>
    </BrowserRouter>
  );
}