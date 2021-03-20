import './styles.css';

type Props = {
    text: string;
}

const Button = ({ text }: Props) => (
    <button className="common-button">{text}</button>
);

export default Button;