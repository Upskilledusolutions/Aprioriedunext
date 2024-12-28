// import React, { useState, useRef, useEffect } from 'react';
// import styles from '../../src/styles/quiz/quiz.module.css'; // Adjust the path as needed
// import Keyboard from 'react-simple-keyboard';
// import 'react-simple-keyboard/build/css/index.css';

// const FillInTheBlanksComponent = ({
//   subject,
//   question,
//   questionNumber,
//   onAnswerSelected,
//   isSubmitted,
//   onNext,
//   onResult,
// }) => {
//   const { question: sentence, choices, correctAnswer } = question;
//   const [userInput, setUserInput] = useState('');
//   const [keyboardVisible, setKeyboardVisible] = useState(false);

//   // Ref for the input field
//   const inputRef = useRef(null);

//   // Function to handle input changes
//   const handleChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   // Function to handle virtual keyboard input
//   const handleKeyboardInput = (input) => {
//     setUserInput(input);
//   };

//   // Function to handle form submission
//   const handleSubmit = () => {
//     const userAnswer = userInput.trim();
//     const correctAnswerText = choices[correctAnswer - 1];
//     const isCorrect =
//       userInput.trim().toLowerCase() === choices[correctAnswer - 1].toLowerCase();

//     // Send the user's input and the correct answer to the parent
//     const result = {
//       questionNumber,
//       userAnswer,
//       correctAnswer: correctAnswerText,
//     };

//     onAnswerSelected(userAnswer, correctAnswer);
//     onResult(isCorrect, result); // Send the full report for this question

//     setUserInput('');
//     setTimeout(() => {
//       onNext(); // Move to the next question after a short delay
//     }, 1000);
//   };

//   // Focus the input field when the component is rendered
//   useEffect(() => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, []);

//   // Render sentence with an input field
//   const renderSentence = sentence.split('______').map((part, index) => (
//     <React.Fragment key={index}>
//       {part}
//       {index < sentence.split('______').length - 1 && (
//         <input
//           type="text"
//           value={userInput}
//           onChange={handleChange}
//           className={styles.inputField}
//           disabled={isSubmitted}
//           ref={inputRef} // Attach ref to the input field
//           onFocus={() => setKeyboardVisible(true)} // Show keyboard on focus
//         />
//       )}
//     </React.Fragment>
//   ));

//   return (
//     <div>
//       <h2 className={styles.fillblanksentence}>{renderSentence}</h2>
//       <button
//         onClick={handleSubmit}
//         className={styles.submitButton1}
//         disabled={isSubmitted}
//       >
//         Submit
//       </button>

//       {keyboardVisible && (
//         <div className={styles.keyboardContainer}>
//           <Keyboard
//             onChange={handleKeyboardInput}
//             input={userInput}
//             onKeyPress={(button) => {
//               if (button === '{enter}') handleSubmit(); // Submit on Enter
//               if (button === '{bksp}') setUserInput(userInput.slice(0, -1)); // Backspace
//             }}
//             layout={{
//               default: [
//                 'a z e r t y u i o p à',
//                 'q s d f g h j k l m é',
//                 'w x c v b n , ; : ! è ç',
//                 '{space} {bksp} {enter}',
//               ],
//               shift: [
//                 'A Z E R T Y U I O P',
//                 'Q S D F G H J K L M',
//                 'W X C V B N , ; : !',
//                 '{space} {bksp} {enter}',
//               ],
//             }}
//             display={{
//               '{bksp}': '←',
//               '{enter}': '↵',
//               '{space}': 'Espace',
//             }}
//             theme="hg-theme-default"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default FillInTheBlanksComponent;


import React, { useState, useRef, useEffect } from 'react';
import styles from '../../src/styles/quiz/quiz.module.css'; // Adjust the path as needed
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

const FillInTheBlanksComponent = ({
  subject,
  question,
  questionNumber,
  onAnswerSelected,
  isSubmitted,
  onNext,
  onResult,
}) => {
  const { question: sentence, choices, correctAnswer } = question;
  const [userInput, setUserInput] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(true);
  const [capsLock, setCapsLock] = useState(false);
  const [lastlength, setLastlength] = useState(0)
  const inputRef = useRef(null);    // Ref for the input field
  const keyboardRef = useRef(null); // Reference to the keyboard

  useEffect(() => {
    setUserInput(''); // Reset input when the question changes
    if (inputRef.current) {
      inputRef.current.focus(); // Refocus on the input field
    }
    if (keyboardRef.current) {
      keyboardRef.current.setInput(''); // Clear keyboard's input
    }
  }, [question]);

  useEffect(() => {
    if (keyboardRef.current && userInput !== keyboardRef.current.getInput()) {
      keyboardRef.current.setInput(userInput); // Update keyboard's input manually
    }
  }, [userInput]);

  // Language-specific keyboard layouts
  const languageLayouts = {
    English: {
      default: [
        "a z e r t y u i o p",
        "q s d f g h j k l m",
        "w x c v b n , ; : !",
        "{space} {caps} {bksp} {enter}"
      ],
      shift: [
        "A Z E R T Y U I O P",
        "Q S D F G H J K L M",
        "W X C V B N ? . / ",
        "{space} {caps} {bksp} {enter}"
      ]
    },
    EnglishB1: {
      default: [
        "a z e r t y u i o p",
        "q s d f g h j k l m",
        "w x c v b n , ; : !",
        "{space} {caps} {bksp} {enter}"
      ],
      shift: [
        "A Z E R T Y U I O P",
        "Q S D F G H J K L M",
        "W X C V B N ? . /",
        "{space} {caps} {bksp} {enter}"
      ]
    },
    French: {
      default: [
        "a z e r t y u i o p à",
        "q s d f g h j k l m é è",
        "w x c v b n , ; : ! ç",
        "{space} {caps} {bksp} {enter}"
      ],
      shift: [
        "A Z E R T Y U I O P À",
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

  const toggleCapsLock = () => {
    setCapsLock((prev) => !prev);
  };

  const layout = languageLayouts[subject] || languageLayouts.French;
  const currentLayout = capsLock ? layout.shift : layout.default;

  // Function to handle input changes
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    const userAnswer = userInput.trim();
    const correctAnswerText = choices[correctAnswer - 1];
    const isCorrect =
      userInput.trim().toLowerCase() === choices[correctAnswer - 1].toLowerCase();

    // Send the user's input and the correct answer to the parent
    const result = {
      questionNumber,
      userAnswer,
      correctAnswer: correctAnswerText,
    };

    onAnswerSelected(userAnswer, correctAnswer);
    onResult(isCorrect, result); // Send the full report for this question
    // keyboardRef.current.clearInput()
    setUserInput('');
    if (keyboardRef.current) {
      keyboardRef.current.setInput(''); // Reset the keyboard input
    }

    setTimeout(() => {
      onNext();
    }, 500);
  };

    // Function to handle virtual keyboard input
  const handleKeyboardInput = (input) => {
  setLastlength(input.length)
  if(input.length > lastlength) setUserInput(userInput + input.slice(input.length-1));
  };
  
  // Render sentence with an input field
  const renderSentence = sentence.split('______').map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < sentence.split('______').length - 1 && (
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          className={styles.inputField}
          disabled={isSubmitted}
          ref={inputRef} // Attach ref to the input field
          onFocus={() => setKeyboardVisible(true)} // Show keyboard on focus
        />
      )}
    </React.Fragment>
  ));

  return (
    <div>
      <h2 className={styles.fillblanksentence}>{renderSentence}</h2>
      <button
        onClick={handleSubmit}
        className={styles.submitButton1}
        disabled={isSubmitted}
      >
        Submit
      </button>

      {keyboardVisible && (
  <div className={styles.keyboardContainer}>
    <Keyboard
      ref={keyboardRef} // Use the ref to clear input programmatically
      onChange={handleKeyboardInput}
      input={userInput}
      onKeyPress={(button) => {
        if (button === '{enter}') handleSubmit(); // Submit on Enter
        if (button === '{bksp}') setUserInput(userInput.slice(0, -1)); // Backspace
        if (button === '{caps}') toggleCapsLock(); // Toggle Caps Lock
      }}
      layout={{
        ...currentLayout,
        default: [...currentLayout],
        shift: [...currentLayout],
      }}
      display={{
        '{bksp}': '←',
        '{enter}': '↵',
        '{space}': 'Space',
        '{caps}': 'Caps',
      }}
      theme="hg-theme-default"
    />
  </div>
)}
    </div>
  );
};

export default FillInTheBlanksComponent;
