import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Box, Button, Container, TextField} from "@mui/material";

function Login() {
    let navigate = useNavigate();

    const handleLogin = () => {
        // Perform login logic here
        // On successful login, redirect to the dashboard
        navigate('/dashboard')
    };

    return (
        <Box sx={{ backgroundColor: "#f2f6fc", height: '100vh' }}>
            <Container
                maxWidth="xs"
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}
            >
                <Box
                    height={300}
                    width={400}
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                    gap={4}
                    p={4}
                    px={8}
                    sx={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', backgroundColor: 'white' }}
                >
                    <TextField
                        label="E-mail"
                        variant="standard"
                        fullWidth
                    />
                    <TextField
                        fullWidth
                        label="Senha"
                        type="password"
                        variant="standard"
                        autoComplete="current-password"
                    />
                    <Button variant="contained" color='warning'>Entrar</Button>
                </Box>
            </Container>
        </Box>
    );
}

export default Login;
