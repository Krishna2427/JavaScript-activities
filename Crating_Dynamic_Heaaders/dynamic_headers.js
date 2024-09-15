const peopleData = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'Los Angeles' },
    { name: 'Charlie', age: 35, city: 'Chicago' }
];

function createDynamicTable(data) {
    const container = document.getElementById('table-container');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headers =Object.keys(data[0]);
    const headerRow = document.createElement('tr');

    headers.forEach(header=>{
        const th = document.createElement('th');
              th.textContent=header;
              headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    data.forEach(item =>{
        const row = document.createElement('tr');

        headers.forEach(header =>{
            const td = document.createElement('td');
                  td = item[header];
                  row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    container.appendChild(table);
}
createDynamicTable(peopleData);