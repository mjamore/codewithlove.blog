import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex flex-col-reverse items-start sm:flex-row">
      <div className="flex flex-col pr-8">
        <h1 className="mb-1">Michael Amore</h1>
        <h3 className="mb-4">
          Senior Software Engineer at <span className="font-semibold">Cox Automotive</span>
        </h3>
        <p className="mb-16">Technologist, developer, wannabe hacker. I love the web.</p>
      </div>
      <div className="relative mb-8 mr-auto w-[80px] sm:mb-0 sm:w-[176px]">
        <Image alt="Michael Amore" height={176} width={176} src="/images/michael-amore.jpeg" sizes="30vw" priority className="rounded-full grayscale filter" />
      </div>
    </div>
  );
}
