import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const PatchHistoryElement = ({ title, subtitle, blogUrl, dateString }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: 'var(--ifm-card-background-color)',
      color: 'var(--ifm-font-color-base)',
      boxShadow: 'var(--ifm-global-shadow-md)',
    }}
    contentArrowStyle={{
      borderRight: '7px solid var(--ifm-card-background-color)',
    }}
    date={dateString}
    iconStyle={{
      background: 'var(--ifm-color-primary)',
      color: 'var(--ifm-font-color-base-inverse)',
    }}
    dateClassName="dateLabel"
  >
    <a
      href={blogUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: 'var(--ifm-link-color)',
        textDecoration: 'none',
      }}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4
        className="vertical-timeline-element-subtitle"
        style={{ color: 'var(--ifm-color-emphasis-600)' }}
      >
        {subtitle}
      </h4>
    </a>
  </VerticalTimelineElement>
);