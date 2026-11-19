import React, { createContext, useContext, useState } from 'react';
import { metrics as initialMetrics } from '../data/metrics';
import type { MetricCategory, Metric } from '../data/metrics';

interface MetricsContextType {
  metrics: MetricCategory[];
  updateMetric: (categoryId: string, metricId: string, updates: Partial<Metric>) => void;
  updateDocument: (categoryId: string, metricId: string, docIndex: number, updates: Partial<Document>) => void;
}

const MetricsContext = createContext<MetricsContextType>({
  metrics: initialMetrics,
  updateMetric: () => {},
  updateDocument: () => {},
});

export const useMetrics = () => useContext(MetricsContext);

export const MetricsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [metrics, setMetrics] = useState<MetricCategory[]>(initialMetrics);

  const updateMetric = (categoryId: string, metricId: string, updates: Partial<Metric>) => {
    setMetrics(prevMetrics => 
      prevMetrics.map(category => 
        category.id === categoryId
          ? {
              ...category,
              metrics: category.metrics.map(metric =>
                metric.id === metricId
                  ? { ...metric, ...updates }
                  : metric
              )
            }
          : category
      )
    );
  };

  const updateDocument = (categoryId: string, metricId: string, docIndex: number, updates: Partial<Document>) => {
    setMetrics(prevMetrics => 
      prevMetrics.map(category => 
        category.id === categoryId
          ? {
              ...category,
              metrics: category.metrics.map(metric =>
                metric.id === metricId && metric.documents
                  ? {
                      ...metric,
                      documents: metric.documents.map((doc, idx) =>
                        idx === docIndex ? { ...doc, ...updates } : doc
                      )
                    }
                  : metric
              )
            }
          : category
      )
    );
  };

  return (
    <MetricsContext.Provider value={{ metrics, updateMetric, updateDocument }}>
      {children}
    </MetricsContext.Provider>
  );
};