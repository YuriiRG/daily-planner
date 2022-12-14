import { useState } from 'react';
import ContentEditable from 'react-contenteditable';
import { useMainStore } from '../store';

type NotesEditorProps = {
  dayId: string;
};

export default function NotesEditor({ dayId }: NotesEditorProps) {
  const html = useMainStore((s) => s.days.find((d) => d.id === dayId)?.notes);
  const setHtml = useMainStore(
    (s) => (newHtml: string) => s.editNotes(dayId, newHtml)
  );
  if (html === undefined) {
    throw new Error('Day not found');
  }
  return (
    <ContentEditable
      html={html}
      onChange={(e) => setHtml(e.target.value)}
      className='m-2 break-words rounded-lg border-2 border-gray-500 p-2 outline-none sm:basis-[30rem]'
    />
  );
}
