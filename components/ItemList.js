import React from 'react';
import ItemCard from './ItemCard';

function ItemList({ data, pageName }) {
  return (
    <div className="flex flex-col gap-2 pt-2">
      {data.map((d) => {
        return (
          <ItemCard
            key={d.id}
            title={d.title}
            slug={d.slug}
            pageName={pageName}
            subtitle={d.subtitle}
          />
        );
      })}
    </div>
  );
}

export default ItemList;
