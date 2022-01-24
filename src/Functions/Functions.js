import axios from "axios";

const functions = {}


functions.showModal = () => {
    return (
        <div id="myModal" className="modal">

            <div className="modal-content">
                <div className="modal-header">
                    <span onClick={() => { setModal('') }} className="close">&times;</span>
                    <h2>{modal}</h2>
                </div>
                <div className="modal-body">
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                </div>
            </div>

        </div>

    )
}

export default functions