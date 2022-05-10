import Bar from './Bar'

export default function Visualizer({ elements }) {
    return (
        <>
            {
                elements.map(val => 
                    <Bar key={val} val={val}/>
                )
            }
        </>
    );
} 