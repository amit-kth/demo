type WhatsAppIconProps = {
  className?: string;
};

export function WhatsAppIcon({ className = "" }: WhatsAppIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 11.7a8 8 0 0 1-11.7 7.1L4 20l1.2-4.1A8 8 0 1 1 20 11.7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.4 8.4c.2-.5.4-.5.7-.5h.6c.2 0 .4.1.5.4l.9 2c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4-.1.6.4.8 1.1 1.5 1.8 2 .7.5 1.3.7 1.8.8.2 0 .4 0 .5-.2l.8-.9c.2-.2.4-.2.6-.1l1.7.8c.2.1.3.2.3.4 0 .5-.2 1.1-.5 1.4-.4.4-1.1.6-1.8.5-1.1-.1-2.4-.7-3.8-1.8-1.6-1.2-2.7-2.9-3-3.8-.3-.8-.2-1.8.2-2.9Z"
        fill="currentColor"
      />
    </svg>
  );
}
