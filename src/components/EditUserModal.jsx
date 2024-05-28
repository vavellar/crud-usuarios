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
import React from "react";

function EditUserModal({ isOpen, closeModal, user}) {
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
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked={user.ativo} />} label="Usuário ativo" />
                    </FormGroup>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Tipo de usuário</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue={user.tipoUsuario}
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="Administrador" control={<Radio />} label="Administrador" />
                            <FormControlLabel value="Usuário padrão" control={<Radio />} label="Usuário padrão" />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        fullWidth
                        label="Nome"
                        variant="standard"
                        defaultValue={user.nome}
                    />
                    <TextField
                        fullWidth
                        label="Sobrenome"
                        variant="standard"
                        defaultValue={user.sobrenome}
                    />
                    <TextField
                        fullWidth
                        label="E-mail"
                        variant="standard"
                        type="email"
                        defaultValue={user.email}
                    />
                    <TextField
                        fullWidth
                        label="Senha"
                        type="password"
                        variant="standard"
                        defaultValue={user.senha}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => closeModal()}>Cancelar</Button>
                <Button autoFocus>
                    Editar
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditUserModal
