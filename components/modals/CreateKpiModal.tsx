'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addKpi } from '@/slices/usersSlice';
import ModalWrapper from './ModalWrapper';
import { v4 as uuid } from 'uuid';
import { randomBusinessQuestions } from '@/data/mockUsers'; // update the path if needed

export default function CreateKpiModal({ onClose }: { onClose: () => void }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [calculation, setCalculation] = useState(0);
  const [visualsAvailable, setVisualsAvailable] = useState<string[]>([]);
  const [businessQuestions, setBusinessQuestions] = useState<string[]>([]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    setVisualsAvailable(selected);
  };

   const handleBusinessQuestionsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions, opt => opt.value);
    setBusinessQuestions(selected);
  };

  const create = () => {
    dispatch(
      addKpi({
        id: uuid(),
        title,
        description,
        isFavorite: false,
        businessQuestions,
        metricIds: [],
        calculation,
        visualsAvailable,
        affiliateApplicability: []
      })
    );
    onClose();
  };

  return (
    <ModalWrapper title="Create KPI" titleAction="Add KPI" onClickAction={create} onClose={onClose}>
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

      <div>
        <label className="label">Calculation</label>
        <div className="control">
          <input className="input" type="text"
          value={calculation}
            onChange={(e) => setCalculation(e.target.value)}
           placeholder="Set a calculation between 0-100" />
        </div>
      </div>

      <div>
        <label className="label">Charts Availables</label>
        <div className="control">
          <div className="select is-multiple">
            <select multiple size={3} onChange={handleSelectChange}>
              <option value="bar">bar</option>
              <option value="line">line</option>
              <option value="pie">pie</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Business Questions</label>
        <div className="control">
          <div className="select is-multiple">
            <select multiple size={3} onChange={handleBusinessQuestionsChange}>
              {randomBusinessQuestions.map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

    </ModalWrapper>
  );
}
