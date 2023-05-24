export default function Contact() {
  return (
    <section className="w-full h-full flex items-center justify-center flex-col text-center gap-14">
      <ul className="flex gap-16 items-center justify-center flex-wrap">
        <li className="hover:opacity-75 transition-opacity duration-300">
          <a
            href="https://github.com/danieledefoe"
            rel="noreferrer noopener nofollow"
            aria-label="github"
            className="github block w-32 h-32"
            target="_blank"
          ></a>
        </li>
        <li className="hover:opacity-75 transition-opacity duration-300">
          <a
            href="https://vk.com/pathetically.aesthetic"
            rel="noreferrer noopener nofollow"
            aria-label="vk"
            className="vk block w-32 h-32"
            target="_blank"
          ></a>
        </li>
      </ul>
      <address className="flex flex-col flex-wrap gap-5">
        <h4 className="capitalize font-bold text-4xl">
          fakeStore company Limited
        </h4>
        <p className="font-bold text-2xl">
          Moscow highway 50, Saint Petersburg Russia
        </p>
      </address>
    </section>
  )
}
