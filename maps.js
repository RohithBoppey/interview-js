let mp = new Map();
if(mp.get('a') === undefined){
    mp.set('a', 0)
    console.log(mp);
}
mp.set('a', mp.get('a') + 1);
console.log(mp);

mp.delete('a');
console.log(mp)