'use client';
import { useState } from 'react';
import ModalWrapper from './ModalWrapper';

export default function RequestAccessModal({ onClose, onClickAction }: { onClose: () => void, onClickAction: () => void }) {
  const [reason, setReason] = useState('');

  return (
    <ModalWrapper title="Request Access" titleAction="Request" onClickAction={onClickAction} onClose={onClose}>
      <div className="field">
        <label className="label">Reason</label>
        <div className="control">
          <textarea
            className="textarea"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          ></textarea>
        </div>
      </div>
    </ModalWrapper>
  );
}
