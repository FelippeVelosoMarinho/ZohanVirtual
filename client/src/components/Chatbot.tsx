import { useState } from "react";
import { Send } from "lucide-react";

export default function Chatbot() {
    const [messages, setMessages] = useState([
        { text: "Olá! Como posso te ajudar?", sender: "bot" }
    ]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;

        const newMessage = { text: input, sender: "user" };
        setMessages([...messages, newMessage]);
        setInput("");

        // Simula resposta do bot após 1 segundo
        setTimeout(() => {
            setMessages(prev => [...prev, { text: "Resposta automática!", sender: "bot" }]);
        }, 1000);
    };

    return (
        <div className="flex flex-col w-full max-w-md mx-auto bg-gray-900 text-white p-4 rounded-xl shadow-lg">
            <div className="h-96 overflow-y-auto space-y-2 p-2">
                {messages.map((msg, index) => (
                    <div key={index} className={`p-2 rounded-lg max-w-xs ${msg.sender === "user" ? "bg-blue-500 self-end ml-auto" : "bg-gray-700"}`}>
                        {msg.text}
                    </div>
                ))}
            </div>

            <div className="flex items-center mt-4">
                <input
                    type="text"
                    className="flex-1 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white"
                    placeholder="Digite sua mensagem..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />

                <button
                    onClick={sendMessage}
                    className="ml-2 p-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
                    style={{ cursor: "pointer" }}
                >
                    <Send size={20} />
                </button>
            </div>
        </div>
    );
}
