import React, { useEffect, useState } from 'react';
import { cards } from '../../../../Data/Routes/Translations'
import { useRouter } from 'next/router';
import TranslationComponent from '../../../../../components/TranslationComp';

export default function Index() {
  const [isClient, setIsClient] = useState(false); // Client-side state to prevent hydration issues
  const [lesson, setLesson] = useState(null);

 const router = useRouter();
  const { course, id } = router.query;

  // Find lesson metadata based on `id`
  const somedata = cards.find((data) => data.link2 === course);

  useEffect(() => {
    // Ensure client-side rendering
    setIsClient(true);

    if (somedata) {
      // Dynamically import lesson data
      import(`../../../../Data/Translationsdata/${somedata.data}`)
        .then((module) => {
          setLesson(module.data);
        })
        .catch((error) => {
          console.error('Error loading lesson data:', error);
        });
    }
  }, [somedata]);

  if (!isClient || !somedata) {
    return <div>Loading...</div>;
  }

  if (!lesson) {
    return <div>Loading lesson data...</div>;
  }

  return (
    <div>
        <TranslationComponent />
    </div>
  );
}
