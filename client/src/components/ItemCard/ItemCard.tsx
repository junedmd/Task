
import type { Item } from '../../api'
import './ItemCard.css'

export default function ItemCard({ item }: { item: Item }) {
return (
 <article className="item-card">
      <img
        src={item.image}
        alt={item.title}
        className="item-card-image"
      />
      <div className="item-card-content">
        <h3 className="item-card-title">{item.title}</h3>
        <p className="item-card-category">{item.category}</p>
        <p className="item-card-price">₹{item.price}</p>
      </div>
    </article>
)
}