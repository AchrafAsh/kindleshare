import React from 'react'

function BlockQuote(props) {
    const { highlight, highlightAuthor } = props;
    return (
        <div>
            <blockquote>
                <h2 className="highlight">{highlight}</h2>
                <footer>{highlightAuthor}</footer>
            </blockquote>
        </div>
    )
}

export default BlockQuote;