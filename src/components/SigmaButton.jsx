export default function SigmaButton({ text, className }) {
  return (
    <button type="button" className={`sigmaBtn ${className}`}>
      {text}
    </button>
  );
}
