export default function ScrollDown() {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      xmlSpace="preserve"
      className="border-4 border-bgcolor rounded-full w-16 h-16"
    >
      <style>
        {`
        .circle-content {
          fill: transparent;
          transition: fill 0.3s;
        }
        .circle-border {
          transition: border 0.3s;
        }
        .circle-border:hover {
          border-width: 0;
        }
        .svg-container:hover .arrow-mask {
          fill: transparent;
        }
        .arrow-mask:hover {
          transition: fill 0.3s;
        }
      `}
      </style>

      <defs>
        <mask id="arrow-mask">
          <rect x="0" y="0" width="128" height="128" fill="white" />
          <path
            d="M66.7 88.5V24h-5.3v64.5L37.1 64.2 33.3 68 64 98.8l.1-.1.1.1L94.9 68 91 64.2 66.7 88.5z"
            className="arrow-mask  animate-bounce"
            fill="black"
          />
        </mask>
      </defs>

      <g className="svg-container">
        <circle
          cx="64"
          cy="64"
          r="64"
          className="circle-border"
          fill="transparent"
        />
        <circle
          cx="64"
          cy="64"
          r="64"
          className="circle-content hover:fill-bgcolor"
          mask="url(#arrow-mask)"
        />
        <path
          d="M66.7 88.5V24h-5.3v64.5L37.1 64.2 33.3 68 64 98.8l.1-.1.1.1L94.9 68 91 64.2 66.7 88.5z"
          className="arrow-mask fill-bgcolor animate-bounce"
        />
      </g>
    </svg>
  );
}
