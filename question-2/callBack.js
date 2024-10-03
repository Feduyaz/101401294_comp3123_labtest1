const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500);
    });
};
const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('delayed exception!'));
        }, 500);
    });
};
resolvedPromise()
    .then(result => {
        console.log(result); 
    })
    .catch(error => {
        console.error('Error:', error.message); 
    });
rejectedPromise()
    .then(result => {
        console.log(result); 
    })
    .catch(error => {
        console.error('Error:', error.message); 
    });
