import {
    Button,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle,
} from "@mui/material";
import React from "react";

function DeleteUserModal({ isOpen, closeModal, user}) {
    return (
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
                <Button autoFocus>
                    EXCLUIR
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteUserModal
