const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const numberOneInput = document.getElementById('number-one');
    const numberTwoInput = document.getElementById('number-two');

    const numberOne = parseFloat(numberOneInput.value);
    const numberTwo = parseFloat(numberTwoInput.value);

    const tudoCerto = document.querySelector('.tudoCerto');
    const numInvalido = document.querySelector('.numInvalido');

    if (numberOne < numberTwo) {
        tudoCerto.innerHTML = `Número A: <b>${numberOne}</b> é menor que Número B: <b>${numberTwo}</b>!`;
        tudoCerto.style.display = 'block';
        numInvalido.style.display = 'none';
        
        numberOneInput.value = '';
        numberTwoInput.value = '';
    } else {
        numInvalido.innerHTML = 'O número A deve ser menor que o Número B!';
        tudoCerto.style.display = 'none';
        numInvalido.style.display = 'block';
        
        numberOneInput.value = '';
        numberTwoInput.value = '';
    }
});

/* Mandei mensagem para o tutor reclamando da didática, onde eu não aprendi NADA
do que foi passado, mandei mensagem na data de 30/01/2024 às 13:18 da tarde
No momento que estou finalizando esse código, ainda é 30/01/2024, são exatamente
22:59, e estou finalizando e entregando a tarefa solicitada não graças ao professor Gian
mas sim graças a minha vontade de aprender e mudar de vida querendo muito entrar na área
para então mudar minha situação de vida, após pouquíssimos vídeos GRÁTIS no YouTube
eu absorvi MUITO mais do que TUDO que aprendi em JavaScript aqui, e não só em Java,
mas HTML e CSS também.

Vou deixar essa mensagem pro tutor que for avaliar meu código, e para que eu mesmo possa
voltar aqui futuramente e comparar minha evolução e indignação com a didática deste professor.

Pra ele pode parecer algo simples, afinal toda aula anda sendo: 
~~Faz o que eu faço ai aluno
"Mas porque professor?
~~Mágica apenas meu nobre
Porém o curso foi apresentado do iniciante ao pro, e ele faz tudo como todos nós soubéssemos

Deve ser um excelente profissional na área, porém como tutor falha e muito em relação a tudo

Agradeço ao canal Rafaela Ballerini e Curso em Vídeo, pois me deram total apoio em todos projetos
*/