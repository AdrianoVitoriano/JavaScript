//Callbacks

const loginUser = (email, passowrd, callback) => {
    setTimeout(() => {
        console.log('user logged in')
        callback({email});
        
    }, 1500);
}

const user = loginUser('adrianovitorianosilva@gmail.com', 123456, (user) =>{
    console.log(user);
})


// promises

const loginUsuario = (email, passowrd) => {
    return new Promise ((resolve, reject) => {
    
        const error = false

        if(error){
            reject(new Error('Erro no login'))
        }
        console.log('user logged in')
        resolve({email});
    
    })
}

const usuario = loginUsuario('adrianovitorianosilva@gmail.com', 123456).then(() =>{
    console.log({user})
}).catch((error)=>{})

