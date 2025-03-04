import { useRef } from "react";
import { socket } from "../../../socket";

function TextBox() {
    const inputElement = useRef<HTMLInputElement>(null);

    const sendMessage = () => {
        if (inputElement.current) {
            const msg = inputElement.current.value;
            if (!msg.length) return;
            socket.emit("message:send", msg);
        }
    };
    return (
        <div className="border-t px-6 py-3 flex items-center gap-4 h-16">
            <input
                ref={inputElement}
                type="text"
                placeholder="Aa"
                className="border rounded-full grow px-4 py-2"
            ></input>
            <button onClick={sendMessage} className="p-2 text-sky-500 rounded-full hover:bg-sky-200">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                >
                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
            </button>
        </div>
    );
}

export default TextBox;
