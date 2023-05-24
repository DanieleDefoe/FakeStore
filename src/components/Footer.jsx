export default function Footer() {
  return (
    <footer className="w-full px-5 py-3 flex items-center justify-center bg-gray-900 text-white text-2xl flex-wrap gap-5">
      <p>Copyright &copy; {new Date().getFullYear()} Abuzar Mamedov</p>
      <a
        className="github w-10 h-10"
        href="https://github.com/DanieleDefoe"
        rel="noreferrer noopener nofollow"
        aria-label="github"
      ></a>
    </footer>
  )
}
