const posts = [
    {title: 'Post One', body: 'This is post One'},
    {title: 'Post Two', body: 'This is post Two'}
];


function getPosts(){
    setTimeout(()=>{
        let output = "";
        for(let i=0; i< posts.length;i++){
            output += `<li>  ${posts[i].title} - last updated ${(new Date().getTime() - posts[i].createdAt)/1000} </li>`;
        }
       document.body.innerHTML = output;
    },1000);
}

function createPost(post) {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=> {
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong')
            }
        }, 2000);

    });
    
}

function deletePost(post){
    return new Promise((resolve,reject)=>{
        if(post.length>0){
            setTimeout(()=>{
                resolve();
            },2000);
        }else{
            reject('Array is empty')
        }
    });
}

setInterval(()=>{
    deletePost().then(()=>{
        posts.pop();
        lastpost = document.querySelector('body').lastChild;
        lastpost.parentNode.removeChild(lastpost);
    })
    .catch((err)=>{
        console.log(err);
    })
}, 2000);

createPost({title: 'post Three', body:'This is post Three'},)
.then(()=>{
    getPosts().then(()=>{
        deletePost()
    })
})
.catch(err => console.log(err));



