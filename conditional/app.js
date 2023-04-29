// let hy=prompt("hy man")
function robat() {
    let question=prompt('welcome','') ,answer= ''

if (question.includes()=='salam','درود','سلام') {
    console.log(answer='درود بر تو');
    alert(answer)
} else if(question.includes()=='چطوری','چطور','how'){
    console.log(answer= 'خوبم ممنون کوکا');
    alert(answer)
}if (question.includes()=='اسمت چیه؟','اسمت','name') {
    console.log(answer='ربات');
    alert(answer)
} else if(question.includes()=='معدلت چنده؟','معدلت'){
    answer=Math.random()* 100 
    console.log(answer.toFixed(2) );
    alert(answer.toFixed(2))
    if (answer>=50) {
        console.log(answer='قبول شدی برو حال کن');
        alert(answer)
    }
    else{
        console.log(answer='رد شدی تو رو به ناموست برو یکم درس بخون');
        alert(answer)
    }
}    
}

robat()




