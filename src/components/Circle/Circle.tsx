type CircleProps = {
    num?: number;
};
const Circle:React.FC<CircleProps> = ({num}: CircleProps) => {
    return (
        <div className={`circle circle${num}`}></div>
    );
}
export default Circle;