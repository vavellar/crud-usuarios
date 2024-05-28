import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, Modal,
    TextField,
} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

import Typography from "@mui/material/Typography";
import {UsersService} from "../services";
import EditUserModal from "../components/EditUserModal";
import DeleteUserModal from "../components/DeleteUserModal";
import CreateUserModal from "../components/CreateUserModal";


function Users() {
    const [users, setUsers ] = useState([])
    const [editUserModalIsOpen, setEditUserModalIsOpen] = useState(false);
    const [createUserModalIsOpen, setCreateUserModalIsOpen] = useState(false);
    const [userSelected, setUserSelected ] = useState(false)
    const [deleteUserModalIsOpen, setDeleteUserModalIsOpen] = useState(false);


    const handleOpen = (e, data) => {
        setEditUserModalIsOpen(true);
        setUserSelected(data)
    };

    useEffect( () => {
        async function fetchUsers() {
            const { data } = await UsersService.getUsers()
            setUsers(data)
            console.log(users)
        }

        fetchUsers()
    }, [])

    const columns = [
        { field: 'nome', headerName: 'Usuário', width: 130 },
        { field: 'tipoUsuario', headerName: 'Tipo de Usuário', width: 130 },
        { field: 'ativo', headerName: 'Usuário ativo', width: 130 },
        {
            field: 'actions',
            headerName: 'Ações',
            width: 200,
            renderCell: (params) => {
                return (
                    <div >
                        <Button onClick={(e) => {
                            setDeleteUserModalIsOpen(true)
                            setUserSelected(params.row)
                        }}>Deletar</Button>
                        <Button onClick={(e) => handleOpen(e, params.row)}>Editar</Button>
                    </div>
                );
            },
        },
    ]

    return (
        <Box sx={{ backgroundColor: "#f2f6fc", height: '100vh' }}>
            <Container>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h6">Gerenciar usuários</Typography>
                    <Container sx={{ display: 'flex'}}>
                        <Grid item xs={4}>
                            <TextField
                                label="Buscar por usuário"
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary="Inbox" />
                                </ListItemButton>
                            </ListItem>
                        </Grid>
                    </Container>
                </Box>
            </Container>
            <Box
                mt={2}
                display="flex"
                justifyContent="space-between"
                py={2}
                px={4}
                sx={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', backgroundColor: 'white' }}
            >
                <Typography variant="h5">
                    Usuários
                </Typography>
                <Button variant="contained" onClick={() => setCreateUserModalIsOpen(true)}>
                    Cadastrar
                </Button>
            </Box>

            <Container maxWidth="lg" sx={{ marginTop: '16px' }}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                />
            </Container>
            <EditUserModal
                isOpen={editUserModalIsOpen}
                closeModal={() => setEditUserModalIsOpen(false)}
                user={userSelected}
            />
            <DeleteUserModal
                isOpen={deleteUserModalIsOpen}
                closeModal={() => setDeleteUserModalIsOpen(false)}
                user={userSelected}
            />
            <CreateUserModal
                isOpen={createUserModalIsOpen}
                closeModal={() => setCreateUserModalIsOpen(false)}
            />
        </Box>
    );
}

export default Users;
