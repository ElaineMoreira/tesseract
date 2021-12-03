import React, { Component } from 'react'
import './header.css'

export class Header extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1><a
                        className="App-link"
                        href="https://github.com/ElaineMoreira"
                        target="_blank"
                        rel="noopener noreferrer"
                         >
                            Tesseract
                        </a>
                    </h1>
                    <h3>Em breve novidades</h3>
                </header>
            </div>
        )
    }
}

export default Header
