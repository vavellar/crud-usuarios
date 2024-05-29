import {
    Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Modal, Radio,
    RadioGroup,
    Switch,
    TextField
} from "@mui/material";
import Typography from "@mui/material/Typography";
import React, {useState} from "react";
import {UsersService} from "../services";

function EditUserModal({ isOpen, closeModal, user, fetchUsers}) {
    const [ formData, setFormData ] = useState({
        nome: user.nome,
        sobrenome: user.sobrenome,
        tipoUsuario: user.tipoUsuario,
        email: user.email,
        senha: user.senha,
        ativo: user.ativo
    })

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    async function handleEditUser() {
        closeModal()
        await UsersService.editUser(user.id, formData)
        // setSnackBarIsOpen(true)
        fetchUsers()
    }
    return (
        <Dialog
            open={isOpen}
            onClose={() => closeModal()}
            fullWidth
        >
            <DialogTitle>
                Edição de usuário
            </DialogTitle>
            <DialogContent>
                <Box rowGap={3} display="grid">
                    <FormGroup name="ativo">
                        <FormControlLabel control={<Switch defaultChecked={user.ativo} onChange={handleChange}/>} name="ativo" label="Usuário ativo" />
                    </FormGroup>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Tipo de usuário</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue={user.tipoUsuario}
                            name="tipoUsuario"
                        >
                            <FormControlLabel value="Administrador" control={<Radio onChange={handleChange}/>} label="Administrador" />
                            <FormControlLabel value="Usuário padrão" control={<Radio onChange={handleChange}/>} label="Usuário padrão" />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        fullWidth
                        label="Nome"
                        name="nome"
                        onChange={handleChange}
                        variant="standard"
                        defaultValue={user.nome}
                    />
                    <TextField
                        fullWidth
                        label="Sobrenome"
                        name="sobrenome"
                        onChange={handleChange}
                        variant="standard"
                        defaultValue={user.sobrenome}
                    />
                    <TextField
                        fullWidth
                        label="E-mail"
                        variant="standard"
                        name="email"
                        onChange={handleChange}
                        type="email"
                        defaultValue={user.email}
                    />
                    <TextField
                        fullWidth
                        label="Senha"
                        type="password"
                        name="senha"
                        onChange={handleChange}
                        variant="standard"
                        defaultValue={user.senha}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => closeModal()}>Cancelar</Button>
                <Button autoFocus onClick={() => handleEditUser()}>
                    Editar
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditUserModal
