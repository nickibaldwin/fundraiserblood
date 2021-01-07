function askAge (){
    if (userName == 'Nicki'){
        document.write('<h3>' + 'You need one, Nicki' + '</h3>');
    } else if (userName != 'Nicki'){
        document.write('<h3>' + 'You know you want one' + '</h3>')
    }
    
}
askAge()
