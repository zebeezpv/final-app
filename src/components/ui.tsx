import type {ReactNode} from 'react';
export const Card=({children,className=''}:{children:ReactNode;className?:string})=><div className={'card '+className}>{children}</div>;
export const Field=({label,children}:{label:string;children:ReactNode})=><label className="field"><span>{label}</span>{children}</label>;
export const Empty=({text='Nothing added yet.'}:{text?:string})=><div className="empty">{text}</div>;
export const PageHeader=({title,subtitle}:{title:string;subtitle?:string})=><div className="page-heading"><div><h1>{title}</h1>{subtitle&&<p>{subtitle}</p>}</div></div>;
