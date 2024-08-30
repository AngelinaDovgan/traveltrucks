export default function CampersReviews({ reviews }) {
    return (
        <div>
            <h3>Reviews</h3>
            <ul>
                {reviews && reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <li key={index}>
                            {review.reviewer_name && <p>Name: {review.reviewer_name}</p>}
                            {review.reviewer_rating && <p>Rating: {review.reviewer_rating}</p>}
                            {review.comment && <p>Comment: {review.comment}</p>}
                        </li>
                    ))
                ) : (
                    <p>No reviews</p>
                )}
            </ul>
        </div>
    );
}
