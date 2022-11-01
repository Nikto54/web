var table = document.createElement('table');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');
var count=0;
var row=1;
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
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
	heading2.innerHTML = "Cерия Паспорта";
	let heading3 = document.createElement('th');
	heading3.innerHTML = "Номер Паспорта";
	row1.appendChild(heading1);
	row1.appendChild(heading2);
	row1.appendChild(heading3);
	thead.appendChild(row1);

}

function createTableBody(){
	for(var i=0;i<3;i++){
		let row_2 = document.createElement('tr');
		let row_2_data_1 = document.createElement('td');
		row_2_data_1.innerHTML = row;
		let row_2_data_2 = document.createElement('td');
		row_2_data_2.innerHTML =  randomInteger(1000, 9999);
		let row_2_data_3 = document.createElement('td');
		row_2_data_3.innerHTML = randomInteger(100000, 999999);
		row_2.appendChild(row_2_data_1);
		row_2.appendChild(row_2_data_2);
		row_2.appendChild(row_2_data_3);
		row_2.id=row;
		row_2_data_1.id=row+"i";
		tbody.appendChild(row_2);
		row=row+1;
		
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
	row_2_data_2.innerHTML = randomInteger(1000, 9999);
	let row_2_data_3 = document.createElement('td');
	row_2_data_3.innerHTML = randomInteger(100000, 999999);
	row_2.appendChild(row_2_data_1);
	row_2.appendChild(row_2_data_2);
	row_2.appendChild(row_2_data_3);
	tbody.appendChild(row_2);
	row_2_data_1.id=row+"i";
	row_2.id=row;
	row=row+1;
}
function deleteRow(){
	const formElement = document.getElementById('del2');
	const formData = new FormData(formElement);
	let rownum=formData.get('rownum')
	if (document.getElementById(rownum)){
		const rowdel=document.getElementById(rownum);
		tbody.removeChild(rowdel);
		row=row-1;
		rownum++;


		for (let i=rownum;i<=row;i++){
			rows1=document.getElementById(i+"i");
			rows1.id=(i-1+"i");
			rows1.innerHTML=i-1;
			rows2=document.getElementById(i);
			rows2.id=i-1;
		}

	}

	else{
		alert("Неправильно введен номер строки");
	}
}
	


