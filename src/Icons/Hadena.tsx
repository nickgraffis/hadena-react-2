import React from 'react';
import { FC } from 'react';

type Props = {
    className?: string
}
export const Hadena: FC<Props> = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      focusable="false"
      className={className || 'h-8 w-8'}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 128 128"
    >
      <path d="M124.77 84.32c-.63-.42-1.88-.77-3.02-1.06c-.44-.12-.86-.22-1.23-.34c-.81-.25-3.4-1.24-4.64-2.48c-3.56-3.57-.03-9.69 1.14-11.71c1.29-2.24 1.96-3.85 2.1-6.41a1.095 1.095 0 0 0-1.1-1.12c-1.82 0-4.49.91-6.25 1.51c-.79.27-1.42.48-1.93.61c-3.19.77-9.68 1.56-12.83 1.56c-1.32 0-2.58-.01-3.79-.02l-1.23-.01c-1.42-.01-2.79-.02-4.11-.02c-7.52 0-14.56.22-24.51 2.98c-3.78 1.05-9.07 2.99-13.16 5.05c-.87.44-5.43 2.96-7.73 4.92c-3.76 3.2-4.79 7.81-4.95 11.16c-.34 6.91 2.44 14.57 6.95 19.06c2.12 2.11 4.99 3.05 7.89 2.93c1.66-.07 2.83-.48 3.7-.67c3.55-.8 7.03-2.17 10.66-3.6c2.33-.92 3.45-1.4 5.79-2.15c.11-.04 1.16-.47 1.5-.66c.83-.46 1.55-1.04 2.1-1.94c1.2-1.92 1.48-4.36 1.58-6.58c.03-.67-.09-2.23 1.08-1.81c.36.13.76.62.95.94c.78 1.23 1.21 2.7 1.31 4.15c.05.72.01 1.44-.15 2.14c-.1.46-.57 1.3.08 1.55c.21.08.39 0 .61-.05c.57-.15 1.15-.28 1.73-.4c3.97-.8 9.26-1.22 9.26-1.22c6.25-.69 12.73-1.4 18.47-3.8c3.8-1.59 7.82-4.19 11.62-7.51c1.31-1.15 2.38-2.76 2.6-3.91c.05-.42-.13-.85-.49-1.09z" fill="currentColor" className="text-gray-500 group-hover:text-orange-400" />
      <path d="M119.19 35.03c-1.05-.32-3.87-1.22-4.66-2c-2.33-2.3.75-6.22 2.22-8.55c1.63-2.55 3.55-5.81 4.04-8.92c.69-4.42-8.63-1.25-11.2-.93c-3.18.39-7.47.93-13.2.4c-13.93-1.3-26.11-2.05-39.7 2.25c-5.04 1.6-12.16 4.6-16.63 7.45c-1.1.7-2.18 1.46-3.22 2.26c-.26.2-.53.39-.8.6c-.64.48-3.44 2.82-5.09 5.91c-1.43 2.66-2.13 5.41-2.33 7.68c-.6 7.29 2.25 15.43 7.12 20.26c2.42 2.41 5.91 3.57 9.35 3.37c1.88-.11 3.08-.54 3.42-.61c2.08-.4 4.13-.98 6.13-1.7c2.13-.77 6.36-2.5 8.4-3.47c1.38-.65 2.67-1.17 3.97-1.62c.33-.12 2.21-1.15 2.76-1.65c1.66-1.53 2.9-3.59 3.7-5.63c.35-.89.64-1.81.85-2.74c.28-1.25.35-2.54.26-3.81c-.09-1.35-.39-2.69-.56-4.03c-.05-.43-.06-.74.47-.83c.47-.08.88.39 1.16.72c.98 1.12 1.6 2.45 1.86 3.93c.53 2.93.76 6.21-.32 9.05c-.22.54-1.14 1.58-.4 2.11c.62.46 3.26-.15 3.5-.19c3.04-.39 6.1-.64 9.29-.91c6.03-.52 11.99-.35 17.84-2c4.87-1.37 9.29-3.21 12.97-6.14c1.49-1.19 4.4-3.47 5.33-6.53c.77-2.5-4-2.95-6.53-3.73z" fill="currentColor" className="text-gray-500 group-hover:text-blue-400" />
      <g fill="currentColor" className="text-gray-400 group-hover:text-lincoln">
        <path d="M26.49 7.9c-.46-.89-1.4-1.04-2.1-.33l-3.55 3.54c-.71.71-1.17 1.7-1.05 2.2v1c-.12.5.34 1.49 1.05 2.2l3.54 3.54c.71.71 1.66.56 2.11-.33c0 0 1.59-3.1 1.59-5.9c0-2.82-1.59-5.92-1.59-5.92z" />
        <path d="M12.44 8.09c.7.7 1.7 1.17 2.2 1.04h.99c.5.13 1.49-.34 2.2-1.04l3.54-3.54c.7-.71.55-1.66-.34-2.11c0 0-3.1-1.59-5.91-1.59c-2.8 0-5.9 1.59-5.9 1.59c-.88.46-1.02 1.41-.32 2.12l3.54 3.53z" />
        <path d="M17.82 19.51c-.71-.7-1.7-1.17-2.2-1.04h-.99c-.5-.13-1.49.34-2.2 1.04L8.9 23.05c-.71.71-.56 1.66.33 2.11c0 0 3.09 1.59 5.89 1.59c2.81 0 5.91-1.59 5.91-1.59c.89-.45 1.04-1.4.33-2.11l-3.54-3.54z" />
        <path d="M10.46 13.8v-.5c.13-.5-.33-1.49-1.04-2.2L5.89 7.57c-.71-.7-1.66-.56-2.12.33c0 0-1.59 3.1-1.59 5.9c0 2.8 1.59 5.9 1.59 5.9c.46.89 1.41 1.04 2.12.33l3.53-3.54c.7-.7 1.17-1.7 1.04-2.2v-.49z" />
      </g>
      <path d="M19.54 30.08c-.23-.13-.57.1-.79.17c-.81.25-1.67.36-2.53.35c-.41-.01-.82-.05-1.22-.12c-.25-.05-.66-.12-.61.27c0 .04.01.08.02.12c.02.1.02.2.03.3l.12.87l.15 1.15c.06.47.13.94.19 1.41c.08.55.15 1.1.23 1.66c.07.63.17 1.26.26 1.89c.09.7.18 1.4.28 2.1c.1.77.21 1.53.31 2.3c.11.83.23 1.65.33 2.48l.36 2.65c.13.93.25 1.87.38 2.8c.13.98.26 1.96.4 2.93l.42 3.05c.14 1.05.29 2.11.42 3.16c.15 1.08.3 2.16.44 3.24l.45 3.31c.15 1.12.3 2.25.46 3.37c.15 1.13.31 2.27.46 3.4c.15 1.14.3 2.28.46 3.43c.15 1.15.31 2.29.46 3.43c.16 1.14.32 2.28.47 3.42l.45 3.39c.15 1.12.31 2.23.46 3.35c.15 1.1.29 2.2.44 3.3c.15 1.07.29 2.14.44 3.22l.42 3.12l.42 3.02c.12.97.26 1.93.4 2.9c.12.92.25 1.84.37 2.76c.12.87.24 1.73.35 2.6l.33 2.43l.3 2.24c.09.68.19 1.36.27 2.04c.08.61.17 1.21.25 1.82l.21 1.58l.18 1.33c.05.35.1.71.14 1.06c.04.26.07.52.11.78c.02.16.04.32.07.48c.01.05.01.11.02.16a2.679 2.679 0 0 0 3 2.29c1.46-.2 2.49-1.54 2.28-3v-.07c-.02-.12-.03-.25-.05-.38c-.04-.23-.06-.45-.09-.68c-.04-.33-.09-.65-.13-.98c-.06-.42-.11-.83-.17-1.25c-.08-.5-.14-1.01-.21-1.51l-.24-1.76c-.09-.66-.18-1.33-.26-1.99c-.11-.73-.2-1.46-.3-2.19l-.33-2.39c-.11-.85-.22-1.71-.34-2.57c-.12-.91-.25-1.82-.38-2.72c-.12-.96-.25-1.92-.38-2.88c-.14-1-.27-2-.41-3l-.42-3.11c-.15-1.07-.29-2.14-.43-3.21c-.15-1.1-.3-2.19-.44-3.29c-.16-1.12-.31-2.23-.46-3.35c-.15-1.13-.3-2.27-.46-3.4c-.16-1.14-.31-2.29-.47-3.43c-.15-1.15-.31-2.3-.46-3.44c-.15-1.15-.31-2.3-.47-3.44c-.15-1.14-.31-2.28-.46-3.42c-.16-1.13-.31-2.26-.46-3.39l-.45-3.33c-.15-1.09-.29-2.18-.44-3.27c-.15-1.06-.29-2.12-.43-3.18l-.42-3.08c-.14-.99-.27-1.98-.4-2.97c-.12-.95-.25-1.89-.38-2.83l-.36-2.68c-.11-.84-.22-1.67-.34-2.52c-.11-.78-.21-1.55-.32-2.33c-.1-.71-.19-1.42-.29-2.13c-.08-.64-.17-1.28-.26-1.92c-.08-.56-.15-1.12-.23-1.69c-.07-.48-.13-.96-.2-1.44c-.05-.39-.11-.79-.16-1.18l-.12-.9c-.01-.11-.03-.22-.05-.34c-.01-.11-.02-.21-.1-.3a.311.311 0 0 0-.09-.07z" fill="currentColor" className="group-hover:text-lincoln text-gray-400" />
      <path d="M63.63 42.05c-3.58.87-7.51-2.19-8.49-5.57c-.17-.56-.28-1.19-.39-1.77c-.88-4.85 3.5-8.62 8.11-7.1c3.7 1.22 6.15 6.37 5.17 10.11c-.46 1.81-2.55 3.88-4.4 4.33z" fill="currentColor" className="text-gray-300 group-hover:text-cullen" />
      <path d="M62.64 38.73c-1.95.48-4.1-1.19-4.63-3.04c-.09-.31-.15-.65-.21-.97c-.48-2.64 1.91-4.7 4.43-3.88c2.02.67 3.35 3.47 2.83 5.52c-.27.99-1.41 2.13-2.42 2.37z" fill="#2f2f2f" />
      <g fill="currentColor" className="group-hover:text-orange-200 text-gray-300">
        <path d="M80 75.84c-.09-.28-.18-.56-.25-.85c-.07-.3-.16-.6-.27-.88c-.44-1.15 1.3-.93 2-.86c.76.09 1.49.42 2.05.94c.89.83 1.17 2.15 1.01 3.31c-.18 1.36-1.12 2.13-2.17 2.91c-.39.29-.93.42-1.18-.1c-.23-.47-.28-1.04-.4-1.53c-.17-.68-.37-1.39-.54-2.08c-.08-.3-.16-.58-.25-.86z" />
        <path d="M82.47 85.24c-.09-.28-.19-.56-.25-.85c-.07-.3-.16-.6-.27-.88c-.45-1.15 1.3-.93 2-.86c.76.09 1.49.42 2.05.94c.89.83 1.16 2.15 1.01 3.31c-.19 1.36-1.13 2.13-2.17 2.91c-.39.29-.93.42-1.19-.1c-.23-.47-.27-1.04-.39-1.53c-.17-.68-.37-1.39-.53-2.08c-.09-.3-.17-.58-.26-.86z" />
        <path d="M95.52 74.88c-.09-.28-.17-.57-.25-.85c-.07-.29-.15-.6-.25-.89c-.44-1.15 1.31-.92 2-.84c.76.1 1.48.43 2.05.96c.88.83 1.15 2.16.98 3.32c-.2 1.35-1.15 2.12-2.21 2.89c-.38.29-.92.42-1.18-.11c-.23-.47-.26-1.04-.39-1.54c-.16-.68-.35-1.39-.51-2.08c-.06-.3-.14-.58-.24-.86z" />
        <path d="M97.91 84.31c-.08-.28-.17-.57-.25-.86c-.07-.3-.15-.6-.26-.89c-.43-1.15 1.31-.92 2.01-.84c.76.1 1.48.43 2.04.96c.88.83 1.15 2.16.98 3.32c-.2 1.36-1.15 2.12-2.2 2.89c-.39.29-.93.42-1.18-.11c-.22-.46-.26-1.04-.38-1.53c-.17-.68-.35-1.39-.52-2.09c-.07-.29-.15-.57-.24-.85z" />
        <path d="M85.83 70.39c-.1-.28-.2-.56-.28-.85c-.09-.29-.18-.6-.31-.88c-.48-1.13 1.27-.98 1.97-.92c.77.06 1.5.36 2.09.87c.91.79 1.24 2.11 1.12 3.28c-.14 1.37-1.06 2.17-2.08 2.98c-.38.3-.91.45-1.19-.06c-.24-.45-.3-1.03-.44-1.52c-.2-.67-.42-1.38-.6-2.06c-.08-.29-.18-.56-.28-.84z" />
        <path d="M88.45 79.84c-.09-.28-.17-.57-.24-.86c-.08-.29-.16-.6-.27-.89c-.43-1.15 1.31-.92 2-.83c.77.09 1.49.43 2.04.96c.89.83 1.15 2.16.98 3.32c-.2 1.36-1.15 2.12-2.21 2.89c-.39.29-.93.41-1.19-.11c-.22-.47-.26-1.05-.38-1.54c-.16-.68-.35-1.39-.51-2.08c-.05-.3-.13-.58-.22-.86z" />
        <path d="M90.86 89.63c-.09-.28-.17-.57-.25-.86c-.07-.3-.15-.6-.25-.89c-.44-1.15 1.31-.92 2-.84c.77.1 1.49.43 2.05.96c.88.83 1.14 2.16.97 3.32c-.2 1.36-1.15 2.12-2.2 2.89c-.39.28-.94.41-1.18-.11c-.22-.47-.26-1.04-.38-1.54c-.17-.68-.36-1.39-.51-2.08c-.09-.29-.17-.57-.25-.85z" />
        <path d="M100.96 70.09c-.1-.28-.21-.55-.3-.84c-.08-.29-.19-.59-.32-.87c-.51-1.12 1.25-1 1.95-.97c.76.05 1.5.33 2.1.82c.93.78 1.28 2.09 1.19 3.25c-.11 1.37-1.01 2.19-2.02 3.02c-.37.31-.9.48-1.19-.03c-.25-.45-.33-1.02-.48-1.51c-.21-.67-.45-1.36-.65-2.05c-.07-.27-.18-.55-.28-.82z" />
        <path d="M103.77 79.48c-.09-.28-.18-.56-.26-.85c-.08-.29-.17-.6-.28-.88c-.46-1.14 1.3-.95 1.98-.88c.78.08 1.5.4 2.08.92c.9.81 1.19 2.14 1.03 3.3c-.17 1.36-1.11 2.14-2.14 2.93c-.39.3-.93.43-1.19-.09c-.22-.46-.28-1.04-.41-1.53c-.17-.67-.38-1.38-.55-2.07c-.08-.29-.17-.57-.26-.85z" />
        <path d="M106.37 89.22c-.09-.28-.18-.56-.26-.85c-.08-.29-.17-.6-.28-.88c-.45-1.14 1.3-.95 1.98-.88c.77.08 1.49.4 2.07.92c.9.81 1.19 2.14 1.05 3.3c-.17 1.36-1.11 2.15-2.15 2.93c-.38.29-.92.43-1.19-.08c-.23-.47-.28-1.04-.41-1.53c-.17-.67-.38-1.38-.55-2.07c-.08-.3-.17-.58-.26-.86z" />
      </g>
      <path d="M70.41 90c-3.33 1.08-7.23-1.75-8.36-5.07c-.19-.55-.34-1.17-.48-1.74c-1.13-4.79 2.79-8.81 7.24-7.56c3.57 1.01 6.19 6.01 5.5 9.8c-.32 1.82-2.18 4.02-3.9 4.57z" fill="currentColor" className="text-gray-300 group-hover:text-cullen" />
      <path d="M69.18 86.46c-1.68.54-3.66-.89-4.23-2.57c-.1-.27-.17-.59-.24-.88c-.58-2.42 1.41-4.45 3.67-3.82c1.8.51 3.12 3.04 2.78 4.95c-.17.93-1.11 2.04-1.98 2.32z" fill="#2f2f2f" />
      <path d="M48.01 80.73c-1.01.11-1.97.55-2.87 1.31c-2.73 2.35-3.41 5.75-3.5 8.19c-.18 5.04 1.92 10.59 5.23 13.81c1.56 1.51 3.66 2.25 5.77 2.04c1.85-.19 3.45-1.12 4.51-2.62c3.08-4.35 2.06-11.82-.47-16.63c-1.69-3.21-5.3-6.44-8.67-6.1z" fill="currentColor" className="text-gray-300 group-hover:text-cullen" />
      <g fill="currentColor" className="group-hover:text-orange-200 text-gray-300">
        <path d="M76.79 27.43c-.09-.29-.18-.58-.26-.88c-.08-.3-.16-.62-.28-.91c-.46-1.19 1.35-.97 2.06-.89c.79.09 1.54.43 2.12.97c.92.85 1.21 2.22 1.05 3.42c-.19 1.41-1.17 2.2-2.25 3.01c-.4.3-.96.44-1.23-.1c-.24-.48-.28-1.08-.41-1.58c-.18-.7-.38-1.43-.55-2.15c-.06-.3-.16-.6-.25-.89z" />
        <path d="M79.34 37.15c-.09-.29-.18-.58-.26-.88c-.08-.3-.16-.62-.28-.92c-.47-1.18 1.34-.96 2.06-.88c.79.09 1.53.43 2.13.97c.92.85 1.21 2.23 1.04 3.43c-.19 1.41-1.17 2.2-2.25 3.01c-.4.3-.96.44-1.22-.1c-.24-.48-.29-1.08-.42-1.59c-.17-.7-.38-1.43-.55-2.15c-.06-.3-.16-.59-.25-.89z" />
        <path d="M92.85 26.45c-.09-.29-.18-.58-.26-.88c-.08-.3-.15-.62-.27-.92c-.45-1.19 1.35-.95 2.07-.87c.79.1 1.54.44 2.12.99c.92.86 1.18 2.23 1.01 3.43c-.2 1.4-1.19 2.19-2.27 2.99c-.41.3-.97.43-1.23-.11c-.24-.48-.27-1.08-.39-1.59c-.17-.7-.37-1.43-.53-2.15c-.08-.31-.17-.6-.25-.89z" />
        <path d="M95.31 36.19c-.1-.29-.19-.59-.26-.89a7.4 7.4 0 0 0-.26-.92c-.46-1.19 1.35-.95 2.06-.87c.79.1 1.53.45 2.12.99c.91.86 1.19 2.23 1.01 3.43c-.2 1.4-1.18 2.2-2.28 2.99c-.4.3-.96.43-1.23-.12c-.23-.48-.27-1.08-.39-1.58c-.17-.71-.37-1.43-.53-2.16c-.07-.28-.15-.58-.24-.87z" />
        <path d="M82.83 21.79c-.1-.29-.21-.58-.29-.87c-.09-.3-.18-.62-.31-.91c-.5-1.17 1.31-1.01 2.03-.95c.79.06 1.55.38 2.15.9c.95.82 1.28 2.18 1.16 3.38c-.14 1.42-1.09 2.25-2.15 3.09c-.39.31-.95.47-1.23-.06c-.25-.47-.32-1.07-.46-1.57c-.2-.7-.43-1.42-.62-2.13c-.08-.3-.19-.59-.28-.88z" />
        <path d="M85.53 31.57c-.08-.29-.18-.59-.25-.89c-.08-.3-.16-.62-.27-.91c-.45-1.19 1.35-.95 2.07-.87c.79.1 1.54.45 2.12 1c.91.85 1.18 2.23 1.01 3.43c-.2 1.4-1.19 2.19-2.28 2.98c-.4.3-.96.43-1.23-.11c-.23-.48-.27-1.08-.39-1.59c-.17-.7-.36-1.44-.52-2.15c-.08-.31-.17-.6-.26-.89z" />
        <path d="M88.02 41.69c-.09-.29-.18-.58-.25-.89c-.07-.3-.16-.62-.27-.92c-.45-1.19 1.36-.95 2.08-.86c.79.1 1.53.45 2.11.99c.92.86 1.19 2.24 1.01 3.43c-.21 1.41-1.19 2.19-2.28 2.99c-.4.3-.96.42-1.22-.12c-.23-.48-.26-1.08-.39-1.59c-.17-.7-.36-1.44-.53-2.15c-.09-.29-.17-.58-.26-.88z" />
        <path d="M98.46 21.49c-.1-.29-.21-.58-.31-.87c-.09-.3-.2-.61-.33-.9c-.52-1.16 1.3-1.04 2.01-1c.8.05 1.55.35 2.17.85c.97.8 1.33 2.16 1.23 3.36c-.12 1.41-1.05 2.27-2.08 3.13c-.38.32-.94.49-1.23-.03c-.26-.47-.34-1.06-.49-1.56c-.22-.69-.46-1.41-.67-2.11c-.09-.3-.19-.59-.3-.87z" />
        <path d="M101.38 31.2c-.1-.29-.2-.58-.28-.88c-.08-.3-.17-.62-.29-.91c-.47-1.18 1.34-.98 2.06-.9c.79.08 1.54.41 2.13.95c.92.84 1.23 2.21 1.08 3.41c-.17 1.41-1.14 2.21-2.22 3.03c-.4.3-.96.45-1.23-.09c-.24-.48-.29-1.07-.43-1.58c-.18-.7-.39-1.43-.57-2.14c-.07-.31-.16-.6-.25-.89z" />
        <path d="M104.06 41.28c-.1-.29-.19-.59-.27-.88c-.08-.3-.17-.62-.29-.91c-.47-1.18 1.34-.98 2.05-.9c.8.08 1.54.41 2.14.95c.93.84 1.23 2.21 1.08 3.41c-.18 1.41-1.15 2.22-2.22 3.03c-.39.3-.96.45-1.23-.09c-.24-.48-.29-1.08-.42-1.58c-.18-.7-.39-1.43-.58-2.14c-.08-.32-.17-.6-.26-.89z" />
      </g>
      <path d="M40.1 32.78c-1.19.17-2.31.68-3.34 1.54c-3.11 2.6-3.86 6.27-3.95 8.89c-.17 5.34 2.22 11.18 5.95 14.53c1.85 1.67 4.45 2.46 6.95 2.12c2.13-.3 3.97-1.37 5.18-3.02c3.44-4.72 2.27-12.62-.58-17.66c-1.99-3.52-6.24-6.95-10.21-6.4z" fill="currentColor" className="text-gray-300 group-hover:text-cullen" />
    </svg>

  );
};