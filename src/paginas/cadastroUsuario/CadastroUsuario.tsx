import { Grid, Typography, Button, TextField } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import "./CadastroUsuario.css"

function CadastroUsuario() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={6} className='imagem2'></Grid>
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={10}>
                        <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                            <TextField id='nome' label='nome' variant="outlined" name="nome" margin="normal" fullWidth />
                            <TextField id='usuario' label='usuário' variant="outlined" name="usuario" margin="normal" fullWidth />
                            <TextField id='senha' label='senha' variant="outlined" name="senha" margin="normal" fullWidth type='password' />
                            <TextField id='confirmarSenha' label='confirmar senha' variant="outlined" name="confirmarSenha" margin="normal" fullWidth type='password' />
                            <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className="text-decorator-none">
                                    <Button variant='contained' color='secondary' className="btnCancelar">
                                        Cancelar
                                    </Button>
                                </Link>
                                    <Button type='submit' className="text-decorator-none btnCadastrar" variant='contained' color='primary'>
                                        Cadastrar
                                    </Button>
                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export { CadastroUsuario }