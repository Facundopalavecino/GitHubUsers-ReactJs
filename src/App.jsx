import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";

import Searcher from "./components/Searcher/index";

import { getGitHubUser } from './services/users'
import UserCard from "./containers/UserCard";
const App = () => {

  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState('inputUser');
  const [notFound, setNotFound] = useState(false);

  const gettinUser = async (user) => {
    const userResponse = await getGitHubUser(user)

    if(userState === 'octocat'){
      localStorage.setItem('octocat', userResponse)
    }

    if(userResponse.messege === 'Not Found'){
      const { octocat } = localStorage;
      setInputUser(octocat);
      setNotFound(true);
    } else {
      setUserState(userResponse);
    }

  };

  useEffect(() =>{
    gettinUser(inputUser)
  },
  [inputUser])

  return(
    <Container sx={{
      background: 'whitesmoke',
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }} >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userState = {userState}/>
    </Container>
  )
};

export default App;