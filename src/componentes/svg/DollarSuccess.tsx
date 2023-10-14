interface DollarSuccessProps {
  props?: any
}

const DollarSuccess = ({ props }: DollarSuccessProps) => {
  return (
    <>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect width="32" height="32" rx="16" fill="#C47F17" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 9C16.2761 9 16.5 9.22386 16.5 9.5V22.5C16.5 22.7761 16.2761 23 16 23C15.7239 23 15.5 22.7761 15.5 22.5V9.5C15.5 9.22386 15.7239 9 16 9Z"
          fill="#FAFAFA"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.6287 11.3787C13.1913 10.8161 13.9544 10.5 14.75 10.5H17C17.394 10.5 17.7841 10.5776 18.1481 10.7284C18.512 10.8791 18.8427 11.1001 19.1213 11.3787C19.3999 11.6573 19.6209 11.988 19.7716 12.3519C19.9224 12.7159 20 13.106 20 13.5C20 13.7761 19.7761 14 19.5 14C19.2239 14 19 13.7761 19 13.5C19 13.2374 18.9483 12.9773 18.8478 12.7346C18.7473 12.492 18.5999 12.2715 18.4142 12.0858C18.2285 11.9001 18.008 11.7528 17.7654 11.6522C17.5227 11.5517 17.2626 11.5 17 11.5H14.75C14.2196 11.5 13.7109 11.7107 13.3358 12.0858C12.9607 12.4609 12.75 12.9696 12.75 13.5C12.75 14.0304 12.9607 14.5391 13.3358 14.9142C13.7109 15.2893 14.2196 15.5 14.75 15.5H17.5C18.2956 15.5 19.0587 15.8161 19.6213 16.3787C20.1839 16.9413 20.5 17.7044 20.5 18.5C20.5 19.2956 20.1839 20.0587 19.6213 20.6213C19.0587 21.1839 18.2956 21.5 17.5 21.5H14.5C13.7044 21.5 12.9413 21.1839 12.3787 20.6213C11.8161 20.0587 11.5 19.2956 11.5 18.5C11.5 18.2239 11.7239 18 12 18C12.2761 18 12.5 18.2239 12.5 18.5C12.5 19.0304 12.7107 19.5391 13.0858 19.9142C13.4609 20.2893 13.9696 20.5 14.5 20.5H17.5C18.0304 20.5 18.5391 20.2893 18.9142 19.9142C19.2893 19.5391 19.5 19.0304 19.5 18.5C19.5 17.9696 19.2893 17.4609 18.9142 17.0858C18.5391 16.7107 18.0304 16.5 17.5 16.5H14.75C13.9544 16.5 13.1913 16.1839 12.6287 15.6213C12.0661 15.0587 11.75 14.2956 11.75 13.5C11.75 12.7044 12.0661 11.9413 12.6287 11.3787Z"
          fill="#FAFAFA"
        />
      </svg>
    </>
  )
}

export default DollarSuccess
