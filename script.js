
const petsData = [

    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },

    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },

    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },

    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },

    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    },




];



function petDis () {
    let number = prompt ("Enter a number between 0 and 4.");
    for (let i = 0; i < petsData.length; i++)
    console.log(petsData[0].petName);

        if (number == "0"){
            petZero = `${petsData[0].petName} the dog is ${petsData[0].age} years old. This dog weighs ${petsData[0].weightInKilos}  kilos and is a ${petsData[0].breed} breed.`
            let petinfo = document.querySelector(".respone");
            petinfo.innerText = petZero;
            return petinfo
        }

                else if (number == "1"){
                    petZero = `${petsData[1].petName} the dog is ${petsData[1].age} years old. This dog weighs ${petsData[1].weightInKilos}  kilos and is a ${petsData[1].breed} breed.`
                    let petinfo = document.querySelector(".respone");
                    petinfo.innerText = petZero;
                    return petinfo
                }

                        else if (number == "2"){
                            petZero = `${petsData[2].petName} the cat is ${petsData[2].age} years old. This cat weighs ${petsData[2].weightInKilos}  kilos and is a ${petsData[2].breed} breed.`
                            let petinfo = document.querySelector(".respone");
                            petinfo.innerText = petZero;
                            return petinfo
                        }

                                else if (number == "3"){
                                    petZero = `${petsData[3].petName} the snake is ${petsData[3].age} years old. This snake weighs ${petsData[3].weightInKilos}  kilos and is a ${petsData[3].breed} breed.`
                                    let petinfo = document.querySelector(".respone");
                                    petinfo.innerText = petZero;
                                    return petinfo
                                }

                                        else if (number == "4"){
                                            petZero = `${petsData[4].petName} the dog is ${petsData[4].age} years old. This dog weighs ${petsData[4].weightInKilos}  kilos and is a ${petsData[4].breed} breed.`
                                            let petinfo = document.querySelector(".respone");
                                            petinfo.innerText = petZero;
                                            return petinfo
                                        }

                                                else {
                                                    alert("Please refresh enter a number between 0 and 4")
                                                }

}

console.log(petDis())
