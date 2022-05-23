async function getCalc() {
    let res = 1 + b
    return res;
}

async function func() {
    try {
        var res = await getCalc();
        console.log(res);
    } catch (error) {
        console.error(error);
    }
}

func()