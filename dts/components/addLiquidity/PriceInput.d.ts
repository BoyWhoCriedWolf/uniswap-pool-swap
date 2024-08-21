/// <reference types="react" />
declare function PriceInput({ label, value, onChange, }: {
    label?: string;
    value?: string;
    onChange?: (v: string) => void;
}): JSX.Element;
export default PriceInput;
