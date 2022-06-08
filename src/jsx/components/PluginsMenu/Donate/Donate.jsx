import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useTranslation, withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ada from '../../../../icons/project/svgs/cardano.svg';


const Donate = () => {
    const [largeModal, setLargeModal] = useState(false);
    const [copySuccess, setCopySuccess] = useState('');
    const { t } = useTranslation();

    const copyToClipboard = () => {
        var copyText = document.getElementById("address");
        var textArea = document.createElement("textarea");
        textArea.value = copyText.textContent;
        navigator.clipboard.writeText(textArea.value);
        setCopySuccess('Copied!');
    }

    return (
        <><Link to="#" onClick={() => setLargeModal(true)}>
            <svg
                width={24}
                height={12}
                viewBox="0 0 24 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M23.725 5.14889C23.7248 5.14861 23.7245 5.14828 23.7242 5.148L18.8256 0.272997C18.4586 -0.0922062 17.865 -0.0908471 17.4997 0.276184C17.1345 0.643169 17.1359 1.23675 17.5028 1.602L20.7918 4.875H0.9375C0.419719 4.875 0 5.29472 0 5.8125C0 6.33028 0.419719 6.75 0.9375 6.75H20.7917L17.5029 10.023C17.1359 10.3882 17.1345 10.9818 17.4998 11.3488C17.865 11.7159 18.4587 11.7172 18.8256 11.352L23.7242 6.477C23.7245 6.47672 23.7248 6.47639 23.7251 6.47611C24.0923 6.10964 24.0911 5.51414 23.725 5.14889Z"
                    fill="white" />
            </svg>
            <span>Donate for us</span>
        </Link><Modal
            className="fade bd-example-modal-lg"
            show={largeModal}
            size="lg"
        >
                <Modal.Header>
                    <Modal.Title>Donate Us</Modal.Title>
                    <Button
                        variant=""
                        className="close"
                        onClick={() => setLargeModal(false)}
                    >
                        <span>&times;</span>
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <h6>If you want to support our work, you can donate BNB or ADA tokens following these addresses:</h6>
                    <ul className='timeline'>
                        <li>
                            <div className='timeline-panel'>
                                <div className='media m-3'>
                                    <img alt='avatar' width='50' src={ada} />
                                    <div className='media-body ml-3'>
                                        <h5>ADA</h5>
                                        <small className='d-block' id="address">
                                            bnb136ns6lfw4zs5hg4n85vdthaad7hq5m4gtkgf23
                                        </small>

                                    </div>
                                    <div className='media-body ml-5 mt-3'>
                                        <Link to="#" onClick={copyToClipboard}>
                                            <i className="fa fa-copy" />
                                        </Link>
                                        
                                    </div>
                                    <div className='media-body mt-3'>
                                        <span className='text-success'>{copySuccess}</span>
                                    </div>
                                </div>

                            </div>
                        </li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary light"
                        onClick={() => setLargeModal(false)}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal></>
    );
};

export default Donate;
