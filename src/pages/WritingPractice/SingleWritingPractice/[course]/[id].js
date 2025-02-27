import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../../styles/WritingP.module.css';
import { cards } from '../../../../Data/Routes/WritingPractice';
import { IoSend } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addFinishedQuiz, updateCompletedQuizzes } from "@/Store";
import { useRouter } from 'next/router';
import Image from 'next/image';

// Import virtual keyboard and its CSS
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { addSingleFinishedQuizToServer } from '../../../../helperfunction/Finishedquiz';

const ChatGPTComponent = () => {
  // States & Refs
  const [isClient, setIsClient] = useState(false);
  const [lesson, setLesson] = useState(null);
  const router = useRouter();
  const { course, id } = router.query;
  const [selectedTopic, setSelectedTopic] = useState('French');
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatMessagesRef = useRef(null);
  const [languageimage, setLanguageimage] = useState("/chatbot/ff.jpg");

  // Virtual keyboard states & ref
  const [keyboardVisible, setKeyboardVisible] = useState(true);
  const [capsLock, setCapsLock] = useState(false);
  const keyboardRef = useRef(null);

        const handleAddQuiz = async ({ questionType, quizId, subject }) => {
          // Update Redux state and localStorage
          dispatch(addFinishedQuiz({questionType, exercise:quizId, language:subject}));
          dispatch(updateCompletedQuizzes({ exercise: quizId, language: subject, questionTypes: questionType }));
      
          // Send the new finished quiz to the backend as a single object
          try {
            const result = await addSingleFinishedQuizToServer({
              userId: user.userId,
              questionType,
              exercise: quizId,
              language: subject,
            });
            console.log("Finished quiz updated on server:", result);
          } catch (error) {
            console.error("Error updating finished quiz on server:", error);
          }
        };

  // Language-specific keyboard layouts
  const languageLayouts = {
    English: {
      default: [
        "q w e r t y u i o p",
        "a s d f g h j k l ; '",
        "z x c v b n m , . /",
        "{space} {caps} {bksp} {enter}"
      ],
      shift: [
        "Q W E R T Y U I O P",
        "A S D F G H J K L : \"",
        "Z X C V B N M < > ?",
        "{space} {caps} {bksp} {enter}"
      ]
    },
    French: {
      default: [
        "a z e r t y u i o p à ù",
        "q s d f g h j k l m é è",
        "w x c v b n , ; : ! ç",
        "{space} {caps} {bksp} {enter}"
      ],
      shift: [
        "A Z E R T Y U I O P À Ù",
        "Q S D F G H J K L M É È",
        "W X C V B N ? . / Ç",
        "{space} {caps} {bksp} {enter}"
      ]
    },
    Spanish: {
      default: [
        "q w e r t y u i o p á",
        "a s d f g h j k l ñ é",
        "z x c v b n m , . ;",
        "{space} {caps} {bksp} {enter}"
      ],
      shift: [
        "Q W E R T Y U I O P Á",
        "A S D F G H J K L Ñ É",
        "Z X C V B N M < > :",
        "{space} {caps} {bksp} {enter}"
      ]
    },
    German: {
      default: [
        "q w e r t z u i o p ü",
        "a s d f g h j k l ö ä",
        "y x c v b n m , . -",
        "{space} {caps} {bksp} {enter}"
      ],
      shift: [
        "Q W E R T Z U I O P Ü",
        "A S D F G H J K L Ö Ä",
        "Y X C V B N M ; : _",
        "{space} {caps} {bksp} {enter}"
      ]
    },
    Italian: {
      default: [
        "q w e r t y u i o p ò",
        "a s d f g h j k l è à",
        "z x c v b n m , . ;",
        "{space} {caps} {bksp} {enter}"
      ],
      shift: [
        "Q W E R T Y U I O P Ò",
        "A S D F G H J K L È À",
        "Z X C V B N M < > :",
        "{space} {caps} {bksp} {enter}"
      ]
    },
    Russian: {
      default: [
        "й ц у к е н г ш щ з х",
        "ф ы в а п р о л д ж э",
        "я ч с м и т ь б ю .",
        "{space} {caps} {bksp} {enter}"
      ],
      shift: [
        "Й Ц У К Е Н Г Ш Щ З Х",
        "Ф Ы В А П Р О Л Д Ж Э",
        "Я Ч С М И Т Ь Б Ю ,",
        "{space} {caps} {bksp} {enter}"
      ]
    },
    Danish: {
      default: [
        "q w e r t y u i o p å",
        "a s d f g h j k l æ ø",
        "z x c v b n m , . -",
        "{space} {caps} {bksp} {enter}"
      ],
      shift: [
        "Q W E R T Y U I O P Å",
        "A S D F G H J K L Æ Ø",
        "Z X C V B N M ; : _",
        "{space} {caps} {bksp} {enter}"
      ]
    },
    Dutch: {
      default: [
        "q w e r t y u i o p",
        "a s d f g h j k l ;",
        "z x c v b n m , . -",
        "{space} {caps} {bksp} {enter}"
      ],
      shift: [
        "Q W E R T Y U I O P",
        "A S D F G H J K L :",
        "Z X C V B N M < > _",
        "{space} {caps} {bksp} {enter}"
      ]
    },
    Japanese: {
      default: [
        "あ い う え お か き く け こ",
        "さ し す せ そ た ち つ て と",
        "な に ぬ ね の ま み む め も",
        "{space} {caps} {bksp} {enter}"
      ],
      shift: [
        "ア イ ウ エ オ カ キ ク ケ コ",
        "サ シ ス セ ソ タ チ ツ テ ト",
        "ナ ニ ヌ ネ ノ マ ミ ム メ モ",
        "{space} {caps} {bksp} {enter}"
      ]
    },
    Korean: {
      default: [
        "ㅂ ㅈ ㄷ ㄱ ㅅ ㅛ ㅕ ㅑ ㅐ ㅔ",
        "ㅁ ㄴ ㅇ ㄹ ㅎ ㅗ ㅓ ㅏ ㅣ",
        "ㅋ ㅌ ㅊ ㅍ ㅠ ㅜ ㅡ",
        "{space} {caps} {bksp} {enter}"
      ],
      shift: [
        "ㅃ ㅉ ㄸ ㄲ ㅆ ㅛ ㅕ ㅑ ㅒ ㅖ",
        "ㅁ ㄴ ㅇ ㄹ ㅎ ㅗ ㅓ ㅏ ㅣ",
        "ㅋ ㅌ ㅊ ㅍ ㅠ ㅜ ㅡ",
        "{space} {caps} {bksp} {enter}"
      ]
    }
  };

  // Choose layout based on selected topic (default to French)
  const layout = languageLayouts[selectedTopic] || languageLayouts.French;

  // Toggle Caps Lock
  const toggleCapsLock = () => {
    setCapsLock((prev) => !prev);
  };

  // Use physical keyboard (textarea) to update shared input state
  const handlePhysicalInputChange = (e) => {
    setInput(e.target.value);
  };

  // Use onKeyPress (virtual keyboard) to append keys to the shared input state
  const handleVirtualKeyPress = (button) => {
    if (button === '{enter}') {
      handleSubmit();
    } else if (button === '{bksp}') {
      setInput(prev => prev.slice(0, -1));
    } else if (button === '{caps}') {
      toggleCapsLock();
    } else if (button === '{space}') {
      setInput(prev => prev + ' ');
    } else {
      // Append the key pressed
      setInput(prev => prev + button);
    }
  };

  // Keep the virtual keyboard in sync with the shared input state
  useEffect(() => {
    if (keyboardRef.current && input !== keyboardRef.current.getInput()) {
      keyboardRef.current.setInput(input);
    }
  }, [input]);

  // Existing lesson & language selection logic
  useEffect(() => {
    if (!router.isReady) return;
    if (course.slice(0, 3).toLowerCase() === 'fre') { 
      setLanguageimage("/chatbot/ff.jpg");
      setSelectedTopic('French');
    } else if (course.slice(0, 3).toLowerCase() === 'ger') {
      setLanguageimage('/chatbot/gf.jpg');
      setSelectedTopic('German');
    } else if (course.slice(0, 3).toLowerCase() === 'spa') {
      setLanguageimage('/chatbot/sf.jpg');
      setSelectedTopic('Spanish');
    }
  }, [course]);

  const somedata = cards.find((data) => data.link2 === course);

  useEffect(() => {
    setIsClient(true);
    if (somedata) {
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

  if (!isClient || !somedata) return <div>Loading...</div>;
  if (!lesson) return <div>Loading...</div>;

  // Existing topic selection & message submission logic
  const Languages = [
    { languagecourse: 'French' },
    { languagecourse: 'Spanish' },
    { languagecourse: 'German' },
  ];

  const handleTopicSelect = (topic, sent) => {
    setSelectedTopic(topic);
    setMessages([{ role: 'assistant', content: sent }]);
  };

  const handleSubmit = async () => {
    if (!lesson[id - 1].firstsent[(Math.floor(messages.length / 3)) + 1]) {
      handleAddQuiz({questionType: "MCQs", quizId: id, subject: somedata.subject})
    }
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: `You are a ${selectedTopic} instructor helping a native English speaker improve their ${selectedTopic} skills. Provide feedback on grammar and vocabulary for: ${lesson[id - 1].firstsent[Math.floor(messages.length / 2)]}.`,
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
      setMessages((prev) => [
        ...prev,
        botMessage,
        { role: 'assistant', content: lesson[id - 1].firstsent[(Math.floor(messages.length / 3)) + 1] }
      ]);
    } catch (error) {
      console.error('Error fetching response:', error);
      const errorMessage = { role: 'assistant', content: 'Sorry, something went wrong. Please try again later.' };
      setMessages((prev) => [...prev, errorMessage]);
    }
    setLoading(false);
    setInput('');
    if (keyboardRef.current) {
      keyboardRef.current.clearInput();
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        {/* Chat Area */}
        <div className={styles.chatarea}>
          <div className={styles.chatmessages} ref={chatMessagesRef}>
            <div className={`${styles.chatmessage} ${styles.assistant}`}>
              <div className={`${styles.chatbubble} ${styles.assistant}`}>
                <div>
                  <Image className={styles.avatar} width={400} height={400} src={"/chatbot/bot1.png"} alt="bot avatar" />
                </div>
                <div className={styles.textcontent}>{lesson[id - 1].firstsent[0]}</div>
                <div className={styles.copy}>
                  <MdContentCopy />
                </div>
              </div>
            </div>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${styles.chatmessage} ${message.role === 'user' ? styles.user : styles.assistant}`}
              >
                {message.content && (
                  <div className={`${styles.chatbubble} ${message.role === 'user' ? styles.user : styles.assistant}`}>
                    <div>
                      <Image className={styles.avatar} width={400} height={400} src={message.role === 'user' ? languageimage : "/chatbot/bot1.png"} alt="avatar" />
                    </div>
                    <div className={styles.textcontent}>{message.content}</div>
                    <div className={styles.copy} onClick={() => {
                      navigator.clipboard.writeText(message.content)
                        .then(() => alert("Message copied to clipboard!"))
                        .catch(err => console.error("Failed to copy text: ", err));
                    }}>
                      <MdContentCopy />
                    </div>
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className={`${styles.chatmessage} ${styles.assistant}`}>
                <div className={`${styles.chatbubble} ${styles.assistant}`}>
                  Chatbot is typing...
                </div>
              </div>
            )}
          </div>

          {/* Input Area (Physical Keyboard) */}
          <div className={styles.inputarea}>
            <textarea
              value={input}
              onChange={handlePhysicalInputChange}
              onFocus={() => setKeyboardVisible(true)}
              className={styles.inputtextarea}
              rows={2}
              placeholder={!lesson[id - 1].firstsent[Math.floor(messages.length / 3)]
                ? 'Exercise is completed'
                : ''}
              disabled={!lesson[id - 1].firstsent[Math.floor(messages.length / 3)]}
            ></textarea>
            <button onClick={handleSubmit} className={styles.inputbutton} disabled={loading}>
              {loading ? '...' : <IoSend />}
            </button>
          </div>
                  {/* Virtual Keyboard Area (Positioned below the textarea) */}
        {keyboardVisible && (
          <div className={styles.keyboardContainer}>
            <Keyboard
              ref={keyboardRef}
              onKeyPress={handleVirtualKeyPress}
              layout={layout}
              layoutName={capsLock ? 'shift' : 'default'}
              display={{
                '{bksp}': '←',
                '{enter}': '↵',
                '{space}': 'Space',
                '{caps}': 'Caps',
              }}
              theme="hg-theme-default"
              input={input}
            />
          </div>
        )}
      </div>
        </div>
    </div>
  );
};

export default ChatGPTComponent;
