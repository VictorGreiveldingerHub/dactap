import * as React from "react"


interface SvgComponentProps {
  fill: string,
  fill2: string,
  width: string,
  height: string
}

const SvgComponent: React.FC<SvgComponentProps> = ({fill, fill2, width, height}) => {
  return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className="transparent"
    >
       <path
        fill="currentColor"
        width={width}
        height={height}
        d="M762 0H0v227.5s53.917-24 199-24 311.805 66 387.5 66 175.5-104 175.5-104V0Z"
      />
      {/*
      <path
        fill="currentColor"
        d="M762 0H0v227.5s109.672-48.916 227-45c117.328 3.916 204.5 50 316 45s219-61.946 219-61.946V0Z"
      /> */}
    </svg>
  )
}

export default SvgComponent