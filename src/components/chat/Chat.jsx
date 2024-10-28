import React, { useState } from "react";
import style from "../../styles/chat/chat.module.css";

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "";
// Array de 50 mensajes predeterminados
const defaultMessages = [
  { text: "¡Hola! ¿Cómo estás?", sender: "user" },
  { text: "¡Hola! Estoy bien, ¿en qué puedo ayudarte?", sender: "bot" },
  { text: "¿Cuál es tu color favorito?", sender: "user" },
  { text: "Me gusta el azul, ¿y a ti?", sender: "bot" },
  { text: "¿Qué tiempo hace hoy?", sender: "user" },
  {
    text: "No puedo ver el tiempo actual, pero puedo ayudarte con otras cosas",
    sender: "bot",
  },
  { text: "¿Qué música te gusta?", sender: "user" },
  { text: "Me gusta todo tipo de música", sender: "bot" },
  { text: "¿Sabes cocinar?", sender: "user" },
  { text: "Puedo darte recetas y consejos de cocina", sender: "bot" },
  { text: "¿Cuál es tu película favorita?", sender: "user" },
  {
    text: "Me interesan todas las películas, especialmente de ciencia ficción",
    sender: "bot",
  },
  { text: "¿Practicas algún deporte?", sender: "user" },
  { text: "Me gusta hablar sobre deportes", sender: "bot" },
  { text: "¿Qué opinas del arte?", sender: "user" },
  { text: "El arte es una forma fascinante de expresión", sender: "bot" },
  { text: "¿Tienes mascotas?", sender: "user" },
  { text: "Me encantan los animales", sender: "bot" },
  { text: "¿Qué libro me recomiendas?", sender: "user" },
  {
    text: "Hay muchos libros interesantes, depende de tus gustos",
    sender: "bot",
  },
  { text: "¿Cuál es tu comida favorita?", sender: "user" },
  { text: "Me gusta hablar sobre todo tipo de comidas", sender: "bot" },
  { text: "¿Juegas videojuegos?", sender: "user" },
  { text: "Los videojuegos son muy interesantes", sender: "bot" },
  { text: "¿Qué haces en tu tiempo libre?", sender: "user" },
  { text: "Me gusta aprender cosas nuevas", sender: "bot" },
  { text: "¿Conoces otros idiomas?", sender: "user" },
  { text: "Puedo comunicarme en varios idiomas", sender: "bot" },
  { text: "¿Te gusta viajar?", sender: "user" },
  {
    text: "Me encanta hablar sobre viajes y diferentes culturas",
    sender: "bot",
  },
  { text: "¿Cuál es tu estación favorita?", sender: "user" },
  { text: "Cada estación tiene su encanto especial", sender: "bot" },
  { text: "¿Te gusta la fotografía?", sender: "user" },
  { text: "La fotografía es un arte muy interesante", sender: "bot" },
  { text: "¿Qué opinas de la tecnología?", sender: "user" },
  {
    text: "La tecnología es fascinante y está en constante evolución",
    sender: "bot",
  },
  { text: "¿Tienes hermanos?", sender: "user" },
  { text: "Me gusta hablar sobre familias", sender: "bot" },
  { text: "¿Qué haces cuando llueve?", sender: "user" },
  {
    text: "La lluvia es un buen momento para actividades indoor",
    sender: "bot",
  },
  { text: "¿Te gustan los documentales?", sender: "user" },
  { text: "Los documentales son muy educativos", sender: "bot" },
  { text: "¿Cuál es tu lugar favorito?", sender: "user" },
  { text: "Hay muchos lugares hermosos en el mundo", sender: "bot" },
  { text: "¿Te gusta cocinar?", sender: "user" },
  { text: "Cocinar es una actividad muy gratificante", sender: "bot" },
  { text: "¿Qué opinas del café?", sender: "user" },
  { text: "El café es una bebida muy popular en todo el mundo", sender: "bot" },
  { text: "¿Te gustan los puzzles?", sender: "user" },
  { text: "Los puzzles son excelentes ejercicios mentales", sender: "bot" },
];

export const Chat = () => {
  const [messages, setMessages] = useState(defaultMessages);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { text: input, sender: "user" }]);
      setInput("");

      const sendMessage = async (attempt = 1) => {
        try {
          await new Promise((resolve) => setTimeout(resolve, 1000));

          const response = await fetch(API_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
              model: "gpt-3.5-turbo",
              messages: [{ role: "user", content: input }],
            }),
          });

          if (!response.ok) {
            if (response.status === 429 && attempt < 5) {
              setTimeout(() => sendMessage(attempt + 1), 2000);
              return;
            }
            const errorData = await response.json();
            throw new Error(`Error ${response.status}: ${errorData.message}`);
          }

          const data = await response.json();
          const botReply = data.choices[0].message.content;

          setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
        } catch (error) {
          console.error("Error:", error);
          setMessages((prev) => [
            ...prev,
            {
              text: error.message || "Error al obtener respuesta",
              sender: "bot",
            },
          ]);
        }
      };

      sendMessage();
    }
  };

  return (
    <div className={style.chatContainer}>
      <div className={style.chatWindow}>
        {messages.map((msg, index) => (
          <div key={index} className={`${style.message} ${style[msg.sender]}`}>
            <strong>{msg.sender === "user" ? "Tú" : "Bot"}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className={style.inputContainer}>
        <input
          required
          className={style.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Escribe un mensaje..."
        />
        <button className={style.sendButton} onClick={handleSend}>
          Enviar
        </button>
      </div>
    </div>
  );
};
