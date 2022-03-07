export const Badge = ({ value }) => {
    const text = value ? 'Enabled' : 'Disabled';
    const cn = value ? 'badge__enabled' : 'badge__disabled';

    return (
        <small className={cn}>{text}</small>
    );
}