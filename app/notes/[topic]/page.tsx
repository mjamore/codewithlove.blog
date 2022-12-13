export default function NoteTopicsPage({ params }: any) {
  console.log(params.topic);
  return <div>Note Topics Page: {`${params.topic}`}</div>;
}
