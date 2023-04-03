'use client'
import { useState } from 'react'
import styles from "@/styles/layout/ChatButton.module.scss"

enum Creator {
    Me = 0,
    Bot = 1
}

interface MessageProps {
    text: string
    from: Creator
    key: number
}

interface InputProps {
    onSend: (input: string) => void
    disabled: boolean
}

const ChatMessage = ({ text, from }: MessageProps) => {
    return (
        <>
            {from === Creator.Me && (
                <div className={styles.locutor} >
                    <p>You : </p>
                    <p>{text}</p>
                </div>
            )}
            {from === Creator.Bot && (
                <div className={styles.bot} >
                    <p>GPT : </p>
                    <p>{text}</p>
                </div>
            )}
        </>
    )}

const ChatInput = ({ onSend, disabled }: InputProps) => {
    const [input, setInput] = useState('')

    const sendInput = () => {
        onSend(input)
        setInput('')
    }
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            sendInput()
        }
    }

    return <div className={styles.chatInput}>
        <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text" 
            placeholder="How can we help you"
            disabled={disabled}
            onKeyDown={(e) => handleKeyDown(e)}
        />
        {disabled && (
            <span>...</span>
        )}
        {!disabled && (
            <button 
                onClick={sendInput} 
                type="button"
            >
                Send
            </button>
        )}
    </div>
}

export default function ChatButton() {

    const [messages, setMessages] = useState<MessageProps[]>([])
    const [loading, setLoading] = useState(false)

    const callApi = async (input: string) => {
        setLoading(true)

        const myMesssage: MessageProps = {
            text: input,
            from: Creator.Me,
            key: new Date().getTime()
        }

        setMessages([...messages, myMesssage])
        const response = await fetch('/api/generate-answer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: input })
        }).then(res => res.json())
        setLoading(false)

        if (response.text) {
            const botMessage: MessageProps = {
                text: response.text,
                from: Creator.Bot,
                key: new Date().getTime()
            }
            setMessages([...messages, botMessage])
        } else {
            'Woops, something went wrong, please try again later'
        }
    }

    return <aside className={styles.chatBox}>
        <div className={styles.inputContainer}>
            <ChatInput onSend={callApi} disabled={loading} />
        </div>
        <div className={styles.chatContainer}>
            {messages.map((message: MessageProps) => {
                return <ChatMessage key={message.key} text={message.text} from={message.from} />
            })}
        </div>
    </aside>
}