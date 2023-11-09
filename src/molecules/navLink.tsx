export default function NavLink({ text, url }) {
    return (
      <a
        href={url}
        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      >
        {text}
      </a>
    );
}