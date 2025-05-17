import parse from "html-react-parser";

const PreviewSection = ({
    label,
    htmlContent,
    onCopy,
    copied,
    charCount,
    sectionKey
}) => (
    <div className="preview-section">
        <div className="HTML">
            {parse(htmlContent)}
        </div>
            <p className="counter">
                <i className="fa-solid fa-hashtag"></i>
                    ⠀{htmlContent.length - 14}⠀  
                <button className="copy-btn" onClick={() => onCopy(sectionKey)}>
                    {copied
                    ? <i className="fa-regular fa-square-check"></i>
                    : <i className="fa-solid fa-copy"></i>}
                </button>
            </p>
    </div>
);

export default PreviewSection;