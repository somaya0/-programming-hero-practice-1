//login button
const loginBtn= document.getElementById("login");
loginBtn.addEventListener("click",function(){
    const loginArea=document.getElementById("login-area");
    loginArea.style.display="none";
    document.getElementById('welcome').innerHTML='Your account';
    document.getElementById('transection-area').style.display="block";
})


//deposit button
document.getElementById("adddeposit").addEventListener("click",function(){
    const depositAmount = parseFloat(document.getElementById("depositamount").value);
    const currentDeposit =parseFloat(document.getElementById("currentdeposit").innerText);
    document.getElementById("currentdeposit").innerText = currentDeposit+depositAmount;
    document.getElementById("depositamount").value = "";
    const currentBalance = parseFloat(document.getElementById("currentbalance").innerText)
    document.getElementById("currentbalance").innerText = currentBalance+depositAmount;
})


//withdraw button
document.getElementById("addwithdraw").addEventListener("click",function(){
    const withdrawAmount = parseFloat(document.getElementById("withdrawamount").value);
    const currentWithdraw =parseFloat(document.getElementById("currentwithdraw").innerText);
    document.getElementById("currentwithdraw").innerText = currentWithdraw+withdrawAmount;
    document.getElementById("withdrawamount").value = "";
    const currentBalance = parseFloat(document.getElementById("currentbalance").innerText)
    document.getElementById("currentbalance").innerText = currentBalance - withdrawAmount;
})



