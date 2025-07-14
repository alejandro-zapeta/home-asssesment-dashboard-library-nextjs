'use client';
import { AssetBase } from '@/types/asset';

export default function AssetList({
  items,
  onSelect
}: {
  items: AssetBase[];
  onSelect: (asset: AssetBase) => void;
}) {
  return (
    <div className="columns is-multiline">
      {items.map((item) => (
        <div className="column is-half" key={item.id}>
          <div
            className="asset-card cursor-pointer"
            onClick={() => onSelect(item)}
          >
            <div className="asset-icon">
              <span className="icon has-text-grey">📊</span>
            </div>
            <div>
              <p className="title is-6 mb-1">{item.title}</p>
              <p className="subtitle is-7 has-text-grey">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
