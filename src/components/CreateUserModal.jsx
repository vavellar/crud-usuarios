import {
    Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Radio,
    RadioGroup,
    Switch,
    TextField
} from "@mui/material";
import React from "react";

function EditUserModal({ isOpen, closeModal}) {
    return (
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
                    <FormGroup>
                        <FormControlLabel control={<Switch />} label="Usuário ativo" />
                    </FormGroup>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Tipo de usuário</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
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
                    />
                    <TextField
                        fullWidth
                        label="Sobrenome"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        label="E-mail"
                        variant="standard"
                        type="email"
                    />
                    <TextField
                        fullWidth
                        label="Senha"
                        type="password"
                        variant="standard"
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => closeModal()}>CANCELAR</Button>
                <Button autoFocus>
                    CADASTRAR
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditUserModal
