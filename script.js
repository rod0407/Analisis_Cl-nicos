function evaluar() {
    // Validar si se ingresó el nombre del paciente
    const paciente = document.getElementById("paciente").value.trim();
    if (paciente === "") {
      alert("Por favor, ingresa los datos del paciente.");
      return; // Salir de la función si el campo está vacío
    }
  
    // Obtener los demás valores del formulario
    const densidad = parseFloat(document.getElementById("densidad").value);
    const ph = parseFloat(document.getElementById("ph").value);
    const proteinas = parseFloat(document.getElementById("proteinas").value);
    const glucosa = parseFloat(document.getElementById("glucosa").value);
    const cuerpos = parseFloat(document.getElementById("cuerpos").value);
    const urobilinogeno = parseFloat(document.getElementById("urobilinogeno").value);
    const bilirrubina = parseFloat(document.getElementById("bilirrubina").value);
    const nitritos = document.getElementById("nitritos").value.toUpperCase();
    const leucocitos = parseFloat(document.getElementById("leucocitos").value);
    const sangre = document.getElementById("sangre").value.toUpperCase();
  
    // Validaciones de los demás campos
    let mensajes = [];
  
    if (densidad < 1.016 || densidad > 1.022) mensajes.push("Densidad específica fuera de rango.");
    if (ph < 4.8 || ph > 7.4) mensajes.push("pH urinario fuera de rango.");
    if (proteinas > 6) mensajes.push("Proteínas altas.");
    if (glucosa > 180) mensajes.push("Posible diabetes.");
    if (cuerpos > 5) mensajes.push("Posible cetosis.");
    if (urobilinogeno > 1) mensajes.push("Posible daño hepático.");
    if (bilirrubina > 0.2) mensajes.push("Posible problema hepático.");
    if (nitritos === "POSITIVO") mensajes.push("Posible infección urinaria.");
    if (leucocitos > 10) mensajes.push("Posible infección (leucocitos elevados).");
    if (sangre === "POSITIVO") mensajes.push("Posible hematuria.");
  
    // Mostrar resultado
    const resultadoDiv = document.getElementById("resultado");
    if (mensajes.length > 0) {
      resultadoDiv.innerHTML = `
        <strong>El paciente ${paciente.toUpperCase()} debe asistir a consulta médica.</strong>
        <ul>${mensajes.map(msg => `<li>${msg}</li>`).join("")}</ul>
      `;
      resultadoDiv.style.backgroundColor = "#f8d7da";
      resultadoDiv.style.color = "#842029";
    } else {
      resultadoDiv.innerHTML = `<strong>El paciente ${paciente.toUpperCase()} no requiere consulta médica.</strong>`;
      resultadoDiv.style.backgroundColor = "#d4edda";
      resultadoDiv.style.color = "#155724";
    }
  }
  
  function limpiar() {
    // Limpia todos los campos
    document.getElementById("paciente").value = "";
    document.getElementById("densidad").value = "";
    document.getElementById("ph").value = "";
    document.getElementById("proteinas").value = "";
    document.getElementById("glucosa").value = "";
    document.getElementById("cuerpos").value = "";
    document.getElementById("urobilinogeno").value = "";
    document.getElementById("bilirrubina").value = "";
    document.getElementById("nitritos").value = "";
    document.getElementById("leucocitos").value = "";
    document.getElementById("sangre").value = "";
  
    // Limpia el resultado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";
    resultadoDiv.style.backgroundColor = "transparent";
    resultadoDiv.style.color = "inherit";
  }
  
