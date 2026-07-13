#  Laboratorio Clínico CHEMXPERT - Evaluación de Examen de Orina

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

Una aplicación web interactiva diseñada para realizar una evaluación preliminar rápida de los resultados de un examen de orina. 

🔗 **[Ver el proyecto en vivo aquí](https://myproject-analisis-clinicos.netlify.app/)**

##  Contexto Académico
Esta aplicación web fue desarrollada como una herramienta de apoyo tecnológico para un proyecto escolar perteneciente al **Laboratorio de Bioquímica Clínica** en la **Facultad de Química de la Universidad Nacional Autónoma de México (UNAM)**. Su objetivo es agilizar la interpretación de los datos obtenidos en las prácticas de laboratorio.

##  Características Principales

- **Interfaz de Usuario Intuitiva:** Diseño limpio y responsivo, estilizado con CSS moderno y un fondo con gradiente.
- **Validación de Datos Clínicos:** El sistema evalúa 10 parámetros clave de un análisis de orina.
- **Diagnóstico Preliminar Inmediato:** Muestra alertas específicas dependiendo de la anomalía detectada (ej. posible infección, riesgo de diabetes, daño hepático, etc.).
- **Feedback Visual:** El contenedor de resultados cambia de color dinámicamente (verde para resultados normales, rojo para alertas médicas).

##  Parámetros Evaluados y Rangos Normales

La lógica de la aplicación (`script.js`) analiza los siguientes indicadores:

| Parámetro | Rango Normal / Esperado | Posible Indicador si está fuera de rango |
| :--- | :--- | :--- |
| **Densidad específica** | 1.016 - 1.022 | Problemas de hidratación o renales |
| **pH urinario** | 4.8 - 7.4 | Desequilibrio ácido-base |
| **Proteínas** | $\le$ 6 mg/dL | Daño renal (Proteinuria) |
| **Glucosa** | $\le$ 180 mg/dL | Posible diabetes |
| **Cuerpos cetónicos** | $\le$ 5 mg/dL | Posible cetosis |
| **Urobilinógeno** | $\le$ 1 mg/dL | Posible daño hepático |
| **Bilirrubina** | $\le$ 0.2 mg/dL | Posible problema hepático |
| **Nitritos** | NEGATIVO | Posible infección urinaria bacteriana |
| **Leucocitos** | $\le$ 10 | Posible infección (leucocitos elevados) |
| **Sangre** | NEGATIVO | Posible hematuria |

##  Tecnologías Utilizadas

- **HTML5:** Estructura semántica del formulario.
- **CSS3:** Estilos personalizados, Flexbox para el diseño, transiciones y variables de color.
- **JavaScript (Vanilla):** Manipulación del DOM, captura de eventos del formulario y lógica condicional matemática para la evaluación médica.
- **Netlify:** Plataforma de alojamiento y despliegue continuo.

##  Instalación y Uso Local

Si deseas correr este proyecto en tu entorno local:

1. Clona este repositorio:
   ```bash
   git clone [https://github.com/TU_USUARIO/TU_REPOSITORIO.git](https://github.com/TU_USUARIO/TU_REPOSITORIO.git)
