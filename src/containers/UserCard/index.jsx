import React from "react";
import { CardMedia, Grid, Stack } from "@mui/material";
import PrincipalInformation from "../../components/Principalnformation";
import Description from "../Description";

const UserCard = (props) =>{
    const {userState} = props;
    const {avatar_url} = userState;
    return(
        <Grid
            sx={{
                marginTop : '10px',
                textAlign:'center'
            }}
        >
            <Grid>
                <CardMedia
                component="img"
                alt = "GitHub User"
                image = {avatar_url}
                sx={{
                    width:'40%',
                    borderRadius : '50px', 
                    marginLeft : '50px',
                    }}
                />
            </Grid>
            <Grid>
                <Stack 
                    spacing={1}
                    sx = {{ margin : '15px' }}
                >
                    <PrincipalInformation userState = {userState} />
                    <Description userState = {userState}/>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default UserCard;