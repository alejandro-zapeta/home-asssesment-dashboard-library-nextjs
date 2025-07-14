'use client';
import { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import ModalWrapper from './ModalWrapper';
import { AssetBase, Layout, Storyboard, Kpi } from '@/types/asset';
import { useSelector } from 'react-redux';
import { selectCurrentUser, toggleFavoriteAsset } from '@/slices/usersSlice';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function extractNumericValue(str: string): number {
  return parseFloat(str);
}

export default function ViewAssetModal({
  mode,
  assetId,
  onClose
}: {
  mode: 'layout' | 'storyboard';
  assetId: string;
  onClose: () => void;
}) {
  const user = useSelector(selectCurrentUser);
  const asset =
    mode === 'layout'
      ? user?.layouts.find((l) => l.id === assetId)
      : user?.storyboards.find((s) => s.id === assetId);

  if (!asset) return null;
  const dispatch = useDispatch();

  // Get relevant KPIs by ID
  const kpis: Kpi[] = useMemo(() => {
    if (!user) return [];
    const ids =
      'kpisBeingUsed' in asset
        ? (asset as Layout).kpisBeingUsed
        : 'coupledKpisFilters' in asset
        ? (asset as Storyboard).coupledKpisFilters
        : [];
    return user.kpis.filter((k) => ids.includes(k.id));
  }, [asset, user]);

  // Merge chart types
  const availableCharts = useMemo(() => {
    const set = new Set<string>();
    kpis.forEach((k) => k.visualsAvailable.forEach((v) => set.add(v)));
    return Array.from(set);
  }, [kpis]);

  const [chartType, setChartType] = useState(availableCharts[0] || 'bar');

  // Build chart data using title and calculation
  const chartData = useMemo(() => {
    const labels = kpis.map((k) => k.title);
    const values = kpis.map((k) => extractNumericValue(k.calculation));
    return {
      labels,
      datasets: [
        {
          label: chartType.toUpperCase(),
          data: values
        }
      ]
    };
  }, [kpis, chartType]);

  const toggleFavorite = () => {
    dispatch(toggleFavoriteAsset({ assetId: asset.id, mode: 'kpisBeingUsed' in asset ? 'layout' : 'storyboard' }));
  };

  const ChartComponent =
    chartType === 'line' ? Line : chartType === 'pie' ? Pie : Bar;

  return (
    <ModalWrapper title={asset.title} onClose={onClose}>
      <h1 className="title is-4"></h1>
      <p className="subtitle is-6">{asset.description}</p>

      {availableCharts.length > 0 && (
        <div className="field">
          <label className="label">Chart Type</label>
          <div className="control">
            <div className="select">
              <select
                value={chartType}
                onChange={(e) => setChartType(e.target.value)}
              >
                {availableCharts.map((type) => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      <ChartComponent data={chartData} />

      {'amountOfPages' in asset && (
        <p className="mt-4">
          <strong>Pages:</strong> {(asset as Layout).amountOfPages}
        </p>
      )}

      {'applicableAffiliates' in asset && (
        <p className="mt-4">
          <strong>Applicable Affiliates:</strong>{' '}
          {(asset as Storyboard).applicableAffiliates.join(', ')}
        </p>
      )}

      <div className="mt-5">
        <button className={`button is-link is-fullwidth ${asset.isFavorite ? 'is-inverted' : ''}`}
          onClick={() => {toggleFavorite()}}>{asset.isFavorite ? 'Is Favorite' : 'Make it favorite'}</button>
      </div>
    </ModalWrapper>
  );
}
