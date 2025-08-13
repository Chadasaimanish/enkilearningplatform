import React from 'react';

export const PythonIcon: React.FC = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <title>Python</title>
    <path d="M11.25 8.242c.633 0 1.201-.365 1.201-.986 0-.622-.568-.986-1.201-.986H7.79v1.972h3.46zM12.75 15.75c.633 0 1.201.364 1.201.986 0 .622-.568.986-1.201.986H7.79v-1.972h4.96zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM17.394 15.28c-.14-.236-1.07-1.57-1.07-1.57s-.328-.403-.842-.403h-3.483v-3.32h5.228c2.253 0 3.197-2.022 2.82-4.275-.155-.933-1.033-1.63-2.146-1.63h-7.79c-2.88 0-4.11 2.58-4.11 4.953v9.01c0 2.217 1.353 4.164 4.11 4.164h7.79c1.944 0 2.93-.842 2.93-2.147 0-1.12-.621-1.74-1.21-2.28z" fill="#3776AB"/>
  </svg>
);

export const JavaScriptIcon: React.FC = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <title>JavaScript</title>
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.475 2.221-2.24 3.724-4.413 3.724-1.46 0-2.673-.67-3.418-1.616l2.115-1.28c.38.64.965 1.055 1.633 1.055.93 0 1.616-.626 1.616-1.488 0-.91-.73-1.396-1.856-2.005l-.995-.53c-1.633-.865-2.718-1.94-2.718-3.723 0-1.83 1.432-3.215 3.446-3.215 1.28 0 2.31.516 3.02 1.489l-1.94 1.34c-.34-.516-.837-.82-1.396-.82-.73 0-1.25.488-1.25 1.25 0 .81.548 1.22 1.66 1.83l.995.53c2.034 1.08 3.13 2.12 3.13 3.865zm-11.451.277h2.24v-4.99c0-.685.08-1.37.24-1.88h.08c.28.625.56 1.25.965 1.88l1.79 3.02h2.06l-2.61-4.3c-.83-1.396-1.23-2.31-1.23-3.215 0-1.115.75-1.857 1.8-1.857.25 0 .5.05.75.15V3.127c-.3-.07-.6-.12-.91-.12-1.46 0-2.43.996-2.43 2.89v4.242h-2.12v2.12z" fill="#F7DF1E"/>
  </svg>
);

export const JavaIcon: React.FC = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <title>Java</title>
        <path d="M12.01 24C9.43 24 4.81 22.84 4.81 18.81c0-2.19 1.12-3.32 2.6-3.88l5.22-1.89-1.57-2.79-5.48.9c-.38.06-1.11-.29-1.11-.69V9.4c0-.4.38-.69.75-.69.23 0 .44.09.63.26l6.63 5.42 2.19-3.71V5.21c0-.4-.38-.69-.75-.69-.23 0-.44.09-.63.26l-6.68 5.43c-.4.32-1.11.1-1.11-.42V5.03c0-.4.38-.69.75-.69h.38c.37 0 .69.26.69.6v4.03l7.35-6.01c.4-.32 1.11-.1 1.11.42v5.48l2.19-3.71c.4-.66 1.41-.66 1.81 0l1.22 2.08c.4.66.13 1.61-.54 2.01L15.3 14.15l-1.91 3.32 5.86 2.13c1.47.53 2.6 1.69 2.6 3.88C21.85 22.84 17.23 24 14.65 24c-1.3 0-2.64-.47-2.64-1.63 0-1.47 1.94-1.47 3.32-1.47 1.44 0 2.25.47 2.25 1.16 0 .69-.97 1.25-2.28 1.25-1.3 0-2.28-.56-2.28-1.57z" fill="#f89820"/>
    </svg>
);

export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const XCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const LightBulbIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

export const GoogleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Google</title>
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-5.067 2.4-4.354 0-7.893-3.573-7.893-7.96s3.539-7.96 7.893-7.96c2.353 0 4.16.973 5.2 2.013l2.6-2.6C16.92 1.693 14.96.933 12.48.933c-6.4 0-11.52 5.12-11.52 11.467s5.12 11.467 11.52 11.467c6.2 0 11.16-4.34 11.16-11.34 0-.747-.067-1.493-.2-2.24H12.48z" fill="currentColor"/>
  </svg>
);

export const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export const LockIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);