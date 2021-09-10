import React from 'react';

function Tile(props) {
    const { url, img, title, description, wide } = props;

    return (
        <div className={wide ? `row__tile row__tile__wide` : `row__tile`}>
            <a className="row__tile__inner" href={url}>
                <img src={img} alt={title} />
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    )
}

export default Tile;