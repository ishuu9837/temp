'use client';
import { useState } from 'react';

const initialFeatures = [
  { label: 'Login Frequency', val: 78, ideal: 75 },
  { label: 'Session Duration', val: 82, ideal: 80 },
  { label: 'Assessment Score', val: 85, ideal: 82 },
  { label: 'Forum Activity', val: 68, ideal: 65 },
  { label: 'Video Completion', val: 88, ideal: 85 },
  { label: 'Late Submissions', val: 12, ideal: 10 },
  { label: 'Resource Reads', val: 76, ideal: 75 },
  { label: 'Off-Hours Burst', val: 18, ideal: 15 },
];

export default function MlPlayground() {
  const [tab, setTab] = useState<'edusentinel' | 'fewshot' | 'mrs'>('edusentinel');
  const [features, setFeatures] = useState(initialFeatures);
  const [shotK, setShotK] = useState(5);
  const [queryPt, setQueryPt] = useState({ x: 52, y: 44 });

  const mse = +(
    features.reduce((sum, f) => {
      const diff = Math.abs(f.val - f.ideal) / 100;
      return sum + diff * diff * 0.18;
    }, 0) /
    features.length *
    1.85
  ).toFixed(3);
  const isAnomaly = mse > 0.042;

  function applyPreset(vals: number[]) {
    setFeatures(prev => prev.map((f, i) => ({ ...f, val: vals[i] })));
  }

  // Few-shot prototype centers in % coordinates
  const prototypes = [
    { name: 'Benign Tissue (Histopathology)', color: '#10b981', x: 26, y: 34 },
    { name: 'Malignant Ductal (Histopathology)', color: '#f43f5e', x: 74, y: 34 },
    { name: 'Glioma Tumor Core (BraTS MRI)', color: '#0ea5e9', x: 50, y: 74 },
  ];
  const dists = prototypes.map(p => {
    const dx = (queryPt.x - p.x) / 25;
    const dy = (queryPt.y - p.y) / 25;
    return dx * dx + dy * dy;
  });
  const exps = dists.map(d => Math.exp(-d * (1.1 + shotK * 0.08)));
  const sumExp = exps.reduce((a, b) => a + b, 0) || 1;
  const probs = exps.map(e => Math.round((e / sumExp) * 100));

  return (
    <section id="ai-lab" className="lab-showcase section-line" aria-label="Interactive AI and ML Lab">
      <div className="lab-header">
        <div>
          <h2>Interactive AI &amp; ML Lab</h2>
          <p>Test live in-browser simulations of my autoencoder and few-shot research pipelines.</p>
        </div>
        <div className="lab-tabs">
          <button type="button" className={tab === 'edusentinel' ? 'active' : ''} onClick={() => setTab('edusentinel')}>
            01 · EduSentinel Autoencoder
          </button>
          <button type="button" className={tab === 'fewshot' ? 'active' : ''} onClick={() => setTab('fewshot')}>
            02 · Few-Shot ProtoNet (M.Tech)
          </button>
        </div>
      </div>

      {tab === 'edusentinel' ? (
        <div className="lab-card">
          <div className="lab-presets">
            <button type="button" onClick={() => applyPreset([78, 82, 85, 68, 88, 12, 76, 18])}>Consistent Learner</button>
            <button type="button" onClick={() => applyPreset([42, 92, 74, 25, 90, 48, 85, 86])}>Exam Crammer</button>
            <button type="button" onClick={() => applyPreset([18, 22, 38, 8, 20, 82, 15, 30])}>Disengaged / At-Risk</button>
            <button type="button" onClick={() => applyPreset([99, 12, 96, 2, 14, 5, 98, 95])}>Anomalous Pattern</button>
          </div>
          <div className="lab-sliders">
            {features.map((f, i) => (
              <label key={f.label} className="lab-slider-item">
                <span>{f.label}: <strong>{f.val}%</strong></span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={f.val}
                  onChange={e => {
                    const v = Number(e.target.value);
                    setFeatures(prev => prev.map((item, idx) => (idx === i ? { ...item, val: v } : item)));
                  }}
                />
              </label>
            ))}
          </div>
          <div className={`lab-status ${isAnomaly ? 'anomaly' : 'normal'}`}>
            <strong>{isAnomaly ? 'FLAGGED: ANOMALOUS LEARNING BEHAVIOUR' : 'NORMAL LEARNING PATTERN'}</strong>
            <span>Reconstruction MSE: {mse.toFixed(3)} (Threshold: 0.042 · ROC-AUC: 99.40%)</span>
          </div>
        </div>
      ) : (
        <div className="lab-card">
          <div className="lab-presets">
            {[1, 3, 5].map(k => (
              <button key={k} type="button" className={shotK === k ? 'active' : ''} onClick={() => setShotK(k)}>
                3-Way {k}-Shot Support
              </button>
            ))}
            <span>Click the embedding plane to place a query image patch:</span>
          </div>
          <div
            className="proto-plane"
            onClick={e => {
              const r = e.currentTarget.getBoundingClientRect();
              setQueryPt({
                x: Math.round(((e.clientX - r.left) / r.width) * 100),
                y: Math.round(((e.clientY - r.top) / r.height) * 100),
              });
            }}
          >
            {prototypes.map((p, idx) => (
              <div key={p.name} className="proto-node" style={{ left: `${p.x}%`, top: `${p.y}%`, borderColor: p.color }}>
                <strong>{probs[idx]}%</strong>
                <span>{p.name}</span>
              </div>
            ))}
            <div className="query-node" style={{ left: `${queryPt.x}%`, top: `${queryPt.y}%` }} title="Query Sample" />
          </div>
        </div>
      )}
    </section>
  );
}
