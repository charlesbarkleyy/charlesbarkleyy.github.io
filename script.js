
function daysCoding(){
    const startDate  = new Date('07/18/2021');
    const d = new Date()
    let today = (d.getTime());
    let difference = Math.round((today - startDate.getTime()) / (1000*3600*24));
    difference = difference.toString()
    document.getElementById('days-coding').innerHTML = difference;
}
document.onload = daysCoding();

