type PillProps = {
  text: string;
  color: string;
};

const Pill = ({ text, color }: PillProps) => {
  return <div className={`rounded-full bg-green-100 px-4 py-2 font-bold text-green-700 shadow-lg`}>{text}</div>;
};

export default Pill;
