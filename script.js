//to reset

function reset() {
    location.reload()
}

//on load display

dataView()
async function dataView() {
    for (let i=1; i<=50; i++) {
        await showdisplay(i);
    }
}

async function showdisplay(i) {
    try {
        var url = "https://pokeapi.co/api/v2/pokemon/" + i + "/"
        var api =await fetch(url)
        var resp = await api.json()
        console.log(resp);


        var container = document.createElement("div")
        container.setAttribute("class","container")
        container.setAttribute("id","d1")
        document.getElementById("display1").append(container)

         
        var img = document.createElement("img")
        img.src = resp.sprites.front_default
        document.getElementById("d1").append(img)


        var div1 = document.createElement("div")
        div1.innerHTML = "Name : " + resp.name[0].toUpperCase() + resp.name.slice()
        document.getElementById("d1").append(div1)

        var len = resp.abilities.length


        for (let i=0; i<len; i++){

            const element = resp.abilities[i]
            var div2 = document.createElement("div")
            div2.innerHTML = " * Abilities : " + element.ability.name
            document.getElementById("d1").append(div2)
        }


        for (let i=0; i<2; i++) {
            var div3 = document.createElement("div")
            div3.innerHTML=" * Moves : " + resp.moves[i].move.name
            document.getElementById("d1").append(div3)
        }

        var div4 = document.createElement("div")
        div4.innerHTML = "Weight : " + resp.weight + " Kg "
        document.getElementById("d1").append(div4)
    } catch(error) {
        console.error();
    }
    
    return false;
}

// on Search button
 function search() {
    document.getElementById("display1").innerHTML = ""

    var val = document.getElementById("myInput").value
    if (val == "" || null) {
        alert("input box empty")
    }
    else {
        viewinfo(val)
    }
 }
     


 

 async function viewinfo(val) {
    
    try {
        var api = await fetch("https://pokeapi.co/api/v2/pokemon/" + val)
        var resp = await api.json()
        console.log(resp);

        var img = document.createElement("img")
        img.src = resp.sprites.front_default
        document.getElementById("display").append(img)

        var div1 = document.createElement("div")
        div1.innerHTML = "Name : " + resp.name
        document.getElementById("display").append(div1)

        var len = resp.abilities.length

        for (let i=0; i<len; i++){

            const element = resp.abilities[i]
            var div2 = document.createElement("div")
            div2.innerHTML = " * Abilities : " + element.ability.name
            document.getElementById("display").append(div2)
        }

        for (let i=0; i<2; i++) {
            var div3 = document.createElement("div")
            div3.innerHTML = " * Moves :" + resp.moves[i].move.name
            document.getElementById("display").append(div3)
        }

        var div4 = document.createElement("div")
        div4.innerHTML = "Weight : " + resp.weight + "kg"
        document.getElementById("display").append(div4)
    
    } catch (error) {
        console.error();
    } 











 }


