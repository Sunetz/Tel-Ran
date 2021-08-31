/* console.log('Request data...');
setTimeout(()=>{
    console.log('Preparing data...')

    const backendDAta = {
        server: 'aws',
        port: 2000,
        status: 'working'
    }

    setTimeout(() =>{
        backendDAta.modified = true
        console.log('Data received', backendDAta)
    }, 2000)
    }, 2000) */

const p = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log('Request data...')
        const backendDAta = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendDAta)
    }, 2000)
})

p.then(data =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            data.modified = true
            resolve(data)
            
        }, 2000)
    })
    /* p2.then(clientData =>{
        console.log('Data received', clientData)
    }) */
}).then(clientData  => {
    console.log('Data received', clientData)
    clientData.fromPromise = true
    return clientData
}).then(data=>{
    console.log('Modified', data)
})
