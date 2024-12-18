import React, { useEffect, useState } from 'react';
import { data } from '../../../Data/Speechtracker/English';
import SpeechTracker from '../../../../components/QuestionContent/SpeechTracker';

export function getServerSideProps(context) {
  return {
    props: { params: context.params }
  };
}

export default function Index({ params }) {
  const { id } = params; // Get the 'id' from URL params
  const [isClient, setIsClient] = useState(false); // Client-side state to prevent hydration issues
  const [readingText, setReadingText] = useState(""); // State for storing readingText

  useEffect(() => {
    setIsClient(true); // Set isClient to true after component is mounted
  }, []);

  // Ensure you're passing the correct 'id' format (if it's a string or number, etc.)
  const pageData = data.filter((item) => item.id === id);

  useEffect(() => {
    if (pageData.length > 0) {
      // Set the readingText if pageData is found
      setReadingText(pageData[0].readingText);
    } else {
      console.error(`No data found for id: ${id}`);
    }
  }, [id, pageData]);

  // If the component hasn't hydrated yet or no data found, return nothing
  if (!isClient || !readingText) {
    return <div>Loading...</div>; // Optionally, show a loading state
  }

  return (
    <div>
      <SpeechTracker data={readingText} />
    </div>
  );
}
