async function getQuote() {
    let quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit laborum.";
    return w;
}

async function main() {
    try {
        var quote = await getQuote();
        console.log(quote);
    } catch (error) {
        console.error(error);
    }
}

main()