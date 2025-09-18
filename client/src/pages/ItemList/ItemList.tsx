import { useEffect, useMemo, useState } from 'react'
import { fetchItems, type Item } from '../../api.ts'
import SearchBar from '../../components/SearchBar/SearchBar.tsx'
import ItemCard from '../../components/ItemCard/ItemCard.tsx'
import Pagination from '../../components/Pagination/Pagination.tsx'
import './ItemList.css'

const PAGE_SIZE = 5

export default function ItemList() {
  const [items, setItems] = useState<Item[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetchItems()
      .then((data) => setItems(data))
      .catch((err) => setError((err as Error).message))
      .finally(() => setLoading(false))
  }, [])

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return items.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        i.category.toLowerCase().includes(q)
    )
  }, [items, query])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const start = (page - 1) * PAGE_SIZE
  const paged = filtered.slice(start, start + PAGE_SIZE)

  if (loading) return <div className="loading">Loading...</div>
  if (error) return <div className="error">Error: {error}</div>

  return (
    <div className="item-list">
      <SearchBar value={query} onChange={setQuery} />

      {paged.length === 0 ? (
        <p className="no-results">No results found</p>
      ) : (
        <div className="grid">
          {paged.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}

      <Pagination current={page} total={totalPages} onChange={setPage} />
      <p className="results-count">
        Showing {paged.length} of {filtered.length} results
      </p>
    </div>
  )
}
