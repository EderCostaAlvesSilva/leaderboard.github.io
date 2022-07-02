const btnAdd = document.getElementById('btnAdd');

let contar = 0;

const dataAtual = new Date();

let Cadastro = Array();
function Add() {
    
    Cadastro.push({
        nome: document.getElementById('nome').value +" "+ document.getElementById('sobrenome').value,

        pais: document.getElementById('pais').value,

        pontos: Number(document.getElementById('pontos').value)
    });

   Cadastro.sort(function(a,b){
        if(a.pontos > b.pontos){
            return -1;
        } else{
            return true;
        }
   });

   document.querySelector('main').innerHTML = "";

   Cadastro.forEach((e,i,a) => {
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let tbody = document.createElement('tbody');
    let table = document.createElement('table');

    div1.innerHTML = e.nome;
    div2.innerHTML = `${dataAtual.getDate()}/${dataAtual.getMonth()+1}/${dataAtual.getFullYear()} - ${dataAtual.getHours()}:${dataAtual.getMinutes()}`;
    div2.style.fontSize = '12px'
    div2.style.color = 'gray';

    td1.appendChild(div1);
    td1.appendChild(div2);
    td2.innerHTML = e.pais;
    td3.innerHTML = e.pontos;

    //adicionando buttons
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    let span3 = document.createElement('span');
    const img = document.createElement('img');
    img.src = './image/icons8-lixo-24.png';

    span1.appendChild(img)
    span2.innerHTML = '+5';
    span3.innerHTML = '-5';

    span1.classList = 'span1';
    span2.classList = 'span2';
    span3.classList = 'span3';
    
    span1.addEventListener('click', function(){
       
        //q tal fazer uma pesquisa pelo cadastro usando indexOff, e apos encontrar deletar o array deste dado
       

        //eai, da pra fazer essa pesquisa e depois dela aplicar a soma e subtração dentro deste array
    })

    tbody.appendChild(td1);
    tbody.appendChild(td2);
    tbody.appendChild(td3);
    tbody.appendChild(span1);
    tbody.appendChild(span2);
    tbody.appendChild(span3);

    
    table.appendChild(tbody);

    document.querySelector('main').appendChild(table);
   });
}
btnAdd.addEventListener('click', Add);