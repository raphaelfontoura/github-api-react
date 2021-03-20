import ImageLoader from "core/components/Loaders/ImageLoader";
import InfoLoader from "core/components/Loaders/InfoLoader";
import './styles.css';

const LoaderBox = () => (
    <div className="flex-box">
        <ImageLoader />
        <InfoLoader />
    </div>
);

export default LoaderBox;