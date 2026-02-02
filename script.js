// const ctn = document.getElementById("ctn")

// fetch("http://api.alquran.cloud/v1/surah")
//     .then(response => {
//         return response.json()
//     })

//     .then(data => {
//         surah = data.data

//         for (let keys in surah) {

//             const surah_card = document.createElement("h1")

//             surah_card.innerText = ` Surah name is ${surah[keys].name} and its surah number is ${surah[keys].number}`

//             console.log(keys, surah[keys])


//             ctn.appendChild(surah_card)
//         }
//     })

const ctn = document.getElementById("ctn");

fetch("http://api.alquran.cloud/v1/surah")
    .then(response => response.json())
    .then(data => {
        const surah = data.data;

        surah.forEach(item => {
            const surah_card = document.createElement("div");
            surah_card.className = "surah-card";

            surah_card.innerHTML = `
                <div class="surah-name">${item.name}</div>
                <div class="surah-number">Surah Number: ${item.number}</div>
            `;

            ctn.appendChild(surah_card);
        });
    })
    .catch(err => console.error(err));






// const A = [ "a", "b","c" ,"d"]



// // for ( let i = 0 ; i<= A.length ; i++){
// //     console.log(A[i])
// // }


// for ( let elements of A){
//     console.log(elements)
// }


// `const user = {
//     name : "Shahbaz",
//     age : 20,
//     nationality : "Pakistani"
// }



// for ( let keys in user){
//     console.log(keys , user[keys])
// }