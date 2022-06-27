type LayerProps = {
  className: string
}

export function Layer(props: LayerProps){
  return(
    <span className={`absolute top-0 left-0 w-full h-full duration-500 flex items-center justify-center text-white text-[30px] ${props.className} `}></span>
  )
}