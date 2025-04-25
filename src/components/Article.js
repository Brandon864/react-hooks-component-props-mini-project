// src/components/Article.js
export default function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const getReadTimeIndicator = (minutes) => {
      if (minutes < 30) {
        const coffeeCups = Math.ceil(minutes / 5);
        return `${"☕️".repeat(coffeeCups)} ${minutes} min read`;
      } else {
        const bentoBoxes = Math.ceil(minutes / 10);
        return `${"🍱".repeat(bentoBoxes)} ${minutes} min read`;
      }
    };
  
    return (
      <article>
        <h3>{title}</h3>
        <small>
          {date} · {getReadTimeIndicator(minutes)}
        </small>
        <p>{preview}</p>
      </article>
    );
  }