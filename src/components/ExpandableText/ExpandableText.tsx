import { useState } from "react"

interface Props {
  text: string
  maxChars: number
}

function ExpandableText({ text, maxChars }: Props) {
  const [showMore, setShowMore] = useState(false)

  const toggleDescription = () => {
    setShowMore(!showMore)
  }

  const displayedText = showMore ? text : text?.slice(0, maxChars)

  return (
    <div>
      <div className='text-textContent'>{displayedText}</div>
      <div>
        {text?.length > maxChars && (
          <button className='text-textHeading underline cursor-pointer' onClick={toggleDescription}>
            {showMore ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  )
}

export default ExpandableText
