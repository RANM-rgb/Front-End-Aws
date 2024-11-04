// Función para obtener todos los registros
function getAllRecords() {  
    fetch('//34.229.247.110/php-intro-connection/getRecords.php')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error('Error desde el servidor:', data.error);
            } else {
                populateTable(data);
            }
        })
        .catch(error => console.error('Error obteniendo los datos:', error));
}

// Función para obtener los registros por continente (detectado automáticamente)
function getRecordsByContinent() {
    fetch('//34.229.247.110/php-intro-connection/getRecordsByContinent.php')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error('Error desde el servidor:', data.error);
            } else if (data.length === 0) {
                alert("No se encontraron registros para el continente detectado.");
            } else {
                populateTable(data);
            }
        })
        .catch(error => console.error('Error obteniendo los datos:', error));
}

// Función para poblar la tabla con los datos recibidos
function populateTable(data) {
    const tableBody = document.querySelector('#recordsTable tbody');
    tableBody.innerHTML = ''; // Limpiar el contenido de la tabla antes de añadir nuevos datos

    data.forEach(record => {
        const row = document.createElement('tr');

        // Añadir cada celda con los datos del registro
        const codeCell = document.createElement('td');
        codeCell.textContent = record.Code;
        row.appendChild(codeCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = record.Name;
        row.appendChild(nameCell);

        const continentCell = document.createElement('td');
        continentCell.textContent = record.Continent;
        row.appendChild(continentCell);

        const regionCell = document.createElement('td');
        regionCell.textContent = record.Region;
        row.appendChild(regionCell);

        const surfaceAreaCell = document.createElement('td');
        surfaceAreaCell.textContent = record.SurfaceArea;
        row.appendChild(surfaceAreaCell);

        const populationCell = document.createElement('td');
        populationCell.textContent = record.Population;
        row.appendChild(populationCell);

        // Agregar la fila a la tabla
        tableBody.appendChild(row);
    });
}
