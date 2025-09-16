import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const PatchHistoryElement = ({ title, subtitle, blogUrl, dateString }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work patch-history-element"
    contentStyle={{
      background: 'var(--ifm-card-background-color)',
      color: 'var(--ifm-font-color-base)',
      boxShadow: 'var(--ifm-global-shadow-md)',
      transition:
        'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.5s ease',
      cursor: 'pointer',
      padding: 0,
    }}
    contentArrowStyle={{
      borderRight: '7px solid var(--ifm-card-background-color)',
    }}
    date={dateString}
    iconStyle={{
      background: 'var(--ifm-color-primary)',
      color: 'var(--ifm-font-color-base-inverse)',
      transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
    }}
    dateClassName="dateLabel"
  >
    <a
      href={blogUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="patch-history-card-link"
    >
      <div className="patch-history-card-content">
        <h3 className="vertical-timeline-element-title">{title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      </div>
    </a>
  </VerticalTimelineElement>
);