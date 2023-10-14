interface PinSucessProps {
  props?: any
}

const PinSucess = ({ props }: PinSucessProps) => {
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
        <rect width="32" height="32" rx="16" fill="#8047F8" />
        <path
          d="M16 9C14.5418 9.00165 13.1438 9.58165 12.1127 10.6127C11.0816 11.6438 10.5017 13.0418 10.5 14.5C10.5 19.2063 15.5 22.7625 15.7125 22.9125C15.7977 22.9692 15.8977 22.9995 16 22.9995C16.1023 22.9995 16.2023 22.9692 16.2875 22.9125C16.5 22.7625 21.5 19.2063 21.5 14.5C21.4983 13.0418 20.9184 11.6438 19.8873 10.6127C18.8562 9.58165 17.4582 9.00165 16 9ZM16 12.5C16.3956 12.5 16.7822 12.6173 17.1111 12.8371C17.44 13.0568 17.6964 13.3692 17.8478 13.7346C17.9991 14.1001 18.0387 14.5022 17.9616 14.8902C17.8844 15.2781 17.6939 15.6345 17.4142 15.9142C17.1345 16.1939 16.7781 16.3844 16.3902 16.4616C16.0022 16.5387 15.6001 16.4991 15.2346 16.3478C14.8692 16.1964 14.5568 15.94 14.3371 15.6111C14.1173 15.2822 14 14.8956 14 14.5C14 13.9696 14.2107 13.4609 14.5858 13.0858C14.9609 12.7107 15.4696 12.5 16 12.5Z"
          fill="#FAFAFA"
        />
      </svg>
    </>
  )
}

export default PinSucess