import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


function password() {
    const {user} = useContext(UserContext)
    
    return user && user.password ? <div>PW: {user.password}</div> : <div>Please set PW</div>
}

export default password