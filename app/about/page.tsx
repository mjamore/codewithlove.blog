import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-start">
      <div className="flex flex-col pr-8">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
          Michael Amore
        </h1>
        <h2 className="text-gray-700 dark:text-gray-200 mb-4">
          Senior Software Engineer at{' '}
          <span className="font-semibold">Cox Automotive</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-16">
          Passionate about building for web with JavaScript.
        </p>
      </div>
      <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
        <Image
          alt="Michael Amore"
          height={176}
          width={176}
          src="/images/michael-amore.jpeg"
          sizes="30vw"
          priority
          className="rounded-full filter grayscale"
        />
      </div>
    </div>
  );
}
