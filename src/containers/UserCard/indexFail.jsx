import React from "react";
import { Stack } from "@mui/material";
import Typography from "@mui/material";
import { Fragment } from "react";

const UserCardFail  = () =>{
   return(
        <Fragment>
            <Stack justifyContent="center">
                <Typography variant="h5">
                    El usuario no fue encontrado, por favor ingrese uno nuevamente
                </Typography>
            </Stack>
        </Fragment>
    )
}

export default UserCardFail;