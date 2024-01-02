import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className={'prose-content'}>
      <h1>
        About the <span className={'code-with-love-text'}>Code With Love</span> Web Development Blog
      </h1>

      <p>
        The <span className={'code-with-love-text'}>code with love</span> blog is all about balancing our love of technology and software engineering with mental health and self
        care, while promoting love and peace to make the world a better place.
      </p>

      <h3>Our Fortune</h3>
      <p>
        If the only jobs you have ever experienced are sitting behind a computer, then it is hard to appreciate how fortunate we are to get to write code for a living. It is fun,
        challenging, fulfilling, and magical. And we get paid to do it.
      </p>

      <div className={'image-grid'}>
        <Image src={'/images/about/marley.jpg'} alt={'Marley eating fruit in the backyard'} width={650} height={650} />
      </div>

      <p>
        Others are not as fortunate. Our lives and the lives of those around us are greatly improved when we take time to be grateful for the simple things in life. After all, the
        simple parts of life are what make being alive great.
      </p>

      <div className={'image-grid'}>
        <Image src={'/images/about/jane-closeup.jpg'} alt={'Jane the Dachshund'} width={650} height={650} />
        <Image src={'/images/about/buster.jpg'} alt={'Buster the Chihuahua'} width={650} height={650} />
      </div>
    </div>
  );
}
