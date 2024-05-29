import {
    Button,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle, Snackbar,
} from "@mui/material";
import React, {useState} from "react";
import {UsersService} from "../services";

function DeleteUserModal({ isOpen, closeModal, user, fetchUsers}) {
    const [snackbarIsOpen, setSnackBarIsOpen] = useState(false);
    async function handleDeleteUser() {
        closeModal()
        await UsersService.deleteUser(user.id)
        setSnackBarIsOpen(true)
        fetchUsers()
    }
    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={() => closeModal()}
                fullWidth
            >
                <DialogTitle>
                    Excluir usuário
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Não poderemos reverter a ação. Tem certeza que deseja excluir este usuário?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => closeModal()}>CANCELAR</Button>
                    <Button autoFocus onClick={() => handleDeleteUser()}>
                        EXCLUIR
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={snackbarIsOpen}
                autoHideDuration={6000}
                onClose={() => setSnackBarIsOpen(false)}
                message="Usuário excluído com sucesso"
            />
        </div>
    )
}

export default DeleteUserModal
