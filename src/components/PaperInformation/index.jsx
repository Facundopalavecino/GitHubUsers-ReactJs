import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

const PaperInformation = (props) =>{
    const { userState } = props;
    const { 
        public_repos,
        followers,
        following
    } = userState;
    
    return(
        <Paper elevation={5}>
            <Stack spacing={1}
            sx={{margin:'12px'}} 
            >
                <Stack direction="row" spacing={1}>
                    <Typography variant="caption">Respositories:</Typography>
                    <Typography variant="caption">{public_repos}</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                    <Typography variant="caption">Followers:</Typography>
                    <Typography variant="caption">{followers}</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                    <Typography variant="caption">Folowwing:</Typography>
                    <Typography variant="caption">{following}</Typography>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default PaperInformation;