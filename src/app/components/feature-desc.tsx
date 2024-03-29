import FeatureList from './feature-list';
import checkedIcon from '../../../public/icons/checked.svg';

const features = [
    { src: checkedIcon, alt: "checked icon", text: "Easy management of vendor information" },
    { src: checkedIcon, alt: "promotion icon", text: "Effortless order tracking and processing" },
    { src: checkedIcon, alt: "promotion icon", text: "Real-time inventory monitoring" },
    { src: checkedIcon, alt: "promotion icon", text: "Increased productivity and efficiency" }
];

export interface FeatureDescProps {}

export default function FeatureDesc({}: FeatureDescProps) {
    return (
        <div className="w-1/2">
            <h1 className="text-center text-4xl font-bold mb-10">CRM for vendors</h1>
            <FeatureList features={ features } />
        </div>
    );
}