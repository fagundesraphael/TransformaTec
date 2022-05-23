try {
    console.log(f)
} catch (e) {
    if (e instanceof EvalError) {
        console.error('E: ' + e.name + ': ' + e.message)
    } else if (e instanceof ReferenceError) {
        console.error('R: ' + e.name + ': ' + e.message)
    }

}