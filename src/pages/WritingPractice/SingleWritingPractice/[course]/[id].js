import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../../styles/WritingP.module.css';
import { cards } from '../../../../Data/Routes/WritingPractice'
import { IoSend } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
// import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';
// import { FaLock, FaCaretDown } from 'react-icons/fa';

const ChatGPTComponent = () => {
  // const { user } = useSelector((state) => state.auth);
  const [isClient, setIsClient] = useState(false);
  const [lesson, setLesson] = useState(null);
  const router = useRouter();
  const { course, id } = router.query;
  const [selectedTopic, setSelectedTopic] = useState('French');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false); // Add a loading state
  const [show, setShow] = useState(false)
  const chatMessagesRef = useRef(null);
  const [languageimage, setLanguageimage] = useState("/chatbot/ff.jpg")

  useEffect(()=>{
    if (!router.isReady) return;

    if(course.slice(0,3).toLowerCase() === 'fre') 
      {setLanguageimage("/chatbot/ff.jpg")
        setSelectedTopic('French')
      }
      else if(course.slice(0,3).toLowerCase() === 'ger') 
        {
          setLanguageimage('/chatbot/gf.jpg')
          setSelectedTopic('German')
        }
        else if(course.slice(0,3).toLowerCase() === 'spa') 
          {setLanguageimage('/chatbot/sf.jpg')
            setSelectedTopic('Spanish')
          }
  })

   // Find lesson metadata based on `id`
        const somedata = cards.find((data) => data.link2 === course);
  
      useEffect(() => {
          // Ensure client-side rendering
          setIsClient(true);
      
          if (somedata) {
            // Dynamically import lesson data
            import(`../../../../Data/WritingPractice/${somedata.data}`)
              .then((module) => {
                setLesson(module.data);
              })
              .catch((error) => {
                console.error('Error loading lesson data:', error);
              });

              if (chatMessagesRef.current) {
                chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
              }
          }
        }, [somedata, messages]);
      
        if (!isClient || !somedata) {
          return <div>Loading...</div>;
        }
      
      
        if (!lesson) {
          return <div>Loading...</div>;
        }

  const Languages = [
    {
      languagecourse: 'French',
    },
    {
      languagecourse: 'Spanish',
    },
    {
      languagecourse: 'German',
    },
  ];

  let selecteddata = Languages.filter(data=> data.languagecourse === selectedTopic)

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
              content: `You are a ${selectedTopic} instructor who helps a native English Speaking student getting better in ${selectedTopic} language. Please give your feedback on the inputs (in English Language only) for grammar and vocabulary for the question ${lesson[id-1].firstsent[Math.floor(messages.length / 2 )]}. If the answer is not relevant for the question. Please tell the user to give a ${selectedTopic} answer relevant to the question aaked.`,
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
      setMessages((prev) => [...prev, botMessage,{
        role: 'assistant',
        content: lesson[id-1].firstsent[Math.floor(messages.length / 2 + 1)]
      }]);
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

  console.log(`${languageimage}`)

  return (
    <div className={styles.background}>
    <div className={styles.container}>

      {/* Chat Area */}
      <div className={styles.chatarea}>
        <div className={styles.chatmessages} ref={chatMessagesRef}>
        <div className={`${styles.chatmessage} ${styles.assistant}`}>
      <div className={`${styles.chatbubble} ${styles.assistant}`}
      >
        <div><Image className={styles.avatar} width={400} height={400} src={"/chatbot/bot1.png"} alt="image"/></div>
        <div className={styles.textcontent}>{lesson[id-1].firstsent[0]}</div>
        <div className={styles.copy}><MdContentCopy /></div>
       </div>
      </div>
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
              > <div><Image className={styles.avatar} width={400} height={400} src={message.role === 'user' ? `${languageimage}` : "/chatbot/bot1.png"} alt="image"/></div>
                <div className={styles.textcontent}
                >{message.content}</div>
                <div className={styles.copy}
                 onClick={() => {
                  navigator.clipboard.writeText(message.content).then(() => {
                    alert("Message copied to clipboard!");
                  }).catch(err => {
                    console.error("Failed to copy text: ", err);
                  });
                }}
                ><MdContentCopy /></div> 
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
            {loading ? '...' : <IoSend /> }
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ChatGPTComponent;
