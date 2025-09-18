export type Item = {
id: number
title: string
price: number
description: string
category: string
image: string
}


export async function fetchItems(): Promise<Item[]> {
const res = await fetch('https://fakestoreapi.com/products')
if (!res.ok) throw new Error('Failed to fetch items')
const data = await res.json()
return data
}