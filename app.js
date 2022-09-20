import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const obtenerDatos = async()=>{
    
    let ArrayPokemones=[];
    let ArrayImgPokemones=[];
   try {

        for (let i = 1; i <= 3; i++) {
            //generamos un id aleatorio para la api
            function getRandomArbitrary(min, max) {
                return Math.random() * (max - min) + min;
            }
            let idAleatorio= (parseInt(getRandomArbitrary(1,151)));
            
            //llamamos a la api con el segun id
            const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${idAleatorio}`); 
            const formato = await response.json(); 
            let nombre=formato.name;
            ArrayPokemones.push(nombre);

            let SpritePokemon=formato.sprites.other.dream_world.front_default;
            ArrayImgPokemones.push(SpritePokemon);
        }

   }catch (error) {
        console.log(error)
   }
   //agregando imagen HTML
   const image=document.querySelector("#img__pokemon");
   image.srcset=ArrayImgPokemones[0];
   image.style.filter="brightness(0%)";

   //Calcular el id del pokemon que vemos en pantalla
   const idURL= parseInt( ArrayImgPokemones[0].slice(91,94));
   console.log(idURL)

    // creando arreglo con la clase de los botones
    let Alternativas= ["btn1","btn2","btn3"];
    Alternativas= _.shuffle(Alternativas)

    // function SeleccionarDatoAlazar(datos){
    //     return datos [ Math.floor(Math.random()*datos.length) ]
    // }
    // let insertar=SeleccionarDatoAlazar(Alternativas);

    // agregando del pokemon al HTML
    let alternativa1=document.querySelector(`.${Alternativas[0]}`);
    alternativa1.innerText=ArrayPokemones[0];

    alternativa1.addEventListener('click',()=>{
        let idAleatorio1= parseInt( ArrayImgPokemones[0].slice(91,94));
        if (idAleatorio1===idURL) {
            swal.fire({
                icon: 'success',
                title: 'Buen Trabajo',
                text: 'Quizz Pokemon',
            
            })
            image.style.filter="brightness(100%)";
            confetti();
            
        }else{
            image.style.filter="brightness(0%)"
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Vuelve a intentar¡¡',
            })
            
        }

    })

    let alternativa2=document.querySelector(`.${Alternativas[1]}`);
    alternativa2.innerText=ArrayPokemones[1];

    alternativa2.addEventListener('click',()=>{
        let idAleatorio2= parseInt( ArrayImgPokemones[1].slice(91,94));
        if (idAleatorio2===idURL) {
            swal.fire({
                icon: 'success',
                title: 'Buen Trabajo',
                text: 'Quizz Pokemon',
               
            })
            image.style.filter="brightness(100%)";
            confetti();
            
            
        }else{
            
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Vuelve a intentar¡¡',
            })
            
        }
    })

    let alternativa3=document.querySelector(`.${Alternativas[2]}`);
    alternativa3.innerText=ArrayPokemones[2];

    alternativa3.addEventListener('click',()=>{
        let idAleatorio3= parseInt( ArrayImgPokemones[2].slice(91,94));
        if (idAleatorio3===idURL) {
            swal.fire({
                icon: 'success',
                title: 'Buen Trabajo',
                text: 'Quizz Pokemon',
            
            })
            image.style.filter="brightness(100%)";
            confetti();
            
        }else{
            
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Vuelve a intentar¡¡',
            })

          
        }
    })


    console.log("hola mundo")
    console.log(ArrayPokemones);
    console.log(ArrayImgPokemones);

    
}
obtenerDatos();

 const btnSiguiente=document.querySelector(".btn-Siguiente")

    btnSiguiente.addEventListener('click',()=>{
        location.reload();
    })

// Ordenar Arreglos solo de numeros Aleatoriamente
// const numbers = [1,2,3,4];
// console.log(numbers);
// const ordenado= numbers.sort((a,b)=>Math.random()-0.5);
// console.log(ordenado);

//Ordenar arreglos aleatoriamente 
// const numbers=["rojo","verde","azul"];
// const randomIndex= Math.floor(
//     Math.random()*numbers.length
// )
