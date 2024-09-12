import React, { useEffect, useState } from "react";
import { getGitHubUser } from './services/users'
import styled from 'styled-components';
import { Snackbar, Alert } from '@mui/material';
import Searcher from "./components/Searcher/index";
import UserCard from "./containers/UserCard";


const Container = styled.div`
  background-color: whitesmoke;
  width: 100%;
  border-radius: 16px;
  marginTop: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  flex-direction: column; 
  border:0.2rem dashed black
`;

const App = () => {

  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState('inputUser');
  const [notFound, setNotFound] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const gettinUser = async (user) => {
    try {
      const userResponse = await getGitHubUser(user); // Hacemos la petición a la API

      if (user === 'octocat') {
        localStorage.setItem('octocat', JSON.stringify(userResponse));
      }

      if (userResponse.message === 'Not Found') {
        const octocat = JSON.parse(localStorage.getItem('octocat'));
        setInputUser(octocat?.login || 'octocat'); // Vuelve al usuario octocat si no existe el nuevo usuario
        setNotFound(true); // Indicamos que no se encontró el usuario
        setSnackbarOpen(true); // Abrimos el Snackbar para mostrar el error
      } else {
        setUserState(userResponse); // Si existe el usuario, actualizamos el estado
        setNotFound(false); // El usuario fue encontrado
      }
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      setNotFound(true); // Manejamos el error
      setSnackbarOpen(true); // Mostramos el Snackbar si hay un error
    }
  };

  useEffect(() =>{
    gettinUser(inputUser)
  },
  [inputUser]);

  const handleSnackbarClose = () =>{
    setSnackbarOpen(false);
  }

  return(  
      <Container>
        <Searcher inputUser={inputUser} setInputUser={setInputUser} />
        <UserCard userState = {userState}/>
  
        <Snackbar open={snackbarOpen}
                  autoHideDuration={6000}
                  onClose={handleSnackbarClose}>
            <Alert onClose={handleSnackbarClose} severity="error">
            Usuario no encontrado. Por favor, ingrese un usuario válido.
            </Alert>
        </Snackbar>
  
      </Container>  
  )
};

export default App;