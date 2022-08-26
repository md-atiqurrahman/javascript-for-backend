const myPromise = new Promise((resolve, reject) => {
    // const user = null;
    const user = { id: 1 };
    if (!user) {
        reject('Something went wrong')
    }
    else {
        setTimeout(() => {
            resolve({name: 'John'});
        }, 1000)
    }
});

const userIds = [1, 2, 3, 4, 5];
const userData = [];

for (let i = 0; i < userIds.length; i++) {
    const userId = userIds[i];
    // myPromise.then(user =>{
    //    userData.push(user);
    // })
    userData.push(myPromise);
}

Promise.all(userData).then(res =>{
    console.log(res);
})
// console.log(userData)

myPromise.then(res => console.log('inside then:', res)).catch(err => console.log('inside catch:', err));

console.log('finally done');