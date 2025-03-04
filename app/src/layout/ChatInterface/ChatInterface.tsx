import ChatHeader from "./ChatHeader/ChatHeader";
import ChatBox from "./ChatBox/ChatBox";
import TextBox from "./TextBox.tsx/TextBox";
import ChatSettings from "../ChatSettings/ChatSettings";
import { useState } from "react";
import { useLoaderData } from "react-router";
import { ChatHistory } from "../../models/chat-history";
import { ChatContact } from "../../models/chat-contact";

function ChatInterface() {
    const chatInfo = useLoaderData() as {
        contact: ChatContact;
        history: ChatHistory[];
    };

    const [isChatSettingsOpen, setIsChatSettingsOpen] = useState(false);

    const handleSettingsDisplay = (isOpen: boolean) => {
        setIsChatSettingsOpen(isOpen);
    };
    return (
        <div className="flex grow">
            <div className="h-screen grow">
                <ChatHeader forContact={chatInfo.contact} settings={handleSettingsDisplay} />
                <div
                    className="relative"
                    style={{ height: `calc( 100vh - 136px)` }}
                >
                    <ChatBox data={chatInfo.history} />
                </div>
                <TextBox />
            </div>
            <div>
                {isChatSettingsOpen && (
                    <ChatSettings name="John Smith" isActive={false} />
                )}
            </div>
        </div>
    );
}

export default ChatInterface;
