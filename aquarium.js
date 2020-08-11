window.onload=function() {
	heightObj = document.getElementById('txtHeight');
	lengthObj = document.getElementById('txtLength');
	widthObj = document.getElementById('txtWidth');
	costObj = document.getElementById('tdcost');
    document.getElementById('btnReset').onclick = resetInputs;
    document.getElementById('btnCalc').onclick = calcCost;
}

function resetInputs() {
	heightObj.value = '';
	lengthObj.value = '';
	widthObj.value = '';
    costObj.innerHTML = '';
}

function calcCost() {
	var height = new Number(heightObj.value);
    var length = new Number(lengthObj.value);
	var width = new Number (widthObj.value;
	costObj.innerHTML = '';
    if(isNaN(height) || isNaN(length)) || (isNaN(width) {
		alert('Invalid height, length or width ');
        return;
     }
     costObj.innerHTML = height*Math.pow(length,2)/800;
}
			