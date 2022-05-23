async function f() {

    let promise = new Promise((resolve, reject) => {
        console.log("Promessa pendente")
        let r = 0
        let e = 5
        resolve(r + e)
    });

    let result = await promise; // wait until the promise resolves (*)

    console.log(result); // "done!"
}

f();