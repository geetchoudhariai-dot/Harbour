import { Star, StarHalf } from "lucide-react";
import { SITE, testimonials } from "../lib/site";

function Stars() {
  return (
    <span className="stars" aria-hidden="true">
      <Star size={20} fill="currentColor" strokeWidth={0} />
      <Star size={20} fill="currentColor" strokeWidth={0} />
      <Star size={20} fill="currentColor" strokeWidth={0} />
      <Star size={20} fill="currentColor" strokeWidth={0} />
      <StarHalf size={20} fill="currentColor" strokeWidth={0} />
    </span>
  );
}

export default function RatingBlock() {
  const notes = testimonials.slice(0, 3);

  return (
    <>
      <div className="rating-row fade-up">
        <span className="stat-numeral">4.2</span>
        <div className="rating-stars">
          <Stars />
          <span className="rating-meta">
            Rated 4.2 out of 5 ·{" "}
            <a href={SITE.googleReviews} target="_blank" rel="noopener noreferrer">
              Google reviews
            </a>
          </span>
        </div>
      </div>

      <div className="notes">
        {notes.map((item) => (
          <figure className="note fade-up" key={item.name}>
            <span className="note-quote-mark" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote>{item.quote}</blockquote>
            <figcaption>
              <strong>{item.name}</strong>
              {item.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
