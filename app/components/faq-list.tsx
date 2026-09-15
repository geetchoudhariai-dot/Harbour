type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqList({ items, name = "faq" }: { items: FaqItem[]; name?: string }) {
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <details key={item.question} name={name} open={index === 0}>
          <summary>
            {item.question}
            <span className="faq-toggle" aria-hidden="true" />
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
