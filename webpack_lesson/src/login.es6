let login = (username, password) => {
    if (username !== 'admin' || password !== 'password') {
        console.log('incorrect login');
    }
}

// for testing
login('admin', 'password');