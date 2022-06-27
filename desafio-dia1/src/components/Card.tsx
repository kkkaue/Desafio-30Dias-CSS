import { Layer } from "./Layer";

type CardProps = {
  className: string
  icon: string
}

export function Card(props : CardProps) {
  return (
    <li className="relative list-none w-[60px] h-[60px] my-0 mx-[30px] rotate-[-30deg] skew-x-[25deg] bg-[#ccc] hover:shadow-[-1px_1px_1px_rgba(0,0,0,0.1)] group ">
      <a href="#">
        <Layer className={`group-hover:translate-x-0 group-hover:-translate-y-0 group-hover:opacity-[0.2] ${props.className}`}/>
        <Layer className={`group-hover:translate-x-[10px] group-hover:-translate-y-[10px] group-hover:opacity-40 ${props.className}`}/>
        <Layer className={`group-hover:translate-x-5 group-hover:-translate-y-5 group-hover:opacity-60 ${props.className}`}/>
        <Layer className={`group-hover:translate-x-[30px] group-hover:-translate-y-[30px] group-hover:opacity-80 ${props.className}`}/>
        <Layer className={`group-hover:translate-x-10 group-hover:-translate-y-10 group-hover:opacity-100 ${props.className} ${props.icon}`}/>
      </a>
    </li>
  )
}
