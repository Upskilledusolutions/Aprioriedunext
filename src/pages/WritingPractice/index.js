import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/WritingP.module.css';
import { useSelector } from 'react-redux';
import { FaLock, FaCaretDown } from 'react-icons/fa';

const ChatGPTComponent = () => {
  const { user } = useSelector((state) => state.auth);
  const [selectedTopic, setSelectedTopic] = useState('French');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Bonjour, je m'appelle Chatbot, et vous ?" },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false); // Add a loading state
  const [show, setShow] = useState(false)
  const chatMessagesRef = useRef(null);

  const Languages = [
    {
      languagecourse: 'French',
      firstsent: "Bonjour, je m'appelle Chatbot, et vous ?",
    },
    {
      languagecourse: 'Spanish',
      firstsent: 'Hola, mi nombre es Chatbot y tú?',
    },
    {
      languagecourse: 'German',
      firstsent: 'Hallo, mein Name ist Chatbot und du?',
    },
  ];

  useEffect(() => {
    // Scroll to the bottom when new messages are added
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]); // Assuming 'messages' is the state holding your chat messages

  const handleTopicSelect = (topic, sent) => {
    setSelectedTopic(topic);
    setMessages([{ role: 'assistant', content: sent }]);
    setShow(!show)
  };

  const handleSubmit = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true); // Show "Chatbot is typing..." indicator

    try {
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: `You are a ${selectedTopic} instructor who helps a native English Speaking student getting better in ${selectedTopic} language. Please give your feedback on the inputs (in English Language) for grammar and vocabulary and then continue the conversation by giving a response from the next line.`,
            },
            ...messages,
            userMessage,
          ],
        }),
      });

      const data = await response.json();
      const botMessage = {
        role: 'assistant',
        content: data.choices[0].message.content,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
      const errorMessage = {
        role: 'assistant',
        content: 'Sorry, something went wrong. Please try again later.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setLoading(false); // Hide the indicator
    setInput('');
  };

  console.log(user?.type.includes(selectedTopic.toLowerCase()) || user?.type === 'all')

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <h1>Languages</h1>
        <ul>
          {Languages.map((topic, index) => (
          user?.type.includes(topic.languagecourse.toLowerCase()) | user?.type === 'all' ?
            <li
              key={index}
              onClick={() => handleTopicSelect(topic.languagecourse, topic.firstsent)}
              className={topic.languagecourse === selectedTopic | user?.type === 'all' ? `${styles.selected}` : ''}
            >
              {topic.languagecourse}
            </li> :
            <li
            key={index}
            className={styles.locked}
            >
              <div className={styles.flex}>{topic.languagecourse}<FaLock /></div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.dropdown}>
          <div className={styles.selected} onClick={() => setShow(!show)}>{selectedTopic} <FaCaretDown/></div>
          {show && <ul>
          {Languages.map((topic, index) => (
          user?.type.includes(topic.languagecourse.toLowerCase()) || user?.type === 'all' ?
            <li
              key={index}
              onClick={() => handleTopicSelect(topic.languagecourse, topic.firstsent)}
              className={topic.languagecourse === selectedTopic || user?.type === 'all' ? `${styles.selected}` : ''}
            >
              {topic.languagecourse}
            </li> :
            <li
            key={index}
            className={styles.locked}
            >
              <div className={styles.flex}>{topic.languagecourse}<FaLock /></div>
            </li>
          ))}
        </ul>}
      </div>

      {/* Chat Area */}
      <div className={styles.chatarea}>
        <div className={styles.chatmessages} ref={chatMessagesRef}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${styles.chatmessage} ${
                message.role === 'user' ? styles.user : styles.assistant
              }`}
            >
              <div
                className={`${styles.chatbubble} ${
                  message.role === 'user' ? styles.user : styles.assistant
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}

          {/* Loading Indicator */}
          {loading && (
            <div className={`${styles.chatmessage} ${styles.assistant}`}>
              <div className={`${styles.chatbubble} ${styles.assistant}`}>
                Chatbot is typing...
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className={styles.inputarea}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles.inputtextarea}
            rows={2}
          ></textarea>
          <button onClick={handleSubmit} className={styles.inputbutton} disabled={loading}>
            {loading ? 'Loading...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatGPTComponent;
