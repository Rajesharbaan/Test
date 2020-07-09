function getHistory()
{
    return document.getElementById("history-value").innerText;
    
}
// alert(getHistory());
function printHistory(num)
{
    document.getElementById("history-value").innerText = num;


}
function getOutput()
{
    return document.getElementById("output-value").innerText;
    
}

function printOutput(num)
{
    if(num =="")
     {
           document.getElementById("output-value").innerText = num;

    }
    else
    {
       
    document.getElementById("output-value").innerText= getFormatetedNumber(num);
    
    }
}
function getFormatetedNumber()
{
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;

}
printOutput("1222333");