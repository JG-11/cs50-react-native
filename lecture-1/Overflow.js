//Let's overflow the call stack
function recurse() {
    console.log("recursion!")
    return recurse();
}

recurse();