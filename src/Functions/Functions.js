const functions = {}


functions.showModal = (modal, setModal) => {
    window.onclick = function (event) {
        if (event.target.id == 'myModal') {
            setModal('')
        }
    }
    return (
        <div id="myModal" className="modal">

            <div className="modal-content">
                <div className="modal-header">
                    <span onClick={() => { setModal('') }} className="close">x</span>
                    <a href={modal.link}><h2>{modal.name}</h2></a>
                </div>
                <div className="modal-body">
                    <img src={modal.gif} />
                    <p className="portfolio-description">{modal.summary}</p>


                    <div className="skill-list">

                        {modal.skills.frontend.length > 0 &&
                            <div>
                                <span>frontend:</span>
                                <ul>
                                    {modal.skills.frontend.map((item, i) => {
                                        return (

                                            <li>{item}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        }

                        {modal.skills.backend.length > 0 &&
                            <div>
                                <span>backend:</span>
                                <ul>
                                    {modal.skills.backend.map((item, i) => {
                                        return (

                                            <li>{item}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        }

                        {modal.skills.libraries.length > 0 &&
                            <div>
                                <span>libraries:</span>
                                <ul>
                                    {modal.skills.libraries.map((item, i) => {
                                        return (

                                            <li>{item}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        }
                    </div>


                </div>
            </div>

        </div>

    )
}






functions.showIconModal = (modal, setModal) => {
    window.onclick = function (event) {
        if (event.target.id == 'myModal') {
            setModal('')
        }
    }
    return (
        <div id="myModal" className="modal">

            <div className="modal-content">
                <div className="modal-header">
                    <span onClick={() => { setModal('') }} className="close">x</span>
                    <h2>{modal.title}</h2>
                </div>
                <div className="modal-body">
                    <div className="modal-icon"><modal.icon /></div>
                    <p className="icon-description">{modal.description}</p>

                </div>
            </div>

        </div>

    )
}






export default functions