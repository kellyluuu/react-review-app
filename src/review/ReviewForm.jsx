import { useState } from 'react';
import Card from './shared/Card';
import Button from './Button';
import RatingSelect from './RatingSelect';
function ReviewForm({ handleAdd }) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(4);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const handleTextChange = event => {
   if (text === '') {
     setBtnDisabled(true);
     setMessage(null);
  } else if (text !== '' && text.trim().length <= 2) {
    setMessage('Text must be at least 4 characters');
    setBtnDisabled(true);
  } else {
    setMessage(null);
    setBtnDisabled(false);
    }
   setText(event.target.value);
  };
    const handleSubmit = event => {
    event.preventDefault();
   if (text.trim().length > 3) {
    const newFeedback = {
    text,
    rating
   };
    handleAdd(newFeedback);
    setText('');
   }
};
  return (
   <Card>
    <form onSubmit={handleSubmit}>
    <h2>How would you rate this product?</h2>
    <RatingSelect select={rating => setRating(rating)} />
   <div className="input-group">
  <input 
   onChange={handleTextChange} 
   type="text" 
   placeholder="Write a review" 
   value={text} 
   />
   <Button type="submit" isDisabled={btnDisabled}>
    Send
  </Button>
    </div>
      {message && <div className="message">{message}</div>}
   </form>
 </Card>
 );
}
export default ReviewForm;