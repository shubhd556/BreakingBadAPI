import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import Logo from '../img/logo.png'
function CharCard({ item }) {
    const [jos, setjos] = useState([]);
    const [modal, setModal] = useState(false);
    useEffect(() => {
        const fetchItems = async () => {
            axios
                .get("https://www.breakingbadapi.com/api/quotes")
                .then((res) => {
                    // console.log(res.data)
                    setjos(res.data);
                });
        };
        fetchItems();
    }, []);
    return (
        <div className="card" key={item.char_id}>
            <Modal
                isOpen={modal}
                ariaHideApp={false}
                style={{
                    overlay: {
                        color: "white",
                        justifyContent: "center",
                    },
                }}
            >

                <div className="Modalclass" key={item.char_id}>
                    <img src={Logo} alt="" style={{height:"100px",backgroundColor:"black"}}/>
                    <h1 style={{ color: "black" }}>{item.name}</h1>
                    <ul>
                        <li style={{ color: "black" }}>
                            <strong style={{ color: "black" }}>
                                Actor Name:
                            </strong>{" "}
                            {item.portrayed}
                        </li>
                        <li style={{ color: "black" }}>
                            <strong style={{ color: "black" }}>
                                Date of Birth:
                            </strong>{" "}
                            {item.birthday}
                        </li>
                        <li style={{ color: "black" }}>
                            <strong style={{ color: "black" }}>
                                Occupation:
                            </strong>{" "}
                            {item.occupation}
                        </li>
                        <li style={{ color: "black" }}>
                            <strong style={{ color: "black" }}>Status:</strong>{" "}
                            {item.status}
                        </li>
                        <li style={{ color: "black" }}>
                            <strong style={{ color: "black" }}>
                                Nickname:
                            </strong>{" "}
                            {item.nickname}
                        </li>
                        <li style={{ color: "black" }}>
                            <strong style={{ color: "black" }}>Seasons:</strong>{" "}
                            {item.appearance + " "}
                        </li>
                        <strong style={{ color: "black" }}>Quotes:</strong>
                        {jos.map((res, key) =>
                            item.name === res.author ? (
                                <div key={res.quote_id}>
                                    <p style={{ color: "black" }}>
                                        {res.quote + " "}
                                    </p>
                                </div>
                            ) : (
                                <p></p>
                            )
                        )}
                    </ul>
                    <button
                        className="CloseButton"
                        onClick={() => setModal(false)}
                    >
                        Close
                    </button>
                </div>
            </Modal>
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.img} alt="" />
                    <button className="CardBtn" onClick={() => setModal(true)}>
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CharCard;
