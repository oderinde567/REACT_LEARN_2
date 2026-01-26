interface BadgeProps{
    label: string;
    color: 'red' | 'blue' | 'green';
    // Union type: limits values to specific strings 
}

// Type annotation: this is a React Funtion Component with BadgeProps type.
export const Badge: React.FC<BadgeProps> = ({label, color}) => {
    return(
        <span style={{backgroundColor:color, padding: '5px', 'color' : 'white'}}>
            {label}
        </span>
    )
}