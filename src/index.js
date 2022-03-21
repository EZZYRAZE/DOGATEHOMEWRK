/* eslint-disable */



/* eslint-disable */

window.onload = function() {
    document.querySelector('#btn').addEventListener("click",()=>{
        document.querySelector('#the-excuse').innerHTML = generateExcuse();
    })
  //write your code here
  document.querySelector('#the-excuse').innerHTML = generateExcuse();
  console.log('Heloo');
};

 generateExcuse=()=>{
  let pronoun = ['A', 'The'];
  let subject = ['mouse', 'dog', 'child','bear','ninja','turtle'];
  let action = ['stole my', 'washed my', 'tore my', 'ate my', 'threw my'];
  let possesion = ['clothes', 'shoes', 'socks', 'homework', 'project', 'presentation'];
  let where = ['in my car', 'in the river', 'on the street', 'in my house'];

    let pIndex = Math.floor(Math.random()*pronoun.length);
    let sIndex = Math.floor(Math.random()*subject.length);
    let aIndex = Math.floor(Math.random()*action.length);
    let posIndex = Math.floor(Math.random()*possesion.length);
    let wIndex = Math.floor(Math.random()*where.length);

    return pronoun[pIndex]+ ' '+subject[sIndex]+ ' '+action[aIndex]+ ' '+possesion[posIndex]+ ' '+where[wIndex];
    
 };
