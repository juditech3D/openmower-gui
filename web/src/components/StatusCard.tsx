import React from 'react';
import { useTranslation } from 'react-i18next';

interface StatusCardProps {
  label: string;
  value: string | number | boolean;
}

export const StatusItem = ({ label, value }: StatusCardProps) => (
  <div className="flex justify-between border-b border-gray-300 py-1">
    <span>{label}</span>
    <span>{String(value)}</span>
  </div>
);
