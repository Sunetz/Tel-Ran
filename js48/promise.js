const shop = {
    isOpened: true
}
const getProducts = ()=>{
    return new Promise((resolve, reject)=>{
        if(!shop.isOpened){
            reject(new Error('The shop is closed'))
        }
        setTimeout(()=>{
            const cart = {
                apple: '2 kg',
                banana: '1 kg',
                butter: '2 p',
                milk: 1
            };
            resolve(JSON.stringify(cart));
        }, 2000);
    })
};

let product ={};

getProducts().then((p)=>{ //what happens when the data will come
    console.log(p);
    return JSON.parse(p);
}).then(p =>{
    if(p.milk < 1){
        throw new Error('You have to buy a milk')
    }
    console.log('product from promise', p);
    product = p;
}).catch(err =>{
    console.log(err.message)
}).finally(()=>{

    console.log(product, 'from finally')
})

console.log('product from code', product)