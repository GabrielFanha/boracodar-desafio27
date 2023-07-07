export default function Button(props: any) {
  const { nameButton, nameLink } = props
  return (
    <button className="text-button font-medium text-gray-50 py-3 px-6 rounded-full bg-blue-50 hover:bg-blue-100">
      <a href={nameLink}>{nameButton}</a>
    </button>
  )
}
