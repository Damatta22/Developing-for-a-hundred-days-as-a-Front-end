//fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//.then((res)=> res.json())
//.then((data)=> console.log(data.abilities))

fetch('https://pokeapi.co/api/v2/pokemon/ditto',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },

    body:JSON.stringify({
        name:'Da Mata',
    }),
})


.then((res)=> res.json())
.then((data)=> console.log(data.abilities))


// O segundo exemplo seria para enviar um name para a api, porem ela obtem um nívél de segurança 
// e pede uma ativação de um token para ser possivél este cadastro enfim fica ai apenas como exemplo