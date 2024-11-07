import Card from "./card"
function Features() {
  return (
    <div className="bg-[#0E0E0F]  text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-200">
          Remember anything.
        </h1>
        <h2 className="text-4xl font-semibold mb-6 text-gray-300">
          Just ask a question.
        </h2>
        <p className="text-xl text-gray-400">
          Gems is the shortcut for all your knowledge. Just summon Gems and ask any question.
        </p>
      </div>
      <div className="w-[70%] mt-10 mx-auto">
        <Card
            title="Card"
            subtitle="Subtitle"
            image={"https://unsplash.com/photos/a-wooden-tray-with-a-candle-and-a-glass-on-it-j7l_GR9WeZE"}
            fullWidth={true}
        />

      </div>
    </div>
  )
}

export default Features
