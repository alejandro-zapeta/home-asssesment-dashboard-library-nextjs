'use client';
import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser, requestAccess } from '@/slices/usersSlice';
import AssetList from '@/components/AssetList';
import CreateKpiModal from '@/components/modals/CreateKpiModal';
import CreateAssetModal from '@/components/modals/CreateAssetModal';
import RequestAccessModal from '@/components/modals/RequestAccessModal';
import ViewAssetModal from '@/components/modals/ViewAssetModal';
import { AssetBase } from '@/types/asset';

type TabKey = 'featured' | 'kpi' | 'layouts' | 'storyboards';

export default function Dashboard() {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState<TabKey>('featured');
  const [createKpiOpen, setCreateKpiOpen] = useState(false);
  const [createAssetOpen, setCreateAssetOpen] = useState<null | 'layout' | 'storyboard'>(null);
  const [requestModal, setRequestModal] = useState(false);
  const [viewAsset, setViewAsset] = useState<AssetBase | null>(null);

  if (!user) return null;

  const filtered = <T extends AssetBase>(arr: T[]): T[] =>
    arr.filter((a) => a.title.toLowerCase().includes(search.toLowerCase()));

  const featured = useMemo(() => {
    return [
      ...user.kpis.filter((k) => k.isFavorite),
      ...user.layouts.filter((l) => l.isFavorite),
      ...user.storyboards.filter((s) => s.isFavorite)
    ];
  }, [user]);

  return (
    <div className="container-box">
      <div className="level">
        <div className="level-left">
          <div className="title is-3">Library</div>
        </div>
        <div className="level-right">
            <button className="button is-link is-rounded" disabled={user.hasAccess} onClick={() => setRequestModal(true)}>
              Request
            </button>
        </div>
      </div>

      <p>Browse for assets needed to report and present analysis.</p>

      <div className="field mt-5">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Type to search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="tabs is-centered">
        <ul>
          {(['featured', 'kpi', 'layouts', 'storyboards'] as TabKey[]).map((t) => (
            <li key={t} className={tab === t ? 'is-active' : ''}>
              <a onClick={() => setTab(t)} className="cursor-pointer capitalize">
                {t}
              </a>
            </li>
          ))}
         </ul>
      </div>

      {tab === 'kpi' && (
        <button className="button is-primary mb-4" onClick={() => setCreateKpiOpen(true)}>
          Add KPI
        </button>
      )}

      {tab === 'layouts' && (
        <button className="button is-primary mb-4" onClick={() => setCreateAssetOpen('layout')}>
          Add Layout
        </button>
      )}

      {tab === 'storyboards' && (
        <button className="button is-primary mb-4" onClick={() => setCreateAssetOpen('storyboard')}>
          Add Storyboard
        </button>
      )}

      {tab === 'featured' && <AssetList items={filtered(featured)} onSelect={setViewAsset} />}
      {tab === 'kpi' && <AssetList items={filtered(user.kpis)} onSelect={() => null} />}
      {tab === 'layouts' && <AssetList items={filtered(user.layouts)} onSelect={setViewAsset} />}
      {tab === 'storyboards' && <AssetList items={filtered(user.storyboards)} onSelect={setViewAsset} />}

      {createKpiOpen && <CreateKpiModal onClose={() => setCreateKpiOpen(false)} />}
      {createAssetOpen && (
        <CreateAssetModal
          mode={createAssetOpen}
          onClose={() => setCreateAssetOpen(null)}
        />
      )}
      {requestModal && (
        <RequestAccessModal
          onClickAction={()=>{dispatch(requestAccess());setRequestModal(false);}}
          onClose={() => {setRequestModal(false);}}
        />
      )}
      {viewAsset && <ViewAssetModal mode={tab === 'layouts'? 'layout' : 'storyboard'} assetId={viewAsset.id} onClose={() => setViewAsset(null)} />}
    </div>
  );
}