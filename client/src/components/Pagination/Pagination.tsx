


type Props = {
current: number
total: number
onChange: (n: number) => void
}

import './Pagination.css'
export default function Pagination({ current, total, onChange }: Props) {
return (
<div className="pagination">
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="pagination-btn"
      >
        Prev
      </button>
      <span className="pagination-info">
        Page {current} of {total}
      </span>
      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="pagination-btn"
      >
        Next
      </button>
    </div>
)
}