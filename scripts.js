// selecionando os elementos
const randomizer = document.querySelector('.randomizer')
const result = document.querySelector('.result')

const buttonSorterAgain = document.querySelector('.result a')

const randomizerForm = document.querySelector('.randomizer form')
let numberInput = document.getElementById('number')
let startInput = document.getElementById('start')
let endInput = document.getElementById('end')
let noRepeatInput = document.getElementById('noRepeat')

// Conversosr do input para aceitar somente numeros
const numericInputs = [
    document.getElementById('number'),
    document.getElementById('start'),
    document.getElementById('end')
]
numericInputs.forEach(input => {
    input.addEventListener('input', () => {
        // Remove tudo o que não for número de 0 a 9
        input.value = input.value.replace(/\D/g, '');
    });
});



// Aciona o formulario do randomizer ao dar submit
randomizerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const quant = Number(numberInput.value)
    const min = Number(startInput.value)
    const max = Number(endInput.value)
    const canRepeat = noRepeatInput.checked
    
    // Verifica se a quantidade de numeros 
    if (quant > max){
        alert("Quantidade de números sorteados maior que a quantidade de itens")
    }else{
        // Ocultando o formulario Randomizer e Aparecendo com o Result
        randomizer.style.display = 'none';
        result.style.display = 'block';

        console.log(sorter(canRepeat,quant, min, max))
    }

})

// Funcao para sorterar os numeros
function sorter(canRepeat, numberInput, startInput, endInput){
    
    try {
        let sorterNumbers = []

        while(sorterNumbers.length < numberInput){

            let resultRandom = Math.floor(Math.random() * (endInput - startInput + 1)) + startInput;

            // Se PODE repetir, precisamos checar se o número já existe
            if(canRepeat){
                const duplicates = sorterNumbers.includes(resultRandom);
    
                if(!duplicates){
                    sorterNumbers.push(resultRandom)
                }
            } else {
                // Se NAO repetir, apenas adiciona direto sem checar
                sorterNumbers.push(resultRandom)
            }
        } 

        return sorterNumbers
        
    } catch (error) {
        console.log(error)
        alert ("Erro!")
    }
}


// Ocultando o Result e Aparecendo com o formulario Randomizer
buttonSorterAgain.addEventListener('click', (e) =>{
    e.preventDefault()
    result.style.display = 'none';
    randomizer.style.display = 'block';
})