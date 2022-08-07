import { login, logout, register } from './userauth'

export default async (action,  userconfig) => {
    let data = null;

    switch(action) {
        case "login":
            data = await login(userconfig);
            break;
        // case "register":
        //     data = await 
        case "register":
            console.log(userconfig);
            data = await register(userconfig);
            break;
        case "logout":
            data = await logout(userconfig);
            break;
        default:
            break;
    }
    
    // console.log("pro:",pro);
    // pro.then((data)=> {
    //     console.log(data);
    // })
    // console.log("data:", data.token)
    return data;
}