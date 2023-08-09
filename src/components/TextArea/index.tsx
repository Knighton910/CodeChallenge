import './index.scss'
import { useState, useEffect } from 'react';

const TextArea = ({setWordCount: any, setCharCount: any}) => {
  // State to be lifted to parent
  const [text, setText] = useState('')
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const changeHandler = (event:any) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // array of words
    const words = text.split(' ');

    // update word count
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordCount++;
      }
    });
    setWordCount(wordCount);

    // update char count (including whitespaces)
    setCharCount(text.length);
  }, [text]);
  
  return (
    <div className='container'>
      <div>
        <textarea
          value={text}
          onChange={changeHandler}
          placeholder='What is on your mind?'
        ></textarea>
      </div>
    </div>
  )
}

export default TextArea
