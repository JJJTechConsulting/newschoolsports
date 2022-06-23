export default function Categories({ categories }) {
  return <span className="text-lg italic">{categories.edges[0].node.name}</span>;
}
