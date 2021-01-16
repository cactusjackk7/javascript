// function as parameter

function greet() {
    return 'Hello';
}

// passing function greet() as a parameter
function name(user, func)
{
    //accessing passed function
    const message = func()

    console.log(`${message} ${user}`);
}

name('Jasper the criminal', greet);
name('Klaus', greet);
name('Jossa', greet);
