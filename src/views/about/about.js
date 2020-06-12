import './response.about.js';

// --------------------------------
//  Define Data Sources
// --------------------------------

/*
let getPostsList =  () => {
     const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        //const response = await fetch(`http://url`, options)
        //const json = await response.json();
        // console.log(json)
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
}
*/

let About = {
    render :  () => {

        console.log("About render!");

        let people = window.people;
        let view =  /*html*/`
            <section class="section">
                <h1> About </h1>
                <ul>
                    ${ people.map(post => 
                        /*html*/`<li><a href="#/p/${post.id}">${post.title}</a></li>`
                        ).join('\n ')
                    }
                </ul>
            </section>
        `
        return view
    }, 
    after_render:  () => {
        console.log("About after render!");
        flyingCanvas.init({
            width: 200,
            height: 400,
            showWings: false,
            bumpIntoEdgeFn: function(){
                console.log("Choca 1!");
            },
            zIndex: 300,
            awesome: 2 // This will render the picture of the column
        });
        flyingCanvas.show()
        flyingCanvas.start()
    },
    before_leave: () => {
        console.log("About before leave!");
        flyingCanvas.stop()
        flyingCanvas.hide()
    }

}

export default About;