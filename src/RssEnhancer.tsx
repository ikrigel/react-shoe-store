import { FunctionComponent } from "react";
import RssEnhancer, { InjectionRSSProps } from "react-rss";
import "./RssEnhancer.css";

const DefaultRSSComponent: FunctionComponent<{ label: string } & InjectionRSSProps> = props => (
    
    <div>
        console.log(`Console - ${props.rss.header.link}`);
        
        <h2>{props.label}</h2>
        <a href={props.rss.header.link}>
            {props.rss.header.title}
        </a>
        <ul>
            {props.rss.items.map(item => (
                <li>
                    {item.description}
                </li>
            ))}
        </ul>
    </div>
);
export default RssEnhancer(
    DefaultRSSComponent,
    'https://techbeacon.com/rss.xml',
);