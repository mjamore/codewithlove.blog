export default function NotePage({ params }: any) {
  console.log(params.topic);
  console.log(params.slug);
  return <div>Note Page: {`${params.topic}/${params.slug}`}</div>;
}
