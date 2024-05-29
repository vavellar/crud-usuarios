import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Container,
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
    const [userToFind, setUserToFind ] = useState('')
    const [deleteUserModalIsOpen, setDeleteUserModalIsOpen] = useState(false);


    const handleOpen = (e, data) => {
        setEditUserModalIsOpen(true);
        setUserSelected(data)
    };

    async function fetchUsers() {
        const { data } = await UsersService.getUsers()
        setUsers(data)
    }

    useEffect( () => {
        fetchUsers()
    }, [])

    useEffect(() => {
        if (userToFind.length === 0 ) {
            fetchUsers()
        }
    }, [userToFind])

    const columns = [
        { field: 'nome', headerName: 'Usuário', width: 130 },
        { field: 'tipoUsuario', headerName: 'Tipo de Usuário', width: 130 },
        {
            field: 'ativo',
            headerName: 'Usuário ativo',
            width: 130,
            renderCell: (params) => {
                return (
                    <Box display='flex' alignItems="center" justifyContent="center" height="100%">
                        <Typography>
                            { params.row.ativo ? 'Sim' : 'Não' }
                        </Typography>
                    </Box>
                );
            },
        },
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

    async function handleSearch() {
        const { data } = await UsersService.searchByName(userToFind)
        setUsers(data)
    }
    return (
        <Box sx={{ backgroundColor: "#f2f6fc", height: '100vh' }}>
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

            <Container sx={{ marginTop: '8px'}}>
                <TextField
                    id="filled-search"
                    label="Nome do Usuário"
                    type="search"
                    variant="filled"
                    onChange={(event) => setUserToFind(event.target.value)}
                />
                <Button disabled={userToFind.length === 0} onClick={() => handleSearch()}>Pesquisar</Button>

            </Container>

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
                fetchUsers={() => fetchUsers()}
            />
            <DeleteUserModal
                isOpen={deleteUserModalIsOpen}
                closeModal={() => setDeleteUserModalIsOpen(false)}
                user={userSelected}
                fetchUsers={() => fetchUsers()}
            />
            <CreateUserModal
                isOpen={createUserModalIsOpen}
                closeModal={() => setCreateUserModalIsOpen(false)}
                fetchUsers={() => fetchUsers()}
            />
        </Box>
    );
}

export default Users;
