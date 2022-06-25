
createPost(){
    return new Promise(() =>{

    });
}

const user = {
    username : 'pavan',
    lastactivitytime:'25th of june'
}
upadtelastactivitytime ={

}
userupdatepost(){
    Promise.all([createPost,upadtelastactivitytime])
    .then(([createPostresolves,updatelastactivitytimeresolve]) =>{
        console.log(updatetelastactivitytimeresolves)

    })
    .catch(err=> console.log(err))
}