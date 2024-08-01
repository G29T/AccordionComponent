import React, {useState} from 'react';
import './Accordion.css';

const Accordion = ({items}) => {

    const [openSection, setOpenSection] = useState(new Set()); 

    return (
        <div className="accordion">
            {items.map(({value,title, content}) => {
                const isExpended = openSection.has(value);

                return(
                    <div className="accordion-item" key={value}>
                        <button className="accordion-item-title" type="button" onClick={() => {
                            const newOpenSection = new Set(openSection);
                            newOpenSection.has(value) ? newOpenSection.delete(value) : newOpenSection.add(value);
                            setOpenSection(newOpenSection);
                        }}>
                            {title}
                            <span className={['accordion-icon', isExpended && 'accordion-icon--rotated'].filter(Boolean).join(' ')}/>
                        </button>
                        <div className="accordion-item-contents" hidden={!isExpended}>{content}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Accordion;