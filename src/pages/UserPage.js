import React, { useEffect, useState } from 'react'
import { usersApi } from '../api/users'

export const UserPage = () => {

    const [users, setUsers] = useState([])
    

    useEffect(() => {
        
        getUsers()
        
    }, [])
    
    const getUsers = async ()=>{
        
        const {data} = await usersApi.get('https://reqres.in/api/users')
        // .then( ({data:{data}}) => {
        //     console.log(data);
        //     return data
        // })
        console.log(data.data);
        setUsers(data.data)
    } 






    return (
        <div className="mt-5">
            <h2>Users page</h2>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(({id,email,first_name,last_name,avatar}) => (
                            <tr key={email}>
                                <td>{id}</td>
                                <td>{first_name}</td>
                                <td>{last_name}</td>
                                <td>{email}</td>
                                <td>
                                    <img 
                                        style={{width:50}}
                                        className="img-thumbnail" 
                                        src={avatar} alt={email} />
                                </td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
            <button className="btn btn-outline-primary">Agregar</button>
        </div>
    )
}
