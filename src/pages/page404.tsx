import Button from "@/components/button"
import planet from "../assets/Planet.png"
import four from "../assets/4.png"
import Image from "next/image"

export default function Page404() {
  const toGoBack = "VOLTAR"
  const nextHome = "IR PARA A HOME"
  const linkBack = "./"
  const linkHome = "./"

  return (
    <div className="flex-1 w-screen h-screen box-content bg-[url('../assets/Background.png')] flex justify-center items-center gap-[243px]">
      {/*left*/}
      <main className="w-[380px]">
        <h1 className="text-heading text-gray-50 font-bold">
          Ops, esta página não foi encontrada
        </h1>
        <p className="text-regular text-gray-100 font-light">
          Parece que você se perdeu... Tente voltar para a página anterior ou
          acessar a home.
        </p>
        <div className="mt-14 flex gap-4">
          <Button nameButton={toGoBack} nameLink={linkBack} />
          <Button nameButton={nextHome} nameLink={linkHome} />
        </div>
      </main>

      {/*right*/}
      <section className="flex items-center ">
        <Image src={four} alt="four" className="w-20 h-28" />
        <iframe
          src="https://lottie.host/?file=ab7a5c4d-d0de-4877-be5e-8cffedab2bf1/f7kJBYBWYz.json"
          className="w-230px h-[230px]"
        >
          <Image src={planet} alt="zero" />
        </iframe>
        <Image src={four} alt="four" className="w-20 h-28" />
      </section>
    </div>
  )
}
