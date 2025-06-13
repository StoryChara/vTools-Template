import { useState } from "react";
import { Col, Row } from 'react-bootstrap';

import PreviewSection from "./PreviewSections";
import './Preview.css';

import { styles as WIE } from '../ramas/wie.js';

const all_styles = [
    { id: 'wie', name: 'WIE UNAL', style: WIE }
];

const Preview = () => {
    const [actualStyle, setActualStyle] = useState(all_styles[0].style);
    const [activeStyleId, setActiveStyleId] = useState(all_styles[0].id);

    const [copied, setCopied] = useState({
        header: false,
        content: false,
        footer: false,
        contact: false,
    });

    const handleStyleChange = (styleObj) => {
        setActualStyle(styleObj.style);
        setActiveStyleId(styleObj.id);
        setCopied({ header: false, content: false, footer: false, contact: false });
    };

    const handleCopy = (section) => {
        if (actualStyle[section]) {
            navigator.clipboard.writeText(actualStyle[section]);
            setCopied(prev => ({ ...prev, [section]: true }));
            setTimeout(() => {
                setCopied(prev => ({ ...prev, [section]: false }));
            }, 1500);
        }
    };

    return (
        <div className="preview-container">
            <div className="style-buttons-row">
                {all_styles.map(styleObj => (
                    <button
                        className="style-button"
                        aria-pressed={styleObj.id === activeStyleId}
                        onClick={() => handleStyleChange(styleObj)}
                        key={styleObj.id}
                    >
                        {styleObj.name}
                    </button>
                ))}
            </div>

            <div className="preview-sections">
                <h2>ACTIVITY NAME</h2>
                <div className="tag">#ieee</div>
                <hr className="divider" />

                <PreviewSection
                    label="Encabezado"
                    htmlContent={actualStyle.header}
                    onCopy={handleCopy}
                    copied={copied.header}
                    sectionKey="header"
                    style={{ margin: "0 5%" }}
                />

                <PreviewSection
                    label="Contenido"
                    htmlContent={actualStyle.content}
                    onCopy={handleCopy}
                    copied={copied.content}
                    sectionKey="content"
                    style={{}}
                />

                <hr className="divider"></hr>

                <Row xs={12} className="div-4">
                    <Col md={12} lg={3} className="section-container" style={{ borderLeft: "0px solid #e37222" }}>
                        <h3 className="text-center"><i class="fa-solid fa-clock"></i> DATE AND TIME</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a egestas tellus, a accumsan tortor.</p>
                    </Col>

                    <Col md={12} lg={3} className="section-container">
                        <h3 className="text-center"><i class="fa-solid fa-location-dot"></i> LOCATION</h3>
                        <PreviewSection
                            htmlContent={actualStyle.location}
                            onCopy={handleCopy}
                            copied={copied.location}
                            sectionKey="location"
                            style={{}}
                        />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a egestas tellus, a accumsan tortor.</p>
                    </Col>

                    <Col md={12} lg={3} className="section-container">
                        <h3 className="text-center"><i class="fa-regular fa-envelope"></i> HOSTS</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a egestas tellus, a accumsan tortor.</p>
                        <PreviewSection
                            htmlContent={actualStyle.contact}
                            onCopy={handleCopy}
                            copied={copied.contact}
                            sectionKey="contact"
                            style={{}}
                        />
                    </Col>

                    <Col md={12} lg={3} className="section-container" style={{ borderRight: "0px solid #e37222" }}>
                        <h3 className="text-center"><i class="fa-solid fa-tags"></i> REGISTRATION</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a egestas tellus, a accumsan tortor.</p>
                    </Col>
                </Row>

                <hr className="divider"></hr>

                <h3><i class="fa-solid fa-user"></i> SPEAKERS</h3>
                <PreviewSection
                    htmlContent={actualStyle.speakers}
                    onCopy={handleCopy}
                    copied={copied.speakers}
                    sectionKey="speakers"
                    style={{}}
                />

                <hr className="divider" style={{borderTop: "1px solid #a0a0a0", width: "90%"}}></hr>

                <h3>Agenda</h3>
                <PreviewSection
                    htmlContent={actualStyle.agenda}
                    onCopy={handleCopy}
                    copied={copied.agenda}
                    sectionKey="agenda"
                    style={{}}
                />

                <hr className="divider"></hr>

                <PreviewSection
                    htmlContent={actualStyle.footer}
                    onCopy={handleCopy}
                    copied={copied.footer}
                    sectionKey="footer"
                    style={{ margin: "0 5%" }}
                />

                <hr className="divider"></hr>

            </div>
        </div>
    );
};

export default Preview;