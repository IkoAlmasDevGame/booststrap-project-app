import { useState } from 'react';
import {Container, Row, Col, Image, Button, Modal} from 'react-bootstrap';

function IntroApp(){
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    return (
        <div>
            <Button onClick={handleShow1} variant='primary' style={{marginTop : "2px"}}>Lihat Berita Baru</Button>
            <Button onClick={handleShow2} variant='primary' style={{marginLeft : "5px", marginTop : "2px"}}>Lihat Berita Lama</Button>
            <Modal show={show1} onHide={handleClose1} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title style={{fontSize : "18px", fontFamily : "normal"}}>Berita baru</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    1. Indonesia menang melawan Filiphina ,<br/>
                    2. Jadwal M4 World Championship ,<br/>
                    3. Banjir di KKaligarang ,<br/>
                    4. Potret Toleransi di tengah banjir kudus ,<br/>
                    5. Belum ada berita terbaru
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show2} onHide={handleClose2} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title style={{fontSize : "18px", fontFamily : "normal"}}>Berita Lama</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                1. Berkaca Bencana Alam Sepanjang 2022 ,<br/>
                2. Ahli Geomorfologi UGM: Perhatikan Potensi Bencana Akhir Tahun
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>Close</Button>
                </Modal.Footer>
            </Modal>
            <div id='home'>
                <Container className="text-white d-flex justify-content-center align-items-center mt-3">
                    <Row>
                        <Col>
                            <div className='title'>Seputar Berita Indonesia</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default IntroApp