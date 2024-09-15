const jsonphotos = [];
const albums = [];
const div_Container = document.createElement('div');
div_Container.style.padding = '20px';

const btn1 = document.createElement('button');
btn1.textContent = 'JSonPhots';
btn1.setAttribute('class','btn btn-primary');

const btn2 = document.createElement('button');
btn2.textContent = 'JsonAlbums';
btn2.setAttribute('class','btn btn-warning');

div_Container.appendChild(btn1);
div_Container.appendChild(btn2);

document.body.appendChild(div_Container);

let handleJsonData = (event) => {
  const clickedButton = event.target.textContent;
  if (clickedButton == 'JSonPhots') {
    btn1.style.display='none';
    btn2.style.display='block';
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        jsonphotos.push(...data);
        jsonTableAlbum('photos'); // Pass 'photos' as type
      });
  } else if (clickedButton == 'JsonAlbums') {
    btn2.style.display='none';
    btn1.style.display='block';
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => {
        albums.push(...data);
        jsonTableAlbum('albums'); // Pass 'albums' as type
      });
  }
}

function jsonTableAlbum(type) {
  const existingTable = document.getElementById('dynamic-table');
  if (existingTable) {
    existingTable.remove();
  }
  
  const table = document.createElement('table');
  table.setAttribute('id', 'dynamic-table');
  table.setAttribute('class', 'table table-bordered');

  const thead = document.createElement('thead');
  const tr = document.createElement('tr');

  let tableheaders = [];
  if (type == 'photos') {
    tableheaders = ['albumId', 'id', 'title', 'url', 'thumbnailUrl']; // Strings in quotes
  } else if (type == 'albums') {
    tableheaders = ['userId', 'id', 'title']; // Strings in quotes
  }

  tableheaders.forEach(data => {
    const th = document.createElement('th');
    th.textContent = data;
    th.style.padding = '20px';
    th.style.textAlign='center';
    th.style.color= 'white';
    th.style.backgroundColor = '#333';
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);
  
  const tbody = document.createElement('tbody');
  
  if (type == 'photos') {
    jsonphotos.forEach(headers => {
      const ttr = document.createElement('tr');
      const photosFields = [headers.albumId, headers.id, headers.title, headers.url, headers.thumbnailUrl];
      photosFields.forEach(fields => {
        const td = document.createElement('td');
        td.textContent = fields;
        ttr.appendChild(td);
      });
      tbody.appendChild(ttr);
    });
    table.appendChild(tbody);
  } else if (type == 'albums') {
    albums.forEach(headers => {
      const ttr = document.createElement('tr');
      const albumsFields = [headers.userId, headers.id, headers.title];
      albumsFields.forEach(fields => {
        const td = document.createElement('td');
        td.textContent = fields;
        ttr.appendChild(td);
      });
      tbody.appendChild(ttr);
    });
    table.appendChild(tbody); // Correctly append tbody
  }

  document.body.appendChild(table);
}

btn1.addEventListener('click', handleJsonData);
btn2.addEventListener('click', handleJsonData);