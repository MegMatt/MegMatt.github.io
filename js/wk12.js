// let ourObject = {
//     "name": "casey",
//     "profession": "PhD Student",
//     "age": 30,
//     "pets":[{"name":"Boots", "type":"dog", "age": 9, "unit": "years"}, {"name":"Marty", "type": "cat", "age":5, "unit": "months"}]
// }

// console.log(ourObject);

let myData = {};

function fetchData(){
fetch('https://catfact.ninja/fact')
    .then(res =>{
        if(res.ok){
            return res.json();
        }else{
            console.log(res);
        }
    }).then(res => {
        myData = res;
        console.log(myData);
        document.getElementById("fact").innerHTML = myData.fact;
    })
    .catch(error => {console.log(error)})
}
fetchData();

document.getElementById("button_1").addEventListener("click", e=> {fetchData();})

function fetchDataJ(){
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
        .then(res =>{
            if(res.ok){
                return res.json();
            }else{
                console.log(res);
            }
        }).then(res => {
            myData = res;
            console.log(myData);
            document.getElementById("joke").innerHTML = myData.joke;
        })
        .catch(error => {console.log(error)})
    }
    fetchData();
    
    document.getElementById("button_2").addEventListener("click", e=> {fetchDataJ();})

    function fetchDataC(){
        fetch('https://api.chucknorris.io/jokes/random')
            .then(res =>{
                if(res.ok){
                    return res.json();
                }else{
                    console.log(res);
                }
            }).then(res => {
                myData = res;
                console.log(myData);
                document.getElementById("chuck").innerHTML = myData.value;
            })
            .catch(error => {console.log(error)})
        }
        fetchData();
        
        document.getElementById("button_3").addEventListener("click", e=> {fetchDataC();})

console.log(myData);

// let name = "Casey";

// let myString = "hello " + name + "!";
// let myString = `hello ${name} !`;