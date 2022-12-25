type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    // <button type="button" className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md">
    //   {text}
    // </button>
    <button type='button' className='rounded-md bg-amore-red px-6 py-3 font-semibold text-white hover:bg-red-500'>
      {text}
    </button>
  );
}
