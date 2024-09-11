function save_money(Money, percent){

    return Money * (percent/100)

}

function calculate(money, percent, year, month){
    let save = save_money(money, percent)
    let left = money - save
    let month_long = save * month
    let year_long = save * (year * 12)
    let long = month_long + year_long
    
    document.getElementById('save_money').innerHTML = "Save money " + save + " per month"
    document.getElementById('left').innerHTML = "Remaining money " + left 
    document.getElementById('Long').innerHTML = year + " year(s) " + month + " month(s) " + long
}
  


