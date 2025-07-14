'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLayout, addStoryboard, selectCurrentUser } from '@/slices/usersSlice';
import ModalWrapper from './ModalWrapper';
import { v4 as uuid } from 'uuid';

export default function CreateAssetModal({
  mode,
  onClose
}: {
  mode: 'layout' | 'storyboard';
  onClose: () => void;
}) {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedKpis, setSelectedKpis] = useState<string[]>([]);
  const [amountOfPages, setAmountOfPages] = useState('');
  const [affiliatesInput, setAffiliatesInput] = useState('');

  if (!user) return null;

  const toggleKpi = (id: string) => {
    setSelectedKpis((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const create = () => {
    if (mode === 'layout') {
      dispatch(
        addLayout({
          id: uuid(),
          title,
          description,
          isFavorite: false,
          amountOfPages: parseInt(amountOfPages, 10) || 1,
          kpisBeingUsed: selectedKpis
        })
      );
    } else {
      const affiliates = affiliatesInput
        .split(',')
        .map((a) => a.trim())
        .filter((a) => a.length > 0);

      dispatch(
        addStoryboard({
          id: uuid(),
          title,
          description,
          isFavorite: false,
          coupledKpisFilters: selectedKpis,
          applicableAffiliates: affiliates
        })
      );
    }
    onClose();
  };

  return (
    <ModalWrapper title={`Create ${mode}`} titleAction={`Add ${mode}`} onClickAction={create} onClose={onClose}>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
      </div>
      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea
            className="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
      </div>

      {mode === 'layout' && (
        <div className="field">
          <label className="label">Amount of Pages</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="e.g. 3"
              value={amountOfPages}
              onChange={(e) => setAmountOfPages(e.target.value)}
            />
          </div>
        </div>
      )}

      {mode === 'storyboard' && (
        <div className="field">
          <label className="label">Applicable Affiliates</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="e.g. LATAM, North America (separated by comma)"
              value={affiliatesInput}
              onChange={(e) => setAffiliatesInput(e.target.value)}
            />
          </div>
        </div>
      )}

      <div className="field">
        <label className="label">Select KPIs</label>
        <div className="control">
          {user.kpis.map((k) => (
            <label className="checkbox mr-3" key={k.id}>
              <input
                type="checkbox"
                className="mr-1"
                checked={selectedKpis.includes(k.id)}
                onChange={() => toggleKpi(k.id)}
              />
              {k.title}
            </label>
          ))}
        </div>
      </div>
    </ModalWrapper>
  );
}
