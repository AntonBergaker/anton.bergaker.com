import styles from "./slider_with_input.module.scss";
const { sliderBox, sliderAndLabel } = styles;

type Props = {
    id: string;
    label: string;
    minValue: number;
    maxValue: number;
    defaultValue: number;
    integer: boolean;
};

export default function SliderWithInput({ id, label, minValue, maxValue, defaultValue, integer }: Props) {
    const step = integer ? 1 : "any";

    return (
        <div id={id} className={sliderAndLabel}>
            <label htmlFor={id}>{label}</label>
            <div className={sliderBox}>
                <input type="range" min={minValue} max={maxValue} step={step} defaultValue={defaultValue} />
                <input type="number" min={minValue} max={maxValue} step={step} defaultValue={defaultValue} />
            </div>
        </div>
    );
}
