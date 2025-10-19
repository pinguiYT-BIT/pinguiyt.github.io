// Carga los links desde descargas.txt
fetch('descargas.txt')
  .then(response => response.text())
  .then(data => {
    const contenedor = document.getElementById('listaDescargas');
    contenedor.innerHTML = ''; // limpia el texto de "Cargando..."
    const lineas = data.trim().split('\n');
    lineas.forEach(linea => {
      const [url, descripcion] = linea.split('|');
      if (url && descripcion) {
        const enlace = document.createElement('a');
        enlace.href = url.trim();
        enlace.textContent = `📁 ${descripcion.trim()}`;
        enlace.target = '_blank';
        contenedor.appendChild(enlace);
      }
    });
  })
  .catch(err => {
    document.getElementById('listaDescargas').innerText = "No se pudieron cargar las descargas.";
    console.error(err);
  });
