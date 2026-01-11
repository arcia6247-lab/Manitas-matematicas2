// App.js
import React, { useState } from "react";
import "./App.css";

// 🔹 Logo y video
import logo from "./assets/logo.png";
import videoEncabezado from "./assetsVideo/video_numeros.mp4";

// 🔹 Imágenes del manual
import funcionamiento from "./assets/funcionamiento.png";
import suma from "./assets/suma.png";
import resta from "./assets/resta.png";
import multiplicacion from "./assets/multiplicacion.png";
import division from "./assets/division.png";

function App() {
  // 🔹 Definimos los ejercicios con la pregunta y la respuesta correcta
  const ejercicios = [
    { pregunta: "1 + 1", respuesta: 2 },
    { pregunta: "5 - 1", respuesta: 4 },
    { pregunta: "2 × 3", respuesta: 6 },
    { pregunta: "2 ÷ 2", respuesta: 1 },
    { pregunta: "4 + 3", respuesta: 7 },
    { pregunta: "5 - 5", respuesta: 0 },
    { pregunta: "3 ÷ 1", respuesta: 3 },
    { pregunta: "4 × 2", respuesta: 8 },
    { pregunta: "3 - 3", respuesta: 0 },
    { pregunta: "1 + 5", respuesta: 6 },
  ];

  // 🔹 Estado para guardar las respuestas ingresadas por el usuario
  const [respuestas, setRespuestas] = useState(
    Array(ejercicios.length).fill("")
  );

  // 🔹 Función para actualizar el valor del input correspondiente
  const manejarCambio = (indice, valor) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[indice] = valor;
    setRespuestas(nuevasRespuestas);
  };

  // 🔹 Función para verificar si la respuesta es correcta
  const verificarRespuesta = (indice) => {
    if (parseInt(respuestas[indice], 10) === ejercicios[indice].respuesta) {
      alert("✅ Correcto!");
    } else {
      alert(
        `❌ Incorrecto! La respuesta correcta es ${ejercicios[indice].respuesta}`
      );
    }
  };

  return (
    <div className="contenedor-app">
      {/* 🔹 Encabezado con video de fondo */}
      <header className="encabezado">
        <video
          className="video-encabezado"
          src={videoEncabezado}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="contenido-encabezado">
          <img src={logo} alt="Logo Manitas Matemáticas" className="logo" />
          <h1>Manitas Matemáticas ✋🧮</h1>
          <p>Aprende jugando con nuestras actividades divertidas</p>
        </div>
      </header>

      {/* 🔹 Sección: Quiénes somos */}
      <section className="seccion quienes-somos">
        <h2>¿Quiénes Somos?</h2>
        <p>
          Somos un equipo comprometido con la educación infantil. Nuestro
          objetivo es enseñar matemáticas a niños de 5 a 9 años mediante juegos
          y retos interactivos que desarrollan el pensamiento lógico y la
          creatividad.
        </p>
      </section>

      {/* 🔹 Sección: Cómo funciona + Manual de usuario */}
      <section className="seccion como-funciona">
        <h2>¿Cómo Funciona?</h2>
        <p>
          Nuestro sistema detecta los movimientos de las manos de los niños para
          resolver operaciones matemáticas. ¡Solo tienen que usar sus dedos para
          sumar, restar, multiplicar o dividir!
        </p>

        <div className="contenedor-imagen">
          <img
            src={funcionamiento}
            alt="Ejemplo del funcionamiento del sistema"
            className="imagen-funciona"
          />
          <p className="pie-imagen">
             ✋🤖
          </p>
        </div>

        <div className="manual-usuario">
          <h3>📘 Manual de Usuario</h3>

          <div className="apartado-manual">
            <h4>➕ Suma</h4>
            <p>
              1️⃣ Coloca tu mano frente a la cámara.<br />
              2️⃣ Selecciona el botón <b>Suma</b> o presiona la tecla <b>S</b>.<br />
              3️⃣ <b>Pulsa dos veces la barra espaciadora</b> para ver el resultado.
            </p>
            <img src={suma} alt="Ejemplo de suma" className="imagen-operacion" />
          </div>

          <div className="apartado-manual">
            <h4>➖ Resta</h4>
             <p>
              1️⃣ Coloca tu mano frente a la cámara.<br />
              2️⃣ Selecciona el botón <b>Resta</b> o presiona la tecla <b>R</b>.<br />
              3️⃣ <b>Pulsa dos veces la barra espaciadora</b> para ver el resultado.
            </p>
            <img src={resta} alt="Ejemplo de resta" className="imagen-operacion" />
          </div>

          <div className="apartado-manual">
            <h4>✖️ Multiplicación</h4>
            <p>
              1️⃣ Coloca tu mano frente a la cámara.<br />
              2️⃣ Selecciona el botón <b>Multiplicación</b> o presiona la tecla <b>M</b>.<br />
              3️⃣ <b>Pulsa dos veces la barra espaciadora</b> para ver el resultado.
            </p>
            <img
              src={multiplicacion}
              alt="Ejemplo de multiplicación"
              className="imagen-operacion"
            />
          </div>

          <div className="apartado-manual">
            <h4>➗ División</h4>
            <p>
              1️⃣ Coloca tu mano frente a la cámara.<br />
              2️⃣ Selecciona el botón <b>Division</b> o presiona la tecla <b>D</b>.<br />
              3️⃣ <b>Pulsa dos veces la barra espaciadora</b> para ver el resultado.
            </p>
            <img
              src={division}
              alt="Ejemplo de división"
              className="imagen-operacion"
            />
          </div>
        </div>
      </section>

      {/* 🔹 Sección: Ejercicios interactivos */}
      <section className="seccion ejercicios">
        <h2>🧠 Ejercicios Básicos</h2>
        <div className="grid-ejercicios">
          {ejercicios.map((ex, indice) => (
            <div key={indice} className="item-ejercicio">
              <p>
                {indice + 1}️⃣ {ex.pregunta} = ?
              </p>
              <input
                type="number"
                value={respuestas[indice]}
                onChange={(e) => manejarCambio(indice, e.target.value)}
              />
              <button onClick={() => verificarRespuesta(indice)}>
                Verificar
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Sección: Contacto */}
      <section className="seccion contacto">
        <h2>📩 Contáctanos</h2>
        <p>
          Escríbenos a{" "}
          <a href="mailto:contacto@manitasmatematicas.com">
            contacto@manitasmatematicas.com
          </a>
        </p>
      </section>

      <footer className="pie-pagina">
        <p>© 2025 Manitas Matemáticas | Hecho con 💙 para aprender jugando</p>
      </footer>
    </div>
  );
}

export default App;
