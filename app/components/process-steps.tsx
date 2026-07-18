type ProcessStep = {
  title: string;
  copy: string;
};

export default function ProcessSteps({ steps }: { steps: readonly ProcessStep[] }) {
  return (
    <div className="process" role="list" aria-label="Visit steps">
      {steps.map((step, index) => (
        <article className="process-step fade-up" key={step.title} role="listitem">
          <span className="process-index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3>{step.title}</h3>
          <p>{step.copy}</p>
        </article>
      ))}
    </div>
  );
}
