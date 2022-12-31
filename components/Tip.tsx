type TipProps = {
  text: string;
};

export default function Tip({ text }: TipProps) {
  return <div className={'mt-20 w-full rounded-lg border-2 border-gray-600 bg-gray-800 p-6'}>{text}</div>;
}
