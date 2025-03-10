import React, { useState } from "react"

const blogs = [
  {
    id: 1,
    title: "Qualified of the Lord",
    message:
      "Obedience to God qualifies one for His blessings. God does not solely use the qualified. He qualifies those who make themselves available for His work. And strict obedience to His injunctions attracts being qualified by Him. Check and do the needful.",
    date: "Oct 19, 2022",
  },
  {
    id: 2,
    title: "My Refuge and Fortress",
    message:
      "A refuge guards things within it and a fortress shields its contents from external intrusion. God is our refuge and fortress, connoting that challenges might be happening around us but God will protect us from them all, never to be affected by any. He/she who has God as his/her refuge and fortress enjoys peace of mind, even in trying times.",
    date: "Oct 19, 2022",
  },
  {
    id: 3,
    title: "Power and Wisdom",
    message:
      "To say God is All-knowing and most powerful is not an understatement. He reigns supreme as the most wise of all and the most powerful. Hence, He is Omnipotent and Omniscient. Do you seek wisdom and power (which I enjoin you to passionately seek)? Come to God who gives liberally and without recounting.",
    date: "Oct 19, 2022",
  },
]

const BlogMain = () => {
  const [expanded, setExpanded] = useState<number | null>(null)
  const [expandedCount, setExpandedCount] = useState(0)

  const handleExpand = (id: number) => {
    if (expanded === id) {
      setExpanded(null)
      setExpandedCount((prev) => Math.max(prev - 1, 0))
    } else {
      setExpanded(id)
      setExpandedCount((prev) => prev + 1)
    }
  }

  return (
    <div  className={`flex justify-center my-12 shadow-xl transition-all duration-300 ${
      expandedCount > 0 ? "min-h-[40svh]" : "min-h-[25svh]"
    }`}>
      <div className="w-full max-w-screen-xl flex flex-wrap md:flex-nowrap justify-center gap-6">
        {blogs.map((blog) => {
          const words = blog.message.split(" ")
          const isExpanded = expanded === blog.id

          return (
            <section
              key={blog.id}
              className="p-6 bg-white shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 2xl:w-1/4 text-gray-800 relative border-t border-red-100"
            >
              <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl mb-4">
                {blog.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg mb-4 text-justify">
                {isExpanded ? blog.message : words.slice(0, 25).join(" ") + "..."}
              </p>
              <button
                onClick={() => setExpanded(isExpanded ? null : blog.id)}
                className="text-base text-red-500 mb-4 focus:outline-none"
              >
                {isExpanded ? "Show Less" : "Show More"}
              </button>
              <div className="mt-8">
                <button className="absolute bottom-6 left-10 right-10 bg-red-500 text-white px-4 py-2 rounded-md">
                  {blog.date}
                </button>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default BlogMain
