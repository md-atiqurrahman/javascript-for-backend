const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!')
    }, 1000)
});

async function getData() {
    const res = await promise;
    console.log(res)
}

getData();

fetch('')
    .then(res => res.json())
    .then(data => console.log(data));


async function getUsers(){
    const res = await fetch('');//This is  just example because nodejs by default do not support fetch() method .we need to use different package for fetch like: axios e.t.c.
    const user = await res.json();

    const res2 = await fetch(`http://www.example.com/${user.id}`);
    const products = await res2.json();
}

getUsers();