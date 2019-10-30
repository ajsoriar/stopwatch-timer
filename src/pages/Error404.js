let Error404 = {

    render : () => {
        console.log("Error404 render!");

        let view =  /*html*/`
            <section class="section">
                <h1> 404 Error </h1>
            </section>
        `
        return view
    }
    , after_render: () => {
        console.log("Error404 after_render!");
    }
}
export default Error404;