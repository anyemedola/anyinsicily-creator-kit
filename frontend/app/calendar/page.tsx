import CalendarContent from '@/components/calendar/CalendarContent';

export const metadata = {
  title: 'Private Content Calendar',
  description: 'Private content strategy calendar for Any in Sicily.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function CalendarPage() {
  return <CalendarContent />;
}
