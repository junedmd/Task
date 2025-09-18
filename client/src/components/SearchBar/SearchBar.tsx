
import './SearchBar.css'
type Props = {
value: string
onChange: (v: string) => void
placeholder?: string
}


export default function SearchBar({ value, onChange }: Props) {
return (
<div className="search-bar">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products..."
        className="search-input"
        aria-label="search-input"
      />
    </div>
)
}