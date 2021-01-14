import React, {useState} from 'react';

function LoginWindow (){
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
        const [user,setUser] = useState({name:"", email:""});
        const [error,setError]= useState("");
        const Login = details => {
        console.log(details);
    
        if (details.email == adminUser.email && details.password == adminUser.password){
            console.log("Logged in");
            setUser ({
                name: details.name,
                email: details.email
            })
        } else {
        console.log("Details do not match");
        setError({"Details do not match"});
    }
    
    const Logout = () => {
        setUser({ name: "", email:"" });

    }
    
    return ( 
    <div>

    </div>
          
    );
    }

    export default LoginWindow; 
