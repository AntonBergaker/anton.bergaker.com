import styles from "./index.module.scss";
const { languageBox } = styles;

type Props = {
    title: string;
    description: string;
};

export default function LanguageBox({ title, description }: Props) {
    return (
        <div className={languageBox}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
