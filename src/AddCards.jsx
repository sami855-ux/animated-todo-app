import PropTypes from "prop-types"
import { useState } from "react"
import { motion } from "framer-motion"

import { HiOutlinePlus } from "react-icons/hi"

export default function AddCards({ column, setCards }) {
  const [text, setText] = useState("")
  const [adding, setAdding] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text.trim().length) return

    const newCard = {
      column,
      title: text.trim(),
      id: crypto.randomUUID(),
    }

    setCards((pv) => [...pv, newCard])
    setAdding(false)
  }

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add new tasks..."
            className="w-full p-3 text-sm border rounded border-violet-400 bg-violet-400/20 text-neutral-50 placeholder-violet-300 focus:outline-0"
          ></textarea>

          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center justify-between gap-1.5 rounded bg-neutral-50 px-10 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span className="text-xs">Add</span>
              <HiOutlinePlus size={15} />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span className="text-xs">Add card</span> <HiOutlinePlus size={15} />
        </motion.button>
      )}
    </>
  )
}

AddCards.propTypes = {
  column: PropTypes.string,
  setCards: PropTypes.func,
}
