console.log('Person1: shows ticket');
console.log('Person2: shows ticket');

const preMovie = async () =>{

    const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket');
        },3000)
    });
    
    const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn`));
    const addButter = new Promise((resolve,reject) => resolve(`butter`));
    const getColddrink = new Promise((resolve,reject) => resolve(`colddrink`));
    
    let ticket = await promiseWifeBringingTicks;
    
    console.log(`wife: i have ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife:no i am hungry');
    
    let popcorn = await getPopcorn;
    
    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in ');
    console.log('wife: no i  want butter on my popcorn');
    
    let butter = await addButter;
     
    console.log(`husband: i got some ${butter} on popcorn`);
    console.log('husband: anything else darling');
    console.log('wife: cold drink makes it complete');

    let colddrink = await getColddrink;

    console.log(`husband: here is your ${colddrink}`);
    console.log('husband: thats all or anything else?');
    console.log('wife: lets go we are getting late');
    console.log('husband: thank you for remainder * grins*');

    // let [popcorn,butter,colddrink] = await Promise.all[ getPopcorn, addButter, getColddrink];
    // console.log(`${popcorn} , ${butter}, ${colddrink}`);

    return ticket;    
}

preMovie().then((m)=> console.log(`Person3: shows ${m}`));

console.log('Person4: shows ticket');
console.log('Person5: shows ticket');

