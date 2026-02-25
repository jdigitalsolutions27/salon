export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: "faq-booking",
    question: "How do I secure my appointment?",
    answer:
      "Choose your service, date, and time on our booking page. A small deposit may be requested for color, treatment, and bridal services.",
  },
  {
    id: "faq-cancellation",
    question: "What is your cancellation policy?",
    answer:
      "Please cancel or reschedule at least 24 hours before your appointment. Late cancellations may result in deposit forfeiture.",
  },
  {
    id: "faq-walkins",
    question: "Do you accept walk-ins?",
    answer:
      "Yes, when availability allows. We strongly recommend booking ahead for evenings and weekends.",
  },
  {
    id: "faq-hygiene",
    question: "How do you maintain hygiene and safety?",
    answer:
      "All tools are sterilized between clients, single-use items are disposed after service, and workstations are sanitized every session.",
  },
];
