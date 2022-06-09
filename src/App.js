import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Header from './review/Header';
import ProductReviewList from './review/ProductReviewList';
import ProductReviewStats from './review/ProductReviewStats';
import ProductData from './data/ProductData';
import ReviewForm from './review/ReviewForm';

function App() {
  const [review, setReview] = useState(ProductData);
  const addReview = newReview => {
    newReview.id = uuidv4();
    setReview([newReview, ...review]);
  };
  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      setReview(review.filter(item => item.id !== id));
    }
};
  return (
    <>
      <Header />
      <div className="container">
        <ReviewForm handleAdd={addReview} />
        <ProductReviewStats review={review} />
        <ProductReviewList 
        review={review} 
        handleDelete={deleteFeedback} 
  />

      </div>
   </>
 );
}
export default App;