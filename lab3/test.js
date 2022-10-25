var table = document.createElement('table');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');
var arr = new Array();
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var arr1 = new Array();
var arr1 = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'э', 'ю', 'я'];
var count=0;
var row=4;
var cont=3;
function createTable(){
	table.appendChild(thead);
	table.appendChild(tbody);
	document.getElementById('tablemain').appendChild(table);
}

function createHead(){
	let row1 = document.createElement('tr');
	let heading1 = document.createElement('th');
	heading1.innerHTML = "Номер Столбца";
	let heading2 = document.createElement('th');
	heading2.innerHTML = "Буква Российского Алфавита";
	let heading3 = document.createElement('th');
	heading3.innerHTML = "Буква Латинского Алфавита";
	row1.appendChild(heading1);
	row1.appendChild(heading2);
	row1.appendChild(heading3);
	thead.appendChild(row1);

}

function createTableBody(){
	for(var i=0;i<3;i++){
		let row_2 = document.createElement('tr');
		let row_2_data_1 = document.createElement('td');
		row_2_data_1.innerHTML = i+1;
		let row_2_data_2 = document.createElement('td');
		row_2_data_2.innerHTML = arr1[i];
		let row_2_data_3 = document.createElement('td');
		row_2_data_3.innerHTML = arr[i];
		row_2.appendChild(row_2_data_1);
		row_2.appendChild(row_2_data_2);
		row_2.appendChild(row_2_data_3);
		row_2.id=i+1;
		tbody.appendChild(row_2);
	}
}
function createMainTable(){
	if (count==0){
		createTable();
		createHead();
		createTableBody();
		document.getElementById('ct1').removeAttribute("disabled");
        document.getElementById('del').removeAttribute("disabled");
        document.getElementById('rn').removeAttribute("disabled");
		count=1;
	}else{
		alert("Таблица уже есть");
	}
}
function createRow(){
	let row_2 = document.createElement('tr');
	let row_2_data_1 = document.createElement('td');
	row_2_data_1.innerHTML = row;
	let row_2_data_2 = document.createElement('td');
	row_2_data_2.innerHTML = arr1[cont];
	let row_2_data_3 = document.createElement('td');
	row_2_data_3.innerHTML = arr[cont];
	row_2.appendChild(row_2_data_1);
	row_2.appendChild(row_2_data_2);
	row_2.appendChild(row_2_data_3);
	tbody.appendChild(row_2);
	row_2.id=row;
	row=row+1;
	cont=cont+1;

}
function deleteRow(){
	const formElement = document.getElementById('del2');
	const formData = new FormData(formElement);
	const rownum=formData.get('rownum')
	if (document.getElementById(rownum)){
		const rowdel=document.getElementById(rownum);
		tbody.removeChild(rowdel);
	}
	else{
		alert("sosi");
	}
}
