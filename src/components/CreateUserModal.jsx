import {
    Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Radio,
    RadioGroup, Snackbar,
    Switch,
    TextField
} from "@mui/material";
import React, {useState} from "react";
import {UsersService} from "../services";

function CreateUserModal({ isOpen, closeModal, fetchUsers}) {
    const [snackbarIsOpen, setSnackBarIsOpen] = useState(false);
    const [ formData, setFormData ] = useState({
        nome: '',
        sobrenome: '',
        tipoUsuario: '',
        email: '',
        senha: '',
        ativo: false
    })

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    }
    async function handleCreateUser() {
        closeModal()
        await UsersService.createUser(formData)
        setSnackBarIsOpen(true)
        fetchUsers()
        setFormData({
            id: null,
            nome: '',
            sobrenome: '',
            tipoUsuario: '',
            email: '',
            senha: '',
            ativo: false
        })
    }
    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={() => closeModal()}
                fullWidth
            >
                <DialogTitle>
                    Cadastro de usuário
                </DialogTitle>
                <DialogContent>
                    <Box rowGap={3} display="grid">
                        <FormGroup name="ativo">
                            <FormControlLabel control={<Switch onChange={handleChange} />} name="ativo" label="Usuário ativo"/>
                        </FormGroup>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Tipo de usuário</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="tipoUsuario"
                            >
                                <FormControlLabel
                                    value="Administrador"
                                    control={<Radio onChange={handleChange}/>}
                                    label="Administrador"
                                    name="tipoUsuario"
                                />
                                <FormControlLabel
                                    value="Usuário padrão"
                                    control={<Radio onChange={handleChange}/>}
                                    label="Usuário padrão"
                                    name="tipoUsuario"
                                />
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            variant="standard"
                        />
                        <TextField
                            fullWidth
                            label="Sobrenome"
                            variant="standard"
                            name="sobrenome"
                            onChange={handleChange}
                            value={formData.sobrenome}
                        />
                        <TextField
                            fullWidth
                            label="E-mail"
                            variant="standard"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                        />
                        <TextField
                            fullWidth
                            label="Senha"
                            type="password"
                            name="senha"
                            variant="standard"
                            onChange={handleChange}
                            value={formData.senha}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => closeModal()}>CANCELAR</Button>
                    <Button autoFocus onClick={() => handleCreateUser()}>
                        CADASTRAR
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={snackbarIsOpen}
                autoHideDuration={6000}
                onClose={() => setSnackBarIsOpen(false)}
                message="Usuário criado com sucesso"
            />
        </div>
    )
}

export default CreateUserModal
